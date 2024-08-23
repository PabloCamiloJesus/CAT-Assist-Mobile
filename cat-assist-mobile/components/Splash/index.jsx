import React from 'react';
import { StyleSheet, Image, View } from 'react-native';


const Splash = () => {
  return (
    <View style={styles.container}>
        <Image src={require('../../assets/images/logo-sesi.png')} style={styles.sesiLogo} />
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        justifyContent:'center', 
        alignItems:'center',
        backgroundColor:'#000',
    },

    sesiLogo:{
        height:100,
        width:300,
        
    }
})