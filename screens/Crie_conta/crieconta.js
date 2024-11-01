import React, { useRef, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Animated, Easing, SafeAreaView } from "react-native";

function Cadastro() {
  // Usando o useRef para criar uma Animated.Value que controla a posição da imageSection
  const imagePosition = useRef(new Animated.Value(-250)).current; // Começando fora da tela

  // useEffect para iniciar a animação assim que o componente é montado
  useEffect(() => {
    Animated.timing(imagePosition, {
      toValue: 0, // Valor final para trazê-la para o topo da tela
      duration: 1200, // Duração da animação
      easing: Easing.out(Easing.ease), // Efeito suave
      useNativeDriver: true, // Melhorar o desempenho da animação
    }).start();
  }, [imagePosition]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Seção de imagem com animação */}
        <Animated.View style={[styles.imageSection, { transform: [{ translateY: imagePosition }] }]}>
          <Image
            source={require("../../assets/login.cadastro/bolafutebol.png")}
            style={styles.image}
            resizeMode="contain"
          />
        </Animated.View>

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
            Já possui cadastro? <Text style={styles.loginLink}>Faça Login!</Text>
            <TouchableOpacity>
             
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageSection: {
    backgroundColor: "#bf0b3b", // Parte vermelha da tela
    height: "25%", // Define a altura da parte vermelha em relação à tela
    justifyContent: "center", // Alinha a bola de futebol no centro
    // alignItems: "center",
    height: "35%", // Define a altura da parte vermelha em relação à tela
    justifyContent: "center", // Alinha a bola de futebol no centro verticalmente
    alignItems: "center",
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,

  },
  image: {
    marginLeft: -34,
    width:350,
    height: 250,
    marginBottom: -10, // Metade da bola de futebol fica fora da parte vermelha
    marginRight: "100px",

    marginLeft: "-25%", // Desloca a imagem 25% para a esquerda
  },
  title: {
    display: "flex",
    marginTop: 60, // Pequeno espaço entre a parte vermelha e o título
    fontSize: 32,
    color: "#000",
    textAlign: "center",
  },
  form: {
    width: "80%",
    alignSelf: "center",
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
    backgroundColor: "#bf0b3b", // Cor vermelha do botão
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 15,
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
