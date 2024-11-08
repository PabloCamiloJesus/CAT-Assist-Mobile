import React, { useRef, useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Animated, Easing, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { db, auth, provider } from "../../components/services/firebase";

import pfp from "../../assets/images/user.png"

function Cadastro() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConfPassword] = useState("");
  const [imgFilePath, setimgFilePath] = useState(pfp);

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
  
  const register = ({ navigation }) => {

    if (password != conPassword) {
      seterrorMessage('As senhas não se coincidem.');
      return
    }

    createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;

        db.collection('users').doc(user.uid).set({
          username: username,
          email: email,
          imgUrl: imgFilePath,
        });

        navigation.navigate("PageList", { messageType: "success", message: "Usuário cadastrado com sucesso!" })
      })
      .catch(error => {

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

        console.log(error)

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
              onChangeText={(e) => {console.log(username); setUsername(e)}}
              placeholderTextColor="#000"
            />
            <TextInput
              style={styles.input}
              placeholder="E-mail:"
              onChangeText={(e) => {console.log(email); setEmail(e)}}
              placeholderTextColor="#000"
              keyboardType="email-address"
            />
            <TextInput
              style={styles.input}
              placeholder="Senha:"
              onChangeText={(e) => {console.log(password); setPassword(e)}}
              placeholderTextColor="#000"
              secureTextEntry
            />
            <TextInput
              style={styles.input}
              placeholder="Confirmar senha:"
              onChangeText={(e) => {console.log(conPassword); setConfPassword(e)}}
              placeholderTextColor="#000"
              secureTextEntry
            />

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText} onPress={() => register()}>Cadastrar</Text>
            </TouchableOpacity>

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
