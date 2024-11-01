  import React, { useRef, useEffect } from "react";
  import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Animated, Easing } from "react-native";
  import { useNavigation } from "@react-navigation/native"; // Importando o hook useNavigation

  function Login() {
    const navigation = useNavigation(); // Usando o hook para obter o objeto navigation

    // Usando o useRef para criar uma Animated.Value que controla a posição do imageSection
    const imagePosition = useRef(new Animated.Value(-300)).current; // Começando fora da tela

    // useEffect para iniciar a animação assim que o componente é montado
    useEffect(() => {
      Animated.timing(imagePosition, {
        toValue: 0, // Valor final para trazê-la para o topo da tela
        duration: 1000, // Duração da animação
        easing: Easing.bounce, // Efeito de quicar
        useNativeDriver: true, // Melhorar o desempenho da animação
      }).start();
    }, [imagePosition]);

    return (
      <View style={styles.container}>
        {/* Animando a seção de imagem */}
        <Animated.View style={[styles.imageSection, { transform: [{ translateY: imagePosition }] }]}>
          <Image
            source={require("../../assets/login.cadastro/bolabasquete.png")}
            style={styles.image}
            resizeMode="contain"
          />
        </Animated.View>

       

        {/* Formulário de login */}
        <View style={styles.form}>
        <Text style={styles.title}>Faça seu login</Text>
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
  <Text style={styles.loginLinks}>Esqueci minha senha</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>

          <Text style={styles.loginText}>
            Não possui cadastro?
            <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
            
            </TouchableOpacity> <Text style={styles.loginLink}>Faça seu cadastro!</Text>
          </Text>
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      
      position: 'fixed'
    },
    imageSection: {
      position: "absolute", // Deixa a imagem e a parte preta fixas no topo
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: "#000", // Parte preta da tela
      height: "30%", // Define a altura da parte preta
      justifyContent: "center",
      alignItems: "center",
      borderBottomLeftRadius: 25,
      borderBottomRightRadius: 25
    },
    image: {
      
      marginBottom: "-50%",
      width: 170,
      height: 170
    },
    title: {
      alignItems: 'center',
      marginTop: "60%", // Ajuste para alinhar o título corretamente abaixo da parte preta
      fontSize: 40,
      color: "#000",
      marginVertical: 20,
      position: 'fixed'
    },
    form: {
      padding: 5,
      width: "80%",
      marginTop: 50,
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
      backgroundColor: "#000000", // Parte preta do botão
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
    loginLinks: {

      textAlign: 'center',
      color: "gray",
      textDecorationLine: "underline",
    },
  });

  export default Login;
