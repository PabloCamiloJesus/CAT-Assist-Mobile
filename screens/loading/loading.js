import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';


const Loading = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/logo-sesi.png')} style={styles.sesiLogo} />
    </View>
  )
}

export default Loading

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

  },

  loading: {
    borderWidth: 10,
    borderRadius: 500,
    borderColor: "#fff",
    borderLeftColor: "#f00",
    width: 100,
    height: 100
  }
})