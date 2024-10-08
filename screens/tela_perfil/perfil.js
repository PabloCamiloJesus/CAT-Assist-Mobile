import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header with Profile Picture */}
      <View style={styles.header}>
        {/* Profile Image larger and overlapping */}
        <Image
          source={{ uri: 'https://via.placeholder.com/150/CCCCCC/808080?Text=No+Image' }}
          style={styles.profileImage}
        />
      </View>
      
      {/* Profile Details */}
      <View style={styles.profileDetails}>
        <Text style={styles.name}>DANIEL ROSA SILVA</Text>
        <Text style={styles.age}>9 anos</Text>
        
        <View style={styles.divider} />

        <Text style={styles.label}>E-MAIL</Text>
        <Text style={styles.email}>exemplo@gmail.com</Text>

        <View style={styles.divider} />

        <Text style={styles.label}>DATA NASCIMENTO</Text>
        <Text style={styles.birthDate}>05/06/2015</Text>

        <View style={styles.divider} />

        {/* Card Expiry and Logout Button */}
        <View style={styles.footer}>
          <View>
            <Text style={styles.cardLabel}>Vencimento da carteirinha:</Text>
            <Text style={styles.cardExpiry}>12/09/2026</Text>
          </View>
          <TouchableOpacity style={styles.logoutButton}>
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
    height: 120,  // Reduced height to make space for image to overlap
    backgroundColor: '#D10542',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 10, // Adds spacing to adjust image overlap
  },
  profileImage: {
    width: 160,  // Increased size to make the image larger
    height: 160,
    borderRadius: 80,  // Circular image
    borderWidth: 4,  // White border for better appearance
    borderColor: '#fff',
    backgroundColor: '#CCCCCC',
    position: 'absolute',  // Overlap effect
    top: 50,  // Adjust the position to overlap header and details area
  },
  profileDetails: {
    padding: 20,
    alignItems: 'center',
    marginTop: 80,  // Added margin to adjust the content below the image
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
    flexDirection: 'row',
    justifyContent: 'space-between',
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
