import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
  Animated,
  useWindowDimensions,
} from "react-native";

const slides = [
  { id: '1', title: 'Slide 1', description: 'Descrição do Slide 1', image: 'https://example.com/image1.jpg' },
  { id: '2', title: 'Slide 2', description: 'Descrição do Slide 2', image: 'https://example.com/image2.jpg' },
  { id: '3', title: 'Slide 3', description: 'Descrição do Slide 3', image: 'https://example.com/image3.jpg' },
];

const HomeScreen = () => {
  const { width } = useWindowDimensions();
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <View style={styles.container}>
      {/* Caixa Vermelha */}
      <View style={styles.redBox}>
        {/* Carrossel */}
      <View style={styles.carouselContainer}>
        <FlatList
          data={slides}
          renderItem={({ item }) => (
            <View style={[styles.slide, { width }]}>
              <Image source={{ uri: item.image }} style={[styles.image, { width }]} />
              <Text style={styles.title}>{item.title}</Text>
              <Text>{item.description}</Text>
            </View>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          keyExtractor={(item) => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          scrollEventThrottle={32}
          style={styles.boxCarousel}
        />

        {/* Indicadores de página */}
        <View style={styles.indicatorContainer}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentIndex === index ? styles.activeIndicator : styles.inactiveIndicator,
              ]}
            />
          ))}
        </View>
      </View>
      </View>


      {/* Conteúdo abaixo do carrossel */}
      <View>
        <View>
          <Image></Image>
          <Text></Text>
          <Text></Text>
        </View>

        <View></View>

        <View>
          <Image></Image>
          <Text></Text>
          <Text></Text>
        </View>

        <View></View>

        <View>
          <Image></Image>
          <Text></Text>
          <Text></Text>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  redBox: {
    height: '30%',
    width: '100%',
    flexGrow: 2,
    marginBottom: 300,
    marginTop: -100,
    borderRadius: 50,
    backgroundColor: '#bf0b3b',
  },

  // Estilos do carrossel
  carouselContainer: {
    marginTop: 10,
    
  },

  boxCarousel:{
    padding:20,
    borderRadius:20,
    borderWidth:10,
    borderColor:'#fff',
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    height: 200,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeIndicator: {
    backgroundColor: 'blue',
  },
  inactiveIndicator: {
    backgroundColor: 'gray',
  },
});
