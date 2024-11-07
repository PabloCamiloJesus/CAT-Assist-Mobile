import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, ImageBackground } from 'react-native';
import MapView, { Marker } from 'react-native-maps'; // Importando o MapView

const SobreNos = () => {
  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={{ uri: 'https://i.ibb.co/qk8Xv3T/sesicat2mobile.jpg' }}
        style={styles.Fundoimg}>
        <Text style={styles.bannerTitulo}>Sobre Nós</Text>
        <Text style={styles.bannerDescricao}> Bem-vindo à nossa plataforma! Somos uma equipe apaixonada por tecnologia, inovação e atendimento eficiente. Nosso objetivo é transformar a maneira como você interage com serviços digitais, proporcionando uma experiência otimizada e intuitiva. Com um foco voltado para soluções de comunicação modernas e integradas, trabalhamos constantemente para garantir que você tenha acesso fácil e rápido às informações que precisa.</Text>
        {/* Adicionando uma camada para escurecer a imagem */}
        {/* Missão, Visão, Valores */}
        <View style={styles.section}>
          <View style={styles.cardContainer}>
            <View style={styles.box}>
              <Image
                source={{ uri: 'https://i.ibb.co/sCgfbjs/missao.png' }}
                style={styles.icon}
              />
              <Text style={styles.BoxTitulo}>Missão</Text>
              <Text style={styles.BoxTexto}>
                Desenvolver soluções web inovadoras e personalizadas, otimizando experiências e resultados através de tecnologias de ponta.

              </Text>
            </View>
            <View style={styles.box}>
              <Image
                source={{ uri: 'https://i.ibb.co/xhpfFyh/visao.png' }}
                style={styles.icon}
              />
              <Text style={styles.BoxTitulo}>Visão</Text>
              <Text style={styles.BoxTexto}>
                Ser referência global em desenvolvimento de websites, destacando-se pela inovação e impacto positivo nos negócios dos nossos clientes.
              </Text>
            </View>
            <View style={styles.box}>
              <Image
                source={{ uri: 'https://i.ibb.co/8zdJhdV/valores.png' }}
                style={styles.icon}
              />
              <Text style={styles.BoxTitulo}>Valores</Text>
              <Text style={styles.BoxTexto}>
                inovação, Excelência, Colaboração, Ética e Transparência, Sustentabilidade.
              </Text>
            </View>

          </View>
        </View>
      </ImageBackground>

      {/* ONDE ESTAMOS */}
      <View style={styles.locationSection}>
        <Text style={styles.locationTitle}>Onde Estamos</Text>
        <View style={styles.locationContainer}>
          <Text style={styles.addressTitle}>Endereço</Text>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: -23.637185904584744, // CORDENADAS DO SESI 166
              longitude: -46.53619916855369,
              latitudeDelta: 0.01, 
              longitudeDelta: 0.01,
            }}
          >
            <Marker
              coordinate={{
                latitude:-23.637185904584744,
                longitude:-46.53619916855369,
              }}
              title="SESI Santo André"
              description="Praça Dr. Armando Arruda Pereira, 100"
            />
          </MapView>
          <Text style={styles.addressText}>
            Praça Dr. Armando Arruda Pereira, 100 - Santa Terezinha, Santo André - SP, 09210-550
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  /* Hero Section */
  bannerSection: {
    flex: 1, // Faz a imagem ocupar toda a tela
    resizeMode: 'cover', // Ajusta a imagem para cobrir toda a área
    justifyContent: 'center', // Centraliza verticalmente
  },
  bannerContent: {
    position: 'absolute',
    top: '100%',
    alignItems: 'center',
  },
  bannerTitulo: {
    padding: 20,
    fontSize: 36,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  bannerDescricao: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  /* Missão, Visão, Valores */
  section: {
    padding: 50,
  },
  sectionTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    
  },

  // CARDS DE MISSÃO VISÃO E VALOR
  box: {
    height: 270,
    width: 270,
    backgroundColor: 'black',

    marginBottom: 20,
    borderRadius: 10,
    alignItems: 'center',
    padding: 10,

  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  BoxTitulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: 'white',
  },
  BoxTexto: {
    padding: 10,
    fontSize: 14,
    textAlign: 'center',
    color: 'white',
    
  },
  /* Onde Estamos */
  locationSection: {
    backgroundColor: '#f7f7f7',
    padding: 20,

  },
  locationTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  locationContainer: {
    alignItems: 'center',
    padding: 20,
  },
  addressTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  addressText: {
    fontSize: 16,
    textAlign: 'center',
  },
  map: {
    width: '100%',
    height: 300, // Define a altura do mapa
    marginTop: 20,
  },
});

export default SobreNos;
