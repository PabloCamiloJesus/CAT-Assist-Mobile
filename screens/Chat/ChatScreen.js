import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import 'bootstrap-icons/font/bootstrap-icons.css';

import {
  collection,
  addDoc,
  onSnapshot,
  query,
  where,
  serverTimestamp,
} from "firebase/firestore";

import { auth, db } from "../../components/services/firebase";
import firebase from "firebase/compat/app";
import { onAuthStateChanged } from "firebase/auth";
import "firebase/compat/firestore";

import { useNavigation } from '@react-navigation/native';
import Loading from '../loading/loading';

const ChatLayout = ({ navigation }) => {
  const [employees, setEmployeeId] = useState([]);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);

  const [clientId, setClientChatId] = useState(null);

  const [chatterName, setChatter] = useState("Funcionário");
  const [chatId, setChatId] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {

        setClientChatId(auth.currentUser.uid);
        setUser(auth.currentUser);
        setLoading(false);

      } else {

        setUser(null);
        setLoading(false);
        navigation.navigate("Login");
      }

    });
  }, [auth]);

  useEffect(() => {
    if (chatId) {
      const messagesQuery = query(
        collection(db, "messages"),
        where("chatId", "==", chatId)
      );

      onSnapshot(messagesQuery, (snapshot) => {
        const messagesArray = snapshot.docs.map((doc) => doc.data());

        var sortedMsgs = messagesArray.sort((a, b) => a.timestamp - b.timestamp);

        setMessages(sortedMsgs);
      });
    }
  }, [chatId]);

  const sendMessage = async () => {
    setSending(true)
    setSending(true)

    if (newMessage.trim()) {
      var data = {
        chatId: chatId,
        senderId: clientId,
        text: newMessage,
        timestamp: serverTimestamp(),
      };

      await addDoc(collection(db, "messages"), data);

      setNewMessage("");
      setSending(false)
    }
  };

  useEffect(() => {
    const employeesQuery = query(collection(db, "chats"));

    onSnapshot(employeesQuery, (snapshot) => {
      const employeesArr = snapshot.docs
        .map((doc) => doc.data())
        .filter((chat) => chat.users.some((user) => user.id === clientId));

      setEmployeeId(employeesArr);

    });
  }, [employees]);

  if (loading) return <Loading />;

  if (chatId) {

    return (
      <View style={styles.container}>
        {/* Cabeçalho com o texto atendimento */}
        <View style={styles.Header}>
          <TouchableOpacity onPress={() => setChatId(null)} style={styles.backButton}>
            <Text style={styles.backButtonText}>←</Text>
          </TouchableOpacity>
          <Text style={styles.atendimento}> Atendimento</Text>
        </View>

        {/* Área de mensagens FINAL */}
        <ScrollView contentContainerStyle={styles.chatContainer}>
          {messages.map((msg, index) => (
            <View key={index} style={[styles.messageContainer, msg.senderId === clientId ? { justifyContent: 'flex-end' } : {}]}>
              
              <View style={msg.senderId === clientId ? styles.userMessage : styles.botMessage}>
                <Text style={msg.senderId === clientId ? styles.userText : styles.botText}>
                  {msg.senderId === clientId ? "" : chatterName + ": "}{msg.text}
                </Text>
              </View>
            </View>
          ))}

        </ScrollView>

        {/* Barra de entrada */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Digite aqui..."
            value={newMessage}
            onChangeText={(e) => setNewMessage(e)}
            placeholderTextColor="#999"
          />
          <TouchableOpacity disabled={sending} onPress={() => sendMessage()} style={styles.sendButton}>
            <Text style={styles.sendButtonText}>Enviar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );

  } else {

    return (
      <View style={styles.container2}>
        <View style={styles.Header}>
          <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")} style={styles.backButton}>
            <Text style={styles.backButtonText}>←</Text>
          </TouchableOpacity>
          <Text style={styles.atendimento}> Atendimento</Text>
        </View>
        {employees.map((employee, index) => {
          return (
            <View style={styles.contactList} key={index}>
              {employee["users"].map((employee2, index2) => {
                return (
                  <View key={index2}>
                    {employee2.id != clientId && employee2.id != clientId && (
                      <TouchableOpacity
                        style={styles.contactButton}
                        onPress={() => {
                          setChatId(employee.id);
                          setChatter(employee2.name);
                        }}
                      >
                        <Text>
                          {employee2.name ? employee2.name : "Default"}
                        </Text>
                      </TouchableOpacity>
                    )}
                  </View>
                );
              })}
            </View>
          );
        })}
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0ecec',
    justifyContent: 'space-between',
  },
  container2: {
    flex: 1,
    backgroundColor: '#f0ecec',
    width: "100%"
  },
  contactButton: {
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 2,
    width: '100%',
    paddingVertical: 12,
  },
  contactList: {
    flex: 1,
    flexDirection: "column",
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  Header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 45,
    paddingHorizontal: 10,
  },
  atendimento: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 0,
  },
  chatContainer: {
    padding: 10,
    paddingTop: 40,
    justifyContent: 'flex-start',
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  botMessage: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 20,
    maxWidth: '80%',
  },
  botText: {
    color: '#000',
    fontSize: 16,
  },
  userMessage: {
    backgroundColor: '#c00c3c',
    color: '#ffffff',
    padding: 10,
    borderRadius: 20,
    maxWidth: '80%',
  },
  userText: {
    color: '#fff',
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
    backgroundColor: '#e8e4e4',
    width: '100%',
  },
  input: {
    flex: 1,
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
    margin: 4,
  },
  sendButton: {
    backgroundColor: '#c00c3c',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginLeft: 10,
    marginRight: 5,
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  backButton: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    marginLeft: 1,
  },
  backButtonText: {
    fontSize: 26,
  },

});

export default ChatLayout;
