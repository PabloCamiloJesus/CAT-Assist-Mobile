import React, { useRef, useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image, Dimensions, Animated } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default function App({ navigation }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const banners = [
    { id: 1, text: 'Atendimento Online Você pode falar com um membro da nossa secretaria através do atendimento online durante os seguintes horários: Terça a Sexta: das 8h às 20h Sábado: das 8h ao 12hrs Domingo e Segunda: Fechado', imageUrl: require('../../assets/images/celular_chat.png') },

    { id: 2, text: 'Os CATs do SESI-SP são centros de atividades amplos, acolhedores e seguros que oferecem atrações para todas as idades. Aqui você pode ter uma vida mais ativa, saudável e divertida!', imageUrl: require('../../assets/images/cat166.jpg') },

    { id: 3, text: 'A Luna é o chatbot do CAT no SESI Santo André. Ela foi desenvolvida para complementar e facilitar a interação dos usuários com o sistema do CAT, automatizando parte do atendimento. A Luna oferece suporte rápido e eficiente, ajudando tanto clientes quanto funcionários, e está disponível 24/7 para responder a dúvidas', imageUrl: require('../../assets/images/Luna.gif') },
  ];

  const handleScroll = (event) => {
    const scrollPosition = Math.floor(event.nativeEvent.contentOffset.x / screenWidth);
    setActiveSlide(scrollPosition);  
  };

  return (
    <ScrollView style={styles.container}>
      {/* Fundo com imagem principal */}
      <ImageBackground
       source={require("../../assets/images/camposesi.jpg")}
        style={styles.background}
      >
        <View style={styles.overlay} />
        <View style={styles.content}>
          <Text style={styles.title}>LUNA</Text>
          <Text style={styles.description}>
            Conheça Luna, Nossa Assistente Virtual, pronta para auxiliá-lo(a) na resolução de suas necessidades.
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("ChatbotScreen")} style={styles.button}>
            <Text style={styles.buttonText}>Assistente virtual</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
     
 {/* Seção "ATENDIMENTO ONLINE" */}
 <View style={styles.content3}>
        <Text style={styles.title3}>DÚVIDAS</Text>
        <Text style={styles.description3}>
        Se você tiver alguma dúvida, nossa seção de Perguntas Frequentes está aqui para ajudar! Navegue por tópicos comuns e encontre respostas rápidas para as suas questões. 
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("FAQScreen")} style={styles.button2}>
          <Text style={styles.buttonText3}>Perguntas Frequentes</Text>
        </TouchableOpacity>
      </View>
       {/* Carrossel de banners */}
       <View style={styles.carouselContainer}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
        >
          {banners.map((banner) => (
            <ImageBackground key={banner.id} source={banner.imageUrl} style={styles.banner}>
              <View style={styles.overlay} />
              <Text style={styles.bannerText}>{banner.text}</Text>
            </ImageBackground>
          ))}
        </ScrollView>
        <View style={styles.pagination}>
          {banners.map((_, index) => (
            <View key={index} style={[styles.dot, activeSlide === index && { backgroundColor: '#D10542' }]} />
          ))}
        </View>
      </View>
      {/* Seção "SOBRE NÓS" */}
      <View style={styles.content4}>
        <Text style={styles.title4}>SOBRE NÓS</Text>
        <Text style={styles.description4}>
          Um pouco sobre o que somos e o que pretendemos alcançar.
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Sobrenos")} style={styles.button4}>
          <Text style={styles.buttonText4}>Mais informações</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  carouselContainer: {
    height: 200,
    marginTop: 1,
  },
  banner: {
    width: screenWidth,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  bannerText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
    // backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 10,
    textAlign: 'center',
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
  },
  dot: {
    height: 8,
    width: 8,
    backgroundColor: '#FFF',
    borderRadius: 4,
    marginHorizontal: 4,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 550,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
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
  description: {
    fontSize: 16,
    color: '#DDD',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
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
  content3: {
    backgroundColor: 'white',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
  title3: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  description3: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    marginBottom: 20,
  },
  button2: {
    backgroundColor: 'black',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText3: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  content4: {
    backgroundColor: '#D10542',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
  title4: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  description4: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  button4: {
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText4: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  linha: {
    height: 1,
    backgroundColor: 'black',
    marginVertical: 0.1,
    width: '80%',
    alignSelf: 'center',
  },
});
