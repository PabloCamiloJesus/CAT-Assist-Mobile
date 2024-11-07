import React, { useRef, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Animated, Easing, SafeAreaView } from "react-native";

function Cadastro() {
  const imagePosition = useRef(new Animated.Value(-250)).current;

  useEffect(() => {
    Animated.timing(imagePosition, {
      toValue: 0,
      duration: 1200,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  }, [imagePosition]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Animated.View style={[styles.imageSection, { transform: [{ translateY: imagePosition }] }]}>
          <Image
            source={require("../../assets/images/bolafutebol.png")}
            style={styles.image}
            resizeMode="contain"
          />
        </Animated.View>

        <Text style={styles.title}>Crie sua conta</Text>

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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    marginTop: -10,
    height: 385,
    width: 390,
    marginBottom: -30,
  },
  title: {
    marginTop: 10, // Menor margem superior
    fontSize: 28, // Redução do tamanho da fonte
    color: "#000",
    textAlign: "center",
  },
  form: {
    width: "80%",
    alignSelf: "center",
    marginTop: 10, // Menor margem superior
  },
  input: {
    height: 45, // Redução da altura dos inputs
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    marginBottom: 15, // Redução do espaço entre os inputs
    fontSize: 16,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#BF0B3B",
    paddingVertical: 12, // Redução do padding do botão
    alignItems: "center",
    borderRadius: 15,
    marginTop: 15,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
  loginText: {
    marginTop: 15, // Redução da margem superior
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
