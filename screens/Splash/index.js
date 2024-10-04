import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';


const Splash = () => {
  var navigation = useNavigation();

  setTimeout(() => {
    // trocar quando tela main/sistema de login for criada (o)
    navigation.navigate("PageList")
  }, 3000);

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/logo-sesi.png')} style={styles.sesiLogo} />
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },

  sesiLogo: {
    height: 100,
    width: 300,

  }
})