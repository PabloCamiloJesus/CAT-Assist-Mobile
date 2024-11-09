import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image,  } from 'react-native';

const ChatbotScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Cabeçalho com o texto atendimento */}
      <View style={styles.Header}>
      <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}
       style={styles.backButton}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.atendimento}> Luna</Text>
        <TouchableOpacity style={styles.endButton}>
          <Text style={styles.endButtonText}>Finalizar</Text>
        </TouchableOpacity>
      </View>

      {/* Área de mensagens */}
      <ScrollView contentContainerStyle={styles.chatContainer}>
        {/* Mensagem do bot */}
        <View style={styles.messageContainer}>
          <Image
            source={{ uri: 'https://pbs.twimg.com/media/GbLw7wRakAMc5uR?format=jpg&name=900x900' }}
            style={styles.profileImage}
          />
          <View style={styles.botMessage}>
            <Text style={styles.botText}>Olá! 👋 Sou a Luna, a assistente virtual do SESI-CAT! 😊 Estou aqui para te ajudar a descobrir tudo sobre o nosso centro de atividades e seus benefícios. 😄 Em que posso te ajudar hoje? 🤔</Text>
          </View>
        </View>

        {/* Mensagem do usuário */}
        <View style={[styles.messageContainer, { justifyContent: 'flex-end' }]}>
          <View style={styles.userMessage}>
            <Text style={styles.userText}>Oiee, eu estou tendo problemas com meu login</Text>
          </View>
            <Image
              source={{ uri: 'https://i.pinimg.com/originals/14/37/4f/14374f6454e77e82c48051a3bb61dd9c.jpg' }}
              style={styles.profileImage}
            />
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
  endButton: {
    position: "absolute",
    right: 10,
    top: 50,
    backgroundColor: '#c00c3c',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 10,
  }, 
   endButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  backButton: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    display:"flex",
    alignItems: "center",
    justifyContent: "center"
  },
  backButtonText: {
    fontSize: 26,
  },

});

export default ChatbotScreen

