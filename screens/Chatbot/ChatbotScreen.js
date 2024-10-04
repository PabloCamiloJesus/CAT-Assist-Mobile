import React from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";

const ChatbotScreen = () => {
  return (
    <View style={styles.container}>
        <Text>Chatbot</Text>
    </View>
  )
}

export default ChatbotScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',

    }
})