import React from 'react'

import { View, Text, useWindowDimensions, StyleSheet } from 'react-native';

export default OnboardingItem = ({ item }) => {
    const { width } = useWindowDimensions(); // Pega a largura da tela para ajustar o layout

    return (
        <View style={[styles.container, { width }]}>
            <Text>Screen1</Text>

            <View>
                <Text style={styles.title}>{item.title}</Text>
                <Text>{item.description}</Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    title: {
        fontWeight:'800',
        fontSize:28,
        marginBottom:10,
        color:'#493d8a',
        textAlign:'center',
    },
    title: {
        fontWeight:'300',
        fontSize:18,
        marginBottom:10,
        color:'#ff0000',
        textAlign:'center',
    },
})