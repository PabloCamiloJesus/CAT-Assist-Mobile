import React from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";

const ChatScreen = () => {
  return (
    <View style={styles.container}>
        <Text>Chat</Text>
    </View>
  )
}

export default ChatScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',

    }
})