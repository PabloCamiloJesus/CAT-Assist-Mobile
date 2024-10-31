import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image, Alert } from 'react-native';

const ChatLayout = ({ navigation }) => {
  // Função de navegação para a página de perfil
  const handleProfileClick = () => {
    navigation.navigate('Profile'); // Certifique-se de que a tela de perfil esteja registrada na navegação
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho com o texto atendimento */}
      <View style={styles.Header}>
        <Text style={styles.atendimento}>Atendimento</Text>
      </View>

      {/* Área de mensagens */}
      <ScrollView contentContainerStyle={styles.chatContainer}>
        {/* Mensagem do bot */}
        <View style={styles.messageContainer}>
          <Image
            source={{ uri: 'https://i.pinimg.com/736x/f2/6f/db/f26fdb0529a4f5c4f6352261141dddd0.jpg' }}
            style={styles.profileImage}
          />
          <View style={styles.botMessage}>
            <Text style={styles.botText}>Olá! como posso ajudar?</Text>
          </View>
        </View>

        {/* Mensagem do usuário */}
        <View style={[styles.messageContainer, { justifyContent: 'flex-end' }]}>
          <View style={styles.userMessage}>
            <Text style={styles.userText}>Oiee, eu estou tendo problemas com meu login</Text>
          </View>
          <TouchableOpacity onPress={handleProfileClick}>
            <Image
              source={{ uri: 'https://i.pinimg.com/originals/14/37/4f/14374f6454e77e82c48051a3bb61dd9c.jpg' }}
              style={styles.profileImage}
            />
          </TouchableOpacity>
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
    marginLeft: 10,
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
});

export default ChatLayout;
