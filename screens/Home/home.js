import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';

export default function App({navigation}) {
  return (
    // Scrollview pra pode deslizar pela pagina
    <ScrollView style={styles.container}>
      {/* Fundo com imagem principal */}
      <ImageBackground 
        source={require("../../assets/images/camposesi.jpg")}
        style={styles.background}
      >
        {/* view para criar uma camada escura e diminuir a opacidade */}
        <View style={styles.overlay} />

        {/* Conteúdo do site */}
        <View style={styles.content}>
          <Text style={styles.title}>UNA</Text>
          <Text style={styles.description}>
          Conheça Luna, Nossa Assistente Virtual, pronta para auxiliá-lo(a) na resolução de suas necessidades. Inteligente e eficiente, Luna está à disposição para oferecer suporte e orientações precisas em diversas situações. Experimente agora e descubra como Luna pode facilitar sua experiência.
          </Text>
          
          <TouchableOpacity onPress={() => navigation.navigate("ChatbotScreen")}
          style={styles.button}>
            <Text style={styles.buttonText}>ASSISTENTE VIRTUAL</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>

      {/* ----------------------------------------------Seção Atendimento Online-------------------------------------------------- */}
      <View style={styles.content3}>
        {/* Título */}
        <Text style={styles.title3}>ATENDIMENTO ONLINE</Text>
          {/* imagem representativa */}
        <Image
          source={require("../../assets/images/atendimento.png")}
          style={styles.image}
        />
        {/* descrição */}
        <Text style={styles.description3}>
          Você pode falar com um membro da nossa secretaria através do atendimento online durante os seguintes horários:
          Terça a Sexta: das 8h às 20h
          Sábado: das 8h ao 12hrs
          Domingo e Segunda: Fechado
        </Text>
        {/* Botao de saiba mais */}
        <TouchableOpacity  onPress={() => navigation.navigate("Chat")}
         style={styles.button2}>
          <Text style={styles.buttonText3}>Suporte</Text>
        </TouchableOpacity>
      </View>

      {/* Linha preta divisória */}
      <View style={styles.linha} />

      {/* ----------------------------------------Seção Atendimento Automático-------------------------------------------------------- */}
      <View style={styles.content3}>
        {/* titulo */}
        <Text style={styles.title3}>SOBRE NÓS</Text>
        {/* imagem representativa */}
        <Image
         source={require("../../assets/images/assistente-virtual.png")}
          style={styles.image}
        />
        {/* Descricao */}
        <Text style={styles.description3}>
        Um pouco sobre o que somos e o que pretendemos alcançar.
        </Text>
        {/* Botao de redirecionamento a assistente virtual */}
        <TouchableOpacity  onPress={() => navigation.navigate("ChatbotScreen")}
        style={styles.button3}>
          <Text style={styles.buttonText3}>Assistente Virtual</Text>
        </TouchableOpacity>
      </View>
      {/* ----------------------------------------Seção Sobre Nos--------------------------------------------------------  */}
      <View style={styles.content4}>
        {/* titulo */}
        <Text style={styles.title4}>SOBRE NÓS</Text>
        {/* imagem representativa */}
        {/* Descricao */}
        <Text style={styles.description4}>
        Um pouco sobre o que somos e o que pretendemos alcançar.
        </Text>
        {/* Botao de redirecionamento a assistente virtual */}
        <TouchableOpacity  onPress={() => navigation.navigate("Sobrenos")}
        style={styles.button4}>
          <Text style={styles.buttonText4}>Mais informações</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

// area estilizacao
const styles = StyleSheet.create({
// container geral
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  // imagem de fundo principal
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 550,
  },
  // camada de cor por cima para diminuir a opacidade
  overlay: {
    //  preencher toda area
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Sobreposição para escurecer a imagem de fundo
  },
  // area do conteudo
  content: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
  
  content3: {
    backgroundColor: 'white',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
  content4: {
    backgroundColor: '#D10542',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
  title: {
    fontSize: 24,
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  title3: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  title4: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#DDD',
    textAlign: 'center',
    marginBottom: 20,
  },
  description3: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    marginBottom: 20,
  },
  description4: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#D10542',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  button2: {
    backgroundColor: '#D10542',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  button3: {
    backgroundColor: 'black',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  button4: {
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  button3: {
    backgroundColor: '#D10542',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonText3: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonText4: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  // Linha preta
  linha: {
    height: 1,
    backgroundColor: 'black',
    marginVertical: 0.1,
    width: '80%',
    alignSelf: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
});
