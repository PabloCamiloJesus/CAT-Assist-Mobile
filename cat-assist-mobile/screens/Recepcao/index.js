import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';


const Recepcao = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.principalText}>Programa do dia? Que tal um exercício</Text>
        <TouchableOpacity style={styles.principalText}>Comece agora</TouchableOpacity>
    </View>
  )
}

export default Recepcao

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        justifyContent:'center', 
        alignItems:'center',
        backgroundColor:'#000',
    },

    principalText:{
        fontFamily:'Arial',
        fontSize:24,
        backgroundColor:'#BF0B3B',
        color:'#fff',
        borderRadius:15
    }
})