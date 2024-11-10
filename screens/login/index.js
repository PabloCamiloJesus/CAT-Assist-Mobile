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
  onSnapshot
} from "firebase/firestore";

// import { process.env.EXPO_PUBLIC_EXPO_CLIENTID, process.env.EXPO_PUBLIC_ANDROID_CLIENTID } from "@env";

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
    Animated.timing(imagePosition, {
      toValue: 0,
      duration: 1000,
      easing: Easing.bounce,
      useNativeDriver: true,
    }).start();
  }, [imagePosition]);

  const logIn = ({ navigation }) => {

    signInWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        setEmail("");
        setPassword("");

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
            seterrorMessage(`Ocorreu um erro inesperado. Tente novamente mais tarde`);
            break;
        }

        console.log(error)

      });

  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.imageSection, { transform: [{ translateY: imagePosition }] }]}>
        <Image
          source={require("../../assets/images/bolabasquete.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </Animated.View>

      {/* Usando KeyboardAvoidingView e ScrollView para lidar com o teclado */}
      <KeyboardAvoidingView
        style={styles.keyboardContainer}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.form}>
            <Text style={styles.title}>Faça seu login</Text>
            <TextInput
              style={styles.input}
              placeholder="E-mail:"
              inputMode="email"
              placeholderTextColor="#000"
              value={email}
              onChangeText={(e) => { console.log(email); setEmail(e) }}
              keyboardType="email-address"
              autoComplete="email"
            />
            <TextInput
              style={styles.input}
              placeholder="Senha:"
              placeholderTextColor="#000"
              value={password}
              onChangeText={(e) => { console.log(password); setPassword(e) }}
              secureTextEntry
              autoComplete="password"
            />
            <Text style={styles.loginLinks}>Esqueci minha senha</Text>

            <View styles={styles.buttonCont}>
              <TouchableOpacity onPress={() => logIn({ navigation })} style={styles.button}>
                <Text style={styles.buttonText}>Entrar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => promptAsync()} style={styles.buttonGoogle}>
                <Text style={styles.buttonText}>Entrar com o google</Text>
              </TouchableOpacity>
              <Text>{errorMessage}</Text>
            </View>

            <Text style={styles.loginText}>
              Não possui cadastro?{" "}
              <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
                <Text style={styles.loginLink}>Faça seu cadastro!</Text>
              </TouchableOpacity>
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  buttonCont: {
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  },
  keyboardContainer: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
    paddingBottom: 0,
  },
  imageSection: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  image: {
    marginTop: -20,
    height: 430,
    width: "100%",
    marginBottom: -20,
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
    marginTop: 150,
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
    backgroundColor: "#000",
    paddingVertical: 15,
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
  },
  loginLinks: {
    textAlign: 'center',
    color: "gray",
    textDecorationLine: "underline",
  },
});

export default Login;
