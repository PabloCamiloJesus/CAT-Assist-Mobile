import React, { useRef, useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Animated, Easing, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { db, auth, provider } from "../../components/services/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import * as Google from 'expo-auth-session/providers/google';

import {
  collection,
  addDoc,
} from "firebase/firestore";

// import { process.env.EXPO_PUBLIC_EXPO_CLIENTID, process.env.EXPO_PUBLIC_ANDROID_CLIENTID } from "@env";

function Cadastro() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConfPassword] = useState("");
  const photoURL = "https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg";
  const [errorMessage, seterrorMessage] = useState("");

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: process.env.EXPO_PUBLIC_EXPO_CLIENTID,
    webClientId: process.env.EXPO_PUBLIC_EXPO_CLIENTID,
    androidClientId: process.env.EXPO_PUBLIC_ANDROID_CLIENTID,
    scopes: ['profile', 'email'],
  },
  { native: 'com.toranjeworks.catassist://login' });

  const imagePosition = useRef(new Animated.Value(-250)).current;

  const navigation = useNavigation();

  useEffect(() => {
    Animated.timing(imagePosition, {
      toValue: 0,
      duration: 1200,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  }, [imagePosition]);

  useEffect(() => {
    if (response?.type === 'success' && response.authentication) {
      const { idToken } = response.authentication;

      const credential = GoogleAuthProvider.credential(idToken);

      signInWithCredential(auth, credential)
        .then(userCredential => {
          console.log('User signed in:', userCredential.user);
          updateEmployees();
        })
        .catch(error => {
          console.error('Error signing in with Firebase:', error);
        });
    }
  }, [response]);

  const register = ({ navigation }) => {

    if (password != conPassword) {
      seterrorMessage('As senhas não se coincidem.');
      return
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(async userCredentials => {
        const user = userCredentials.user;
        setUsername("");
        setEmail("");
        setPassword("");
        setConfPassword("");

        await updateProfile(auth.currentUser, {
          displayName: username,
          photoURL: photoURL
        })

        navigation.navigate("Login")
      })
      .catch(error => {
        console.log(error);
        switch (error.code) {
          case 'auth/email-already-in-use':
            seterrorMessage('Este email já está em uso. Por favor, use outro email.');
            break;
          case 'auth/invalid-email':
            seterrorMessage('Formato de email inválido. Por favor, insira um email válido.');
            break;
          case 'auth/operation-not-allowed':
            seterrorMessage('O registro de usuários está desativado. Por favor, entre em contato com o suporte.');
            break;
          case 'auth/weak-password':
            seterrorMessage('A senha é muito curta. Por favor, insira uma senha com pelo menos 6 caracteres.');
            break;
          default:
            seterrorMessage('Ocorreu um erro inesperado. Por favor, tente novamente mais tarde.');
            break;
        }
      });
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
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
              inputMode="text"
              id="name"
              value={username}
              onChangeText={(e) => { console.log(username); setUsername(e) }}
              placeholderTextColor="#000"
              keyboardType="default"
              autoComplete="username"
            />
            <TextInput
              style={styles.input}
              placeholder="E-mail:"
              inputMode="email"
              id="email"
              value={email}
              onChangeText={(e) => { console.log(email); setEmail(e) }}
              placeholderTextColor="#000"
              keyboardType="email-address"
              autoComplete="email"
            />
            <TextInput
              style={styles.input}
              placeholder="Senha:"
              id="password"
              value={password}
              onChangeText={(e) => { console.log(password); setPassword(e) }}
              placeholderTextColor="#000"
              secureTextEntry
              autoComplete="password"
            />
            <TextInput
              style={styles.input}
              placeholder="Confirmar senha:"
              id="confirmpassword"
              value={conPassword}
              onChangeText={(e) => { console.log(conPassword); setConfPassword(e) }}
              placeholderTextColor="#000"
              secureTextEntry
              autoComplete="password"
            />
            <Text style={{ color: "#f00", textAlign: "center" }}>{errorMessage}</Text>

            <View>
              <TouchableOpacity style={styles.button} onPress={() => register({ navigation })}>
                <Text style={styles.buttonText}>Cadastrar</Text>
              </TouchableOpacity>
              <TouchableOpacity disabled={!request} onPress={() => promptAsync()} style={styles.buttonGoogle}>
                <Text style={styles.buttonText}>Entrar com o google</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.loginText}>
              Já possui cadastro? <Text style={styles.loginLink} onPress={() => navigation.navigate("Login")}>Faça Login!</Text>
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
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
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingBottom: 110, // Ajuste para evitar espaço extra
  },
  imageSection: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    marginTop: -40,
    height: 430,
    width: "100%",
    marginBottom: -30,
  },
  title: {
    marginTop: 10,
    fontSize: 28,
    color: "#000",
    textAlign: "center",
  },
  form: {
    width: "80%",
    alignSelf: "center",
    marginTop: 10,
  },
  input: {
    height: 45,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    marginBottom: 15,
    fontSize: 16,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#BF0B3B",
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 15,
    marginTop: 15,
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
    marginTop: 15,
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
