import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { signOut, onAuthStateChanged } from "firebase/auth";

import Loading from '../loading/loading';

import { db, auth } from "../../components/services/firebase";

const ProfileScreen = () => {
  const navigation = useNavigation();

  const [user, setUser] = useState(null);

  const [pfpImg, setpfpImg] = useState("../assets/navbar/profile.png");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userData) => {

      if (userData) {
        setUser(auth.currentUser); 
        setLoading(false);
      } else {
        setUser(null);
        setLoading(true);
        navigation.navigate("Login")
      }

    });

    return unsubscribe;
  }, [user, auth])

  if (loading) return <Loading />;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: user ? user.photoURL : "asset:../assets/navbar/profile.png" }}
          style={styles.profileImage}
         />
      </View>

      {/* Profile Details */}
      <View style={styles.profileDetails}>
        <Text style={styles.name}>{user ? user.displayName : "DEFAULT"}</Text>

        <View style={styles.divider} />

        <Text style={styles.label}>E-MAIL</Text>
        <Text style={styles.email}>{user ? user.email : "DEFAULT"}</Text>

        <View style={styles.divider} />

        <View style={styles.footer}>

          <TouchableOpacity onPress={() => {
            signOut(auth)
              .then(() => {
                setUser(null); 
                setLoading(true);
                navigation.navigate("Login");
              })
              .catch((error) => {
                console.error("Erro ao sair: ", error);
              });
          }} style={styles.logoutButton}>
            <Text style={styles.logoutText}>LOGOUT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 120,
    backgroundColor: '#D10542',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 10,
  },
  profileImage: {
    width: 160,
    height: 160,
    borderRadius: 80,
    borderWidth: 4,
    borderColor: '#fff',
    backgroundColor: '#CCCCCC',
    position: 'absolute',
    top: 50,
  },
  profileDetails: {
    padding: 20,
    alignItems: 'center',
    marginTop: 80,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  age: {
    fontSize: 18,
    color: '#555',
  },
  divider: {
    width: '80%',
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    color: '#555',
    marginTop: 10,
  },
  email: {
    fontSize: 18,
    marginVertical: 5,
  },
  birthDate: {
    fontSize: 18,
    marginVertical: 5,
  },
  footer: {
    width: '100%',
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  cardLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardExpiry: {
    fontSize: 16,
    marginTop: 5,
  },
  logoutButton: {
    backgroundColor: '#D10542',
    padding: 15,
    borderRadius: 10,
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ProfileScreen;
