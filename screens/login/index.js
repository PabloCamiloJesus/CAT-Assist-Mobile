import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";

function Login() {
  return (
    <View style={styles.container}>
      {/* Seção de imagem e título */}
      <View style={styles.imageSection}>
        <Image
          source={require("../../assets/login.cadastro/bolabasquete.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.title} >Faça seu login</Text>

      {/* Formulário de login */}
      <View style={styles.form}>

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
          Não possui cadastro?
          <TouchableOpacity>
          <Text style={styles.loginLink}>Faça seu cadastro!</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: -3,
    display: "flex",
    backgroundColor: "#fff",
    alignItems: "center",
    
    justifyContent: "center",
    flex:2
  },
  imageSection: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: 'center',
    backgroundColor: "#000000", // Parte preta da tela alterada de acordo com o figma
    width: "100%",
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
  },
  image: {
    
    
    width: 150,
    height: 150,
    display: "flex",
    marginRight: "-33"

  },
  title: {
    alignItems: "center",
    fontSize: 50,
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
    backgroundColor: "#000000", // Parte preta do buttom alterada de acordo com o figma
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

export default Login;
