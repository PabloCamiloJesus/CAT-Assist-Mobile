import React, { useRef, useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Animated, Easing, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { db, auth } from "../../components/services/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

import * as Google from 'expo-auth-session/providers/google';

import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  deleteDoc,
  onSnapshot
} from "firebase/firestore";

import uuid from 'react-native-uuid';

function Login() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, seterrorMessage] = useState("");

  const imagePosition = useRef(new Animated.Value(-300)).current;

  // acesso é negado devido a verificação do google
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: process.env.EXPO_PUBLIC_EXPO_CLIENTID,
    webClientId: process.env.EXPO_PUBLIC_EXPO_CLIENTID,
    androidClientId: process.env.EXPO_PUBLIC_ANDROID_CLIENTID,
  });

  useEffect(() => {
    if (response?.type === 'success') {
      const auth = response;
      
      updateEmployees();
    }
  }, [response]);

  useEffect(() => {
    Animated.timing(imagePosition, {
      toValue: 0,
      duration: 1000,
      easing: Easing.bounce,
      useNativeDriver: true,
    }).start();
  }, [imagePosition]);
  
  const updateEmployees = async () => {
    const employeesQuery = query(collection(db, "employee"));

    onSnapshot(employeesQuery, async (snapshot) => {
      const employeesArray = snapshot.docs.map((doc) => ({
        ...doc.data(),
        Id: doc.id,
      }));

      const currentUserId = auth.currentUser.uid;
      const currentUserName = auth.currentUser.displayName;
      const currentUserEmail = auth.currentUser.email;

      const chatsQuery = query(collection(db, "chats"));
      const chatsSnapshot = await getDocs(chatsQuery);

      const chatsArray = chatsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      const validEmployeeIds = employeesArray.map((employee) => employee.employeeId);

      chatsArray.forEach(async (chat) => {
        const isCurrentUserInChat = chat.users.some(
          (user) => user.id === currentUserId
        );
        
        const otherUser = chat.users.find((user) => user.id !== currentUserId);

        if (
          isCurrentUserInChat &&
          (!otherUser || !validEmployeeIds.includes(otherUser.id))
        ) {
          await deleteDoc(doc(db, "chats", chat.id));
        }
      });

      employeesArray.forEach(async (employee) => {
        if (employee.employeeId !== currentUserId) {
          const existingChat = chatsArray.find((chat) => {
            const userIds = chat.users.map((user) => user.id);
            return (
              userIds.includes(currentUserId) &&
              userIds.includes(employee.employeeId) &&
              userIds.length === 2
            );
          });

          if (!existingChat) {
            const chatData = {
              id: uuid.v4(),
              users: [
                {
                  name: currentUserName,
                  email: currentUserEmail,
                  id: currentUserId,
                },
                {
                  name: employee.name,
                  email: employee.email,
                  id: employee.employeeId,
                },
              ],
            };

            await addDoc(collection(db, "chats"), chatData);
          }
        }
      });
    });
  };

  const logIn = ({ navigation }) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        setEmail("");
        setPassword("");

        updateEmployees();

        navigation.navigate('HomeScreen');
      })
      .catch(error => {
        switch (error.code) {
          case 'auth/user-not-found':
            seterrorMessage('Usuário não encontrado. Verifique seu email e tente novamente.');
            break;
          case 'auth/invalid-credential':
            seterrorMessage('Usuário não encontrado. Verifique seu email e tente novamente.');
            break;
          case 'auth/wrong-password':
            seterrorMessage('Senha incorreta. Verifique sua senha e tente novamente.');
            break;
          case 'auth/invalid-email':
            seterrorMessage('Email incorreto. Verifique seu email e tente novamente.');
            break;
          default:
            seterrorMessage("Ocorreu um erro inesperado. Tente novamente mais tarde");
            break;
        }

        console.log(error);
      });
  };

  return (
    <KeyboardAvoidingView
      style={styles.keyboardContainer}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.select({ ios: 60, android: 0 })}
    >
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <Animated.View style={[styles.imageSection, { transform: [{ translateY: imagePosition }] }]}>
          <Image
            source={require("../../assets/images/bolabasquete.png")}
            style={styles.image}
            resizeMode="contain"
          />
        </Animated.View>

        <View style={styles.form}>
          <Text style={styles.title}>Faça seu login</Text>
          <TextInput
            style={styles.input}
            placeholder="E-mail:"
            inputMode="email"
            placeholderTextColor="#000"
            value={email}
            onChangeText={(e) => setEmail(e)}
            keyboardType="email-address"
            autoComplete="email"
          />
          <TextInput
            style={styles.input}
            placeholder="Senha:"
            placeholderTextColor="#000"
            value={password}
            onChangeText={(e) => setPassword(e)}
            secureTextEntry
            autoComplete="password"
          />
          <Text>{errorMessage}</Text>
          
          <Text style={styles.loginLinks}>Esqueci minha senha</Text>

          <View style={styles.buttonCont}>
            <TouchableOpacity onPress={() => logIn({ navigation })} style={styles.button}>
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => promptAsync()} style={styles.buttonGoogle}>
              <Text style={styles.buttonText}>Entrar com o google</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.loginText}>Não possui cadastro?{""}</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
            <Text style={styles.loginLink}>Faça seu cadastro!</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboardContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
    paddingBottom: 20,
  },
  imageSection: {
    position: "relative",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  image: {
    height: 430,
    width: "100%",
  },
  title: {
    fontSize: 32,
    color: "#000",
    textAlign: "center",
    marginBottom: 20,
  },
  form: {
    width: "80%",
    alignSelf: "center",
  },
  input: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    marginBottom: 20,
    fontSize: 16,
    paddingHorizontal: 10,
  },
  buttonCont: {
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
    width: "100%",

  },
  button: {
    backgroundColor: "#000",
    paddingVertical: 15,
    width: "100%",
    alignItems: "center",
    borderRadius: 15,
    marginTop: 20,
  },
  buttonGoogle: {
    backgroundColor: "#000",
    paddingVertical: 10,
    alignItems: "center",
    width: "100%",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
  loginText: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 14,
    color: "#000",
  },
  loginLink: {
    color: "#bf0b3b",
    textDecorationLine: "underline",
    textAlign: "center",
    fontSize: 14,
  },
  loginLinks: {
    textAlign: 'center',
    color: "gray",
    textDecorationLine: "underline",
  },
});

export default Login;

