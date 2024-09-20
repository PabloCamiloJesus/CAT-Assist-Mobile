import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions, StyleSheet } from 'react-native';

import Home from "../assets/navbar/home.png"
import Chat from "../assets/navbar/chat.png"
import ChatBot from "../assets/navbar/chatbot_TEMP.png"
import FAQ from "../assets/navbar/FAQ.png"
import Profile from "../assets/navbar/profile.png"
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const Navbar = () => {
  const navigation = useNavigation();
  const [active, setActive] = useState(0);

  return (
    <View style={styles.navbar}>
      {screens.map((screen, index) => (
        <TouchableOpacity
          key={index}
          style={screen.styleFormat}
          onPress={() => navigation.navigate(screen.screen)}
        > 
           {/* color: active === index ? '#673ab7' : '#FFF' */} 
          <Image source={screen.image} alt="" />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    margin: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: "center",
    backgroundColor: 'black',
  },
  navItem: {
    margin: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  screen: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%', // Added to ensure full screen height
  },
  icon: {
    color: "#FFF",
  }, 
  mainIcon: {
    color: "#FFF",
    backgroundColor: "#BF0B3B",
    padding: 20,
    borderRadius: 50,
    marginTop: -35,
  }
});

const screens = [
  { name: 'Home', image: Home, screen: "Sobrenos", styleFormat: styles.icon },
  { name: 'Chat', image: Chat, screen: "chatScreen", styleFormat: styles.icon },
  { name: 'ChatBot', image: ChatBot, screen: "chatBotScreen", styleFormat: styles.mainIcon },
  { name: 'FAQ', image: FAQ, screen: "FAQScreen", styleFormat: styles.icon },
  { name: 'Profile', image: Profile, screen: "ProfileScreen", styleFormat: styles.icon },
];

export default Navbar;
