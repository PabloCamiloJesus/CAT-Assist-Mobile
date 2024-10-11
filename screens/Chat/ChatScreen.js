import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';

const Chat= () => {
  return (
    <View style={styles.container}>
      {/* Texto no topo da tela */}
      <View style={styles.topText}>
        <Text style={styles.atendimento}>Atendimento</Text>
      </View>

      {/* Área de mensagens */}
      <ScrollView contentContainerStyle={styles.chatContainer}>
        {/* Mensagem do bot */}
        <View style={styles.messageContainer}>
          <View style={styles.botMessage}>
            <Text style={styles.botText}>Olá! como posso ajudar?</Text>
          </View>
        </View>

        {/* Mensagem do usuário */}
        <View style={[styles.messageContainer, { justifyContent: 'flex-end' }]}>
          <View style={styles.userMessage}>
            <Text style={styles.userText}>Oiee, eu estou tendo problemas com meu login</Text>
          </View>
        </View>
      </ScrollView>

      {/* Barra de entrada */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite aqui..."
          placeholderTextColor="#999"
        />
        <TouchableOpacity style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0ecec',
    justifyContent: 'space-between',
  },
  topText: {
    position: 'absolute',
    top: 30,
    left: 0,
    right: 0,
    padding: 10,
  },
  atendimento: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  chatContainer: {
    padding: 10,
    paddingTop: 90, // Para criar espaço para o texto no topo
    justifyContent: 'flex-start',
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  botMessage: {
    alignSelf: 'flex-start',
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
    alignSelf: 'flex-end',
    backgroundColor: '#c00c3c',
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
});

export default Chat;
