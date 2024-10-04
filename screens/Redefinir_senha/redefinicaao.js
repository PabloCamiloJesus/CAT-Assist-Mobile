import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Redefinicao = () =>  {
  const [email, setEmail] = useState('');

  const Enviar = () => {
    // Lógica para enviar o e-mail para recuperação de senha
    alert(`Enviando código para: ${email}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Redefinir senha</Text>
      <Text style={styles.subtitle}>
        Insira sua nova senhas
      </Text>
      
      <View style={styles.inputContainer}>
       
        <TextInput
          style={styles.input}
          placeholder="Digite sua nova senha:"
          placeholderTextColor="#888"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Confirme sua nova senha:"
          placeholderTextColor="#888"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <TouchableOpacity style={styles.button} onPress={Enviar}>
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

export default Redefinicao;