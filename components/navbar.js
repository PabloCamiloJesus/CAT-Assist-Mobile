import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions, StyleSheet } from 'react-native';

import Home from "../assets/navbar/home.png"
import Chat from "../assets/navbar/chat.png"
import ChatBot from "../assets/navbar/chatbot_TEMP.png"
import FAQ from "../assets/navbar/FAQ.png"
import Profile from "../assets/navbar/profile.png"
import { useNavigation } from '@react-navigation/native';

import Loading from '../screens/loading/loading';

import { onAuthStateChanged } from "firebase/auth";

import { db, auth } from "./services/firebase";

const { width } = Dimensions.get('window');

import {
  collection,
  query,
  where,
  onSnapshot
} from "firebase/firestore";

const Navbar = () => {
  const navigation = useNavigation();

  const [loading, setLoading] = useState(true);

  const [user, setUser] = useState(null);

  const screens = [
    { name: 'Home', image: Home, screen: "HomeScreen", styleFormat: styles.icon, iconStyle: styles.none },
    { name: 'Chat', image: Chat, screen: "ChatScreen", styleFormat: styles.icon, iconStyle: styles.none },
    { name: 'ChatBot', image: ChatBot, screen: "ChatbotScreen", styleFormat: styles.mainIcon, iconStyle: styles.none },
    { name: 'FAQ', image: FAQ, screen: "FAQScreen", styleFormat: styles.icon, iconStyle: styles.none },
    { name: 'Profile', image: user ? { uri: user.photoURL } : require('../assets/navbar/profile.png'), screen: "ProfileScreen", styleFormat: styles.icon, iconStyle: user ? styles.pfp : styles.none },
  ];

  useEffect(() => {
    onAuthStateChanged(auth, (userData) => {

      if (userData) {
        setUser(userData);
      }

      // console.log(user)
      setLoading(false)

    });

  }, [])

  if (loading) return <Text>Carregando</Text>;

  return (
    <View style={styles.navbar}>
      {screens.map((screen, index) => (
        <TouchableOpacity
          key={index}
          style={screen.styleFormat}
          onPress={() => navigation.navigate(screen.screen)}
        >
          {/* color: active === index ? '#673ab7' : '#FFF' */}
          <Image source={screen.image} style={screen.iconStyle} alt="" />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  none: {

  },
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
  pfp: {
    padding: 15,
    borderRadius: 80
  },
  mainIcon: {
    color: "#FFF",
    backgroundColor: "#BF0B3B",
    padding: 20,
    borderRadius: 50,
    marginTop: -35,
  }
});

export default Navbar;
