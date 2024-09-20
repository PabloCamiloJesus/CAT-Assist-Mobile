import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const RecuperarSenha = () => {
  const [email, setEmail] = useState('');

  const handleEnviar = () => {
    // Lógica para enviar o e-mail para recuperação de senha
    alert(`Enviando código para: ${email}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recuperar senha</Text>
      <Text style={styles.subtitle}>
        Enviaremos um código em seu e-mail para redefinir sua senha
      </Text>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Insira seu E-mail:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail"
          placeholderTextColor="#888"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TouchableOpacity style={styles.button} onPress={handleEnviar}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 20,
  },
  inputContainer: {
    backgroundColor: '#000',
    padding: 20,
    borderRadius: 15,
    width: '100%',
  },
  label: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#333',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#444',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#b3003b',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default RecuperarSenha;