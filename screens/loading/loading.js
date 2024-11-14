import React from 'react'
import { Text, StyleSheet } from 'react-native';

const Loading = () => {
  return (
    <Text style={styles.loading}>
      Carregando...
    </Text>

    
  )
  
  
}

export default Loading

const styles = StyleSheet.create({

  loading: {
    textAlign: "center",
    paddingTop: 50,
  }

})