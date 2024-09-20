import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";

function Cadastro() {
  return (
    <View style={styles.container}>
      {/* Seção de imagem e título */}
      <View style={styles.imageSection}>
        <Image
          source={require("../../assets/login.cadastro/bolafutebol.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.title}>Crie sua conta</Text>

      {/* Formulário de cadastro */}
      <View style={styles.form}>
      
        <TextInput
          style={styles.input}
          placeholder="Nome de usuário:"
          placeholderTextColor="#000"
        />
        <TextInput
          style={styles.input}
          placeholder="E-mail:"
          placeholderTextColor="#000"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha:"
          placeholderTextColor="#000"
          secureTextEntry
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

        <Text style={styles.loginText}>
          Já possui cadastro?
          <TouchableOpacity>
            <Text style={styles.loginLink}> Faça Login!</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
     display: "flex",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  imageSection: {
    backgroundColor: "#bf0b3b", // Parte vermelha da tela
    width: "100%",
    paddingVertical: 1,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
  },
  image: {
    marginLeft: '15%',
    width: 200,
    height: 200,
    display: "flex"
  },
  title: {
    alignItems: "center",
    fontSize: 24,
    color: "#000",
    marginVertical: 20,
  },
  form: {
    width: "80%",
    marginTop: 30,
  },
  input: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    marginBottom: 20,
    fontSize: 16,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#bf0b3b",
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 5,
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
  },
});

export default Cadastro;
