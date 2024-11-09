import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

import { auth, db } from "../../components/services/firebase";
import { onAuthStateChanged } from "firebase/auth";

import Loading from '../loading/loading';

import { collection, addDoc } from "firebase/firestore";

import { useNavigation } from '@react-navigation/native';

const Avalicao_tela = () => {
  const [rating, setRating] = useState(0);
  const [suggestion, setSuggestion] = useState('');
  const [submitted, setSubmitted] = useState(false); // Para saber se foi enviado
  
  const [user, setUser] = useState(null); // informações de usuário
  
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userData) => {

      if (userData) {
        setUser(auth.currentUser); 
        setLoading(false);
      } else {
        setUser(null);
        setLoading(true);
        navigation.navigate("HomeScreen")
      }

    });

    return unsubscribe;
  }, [user, auth])

  // Função para definir a avaliação quando o usuário clica em uma estrela
  const handleRating = (value) => {
    setRating(value);
  };

  const handleSubmit = async ({navigation}) => {
    if (rating === 0) {
      console.log("Por favor, selecione uma avaliação de 1 a 5.");
      return;
    }

    try {
      // Envia os dados para o Firestore
      await addDoc(collection(db, "rate"), {
        rating, // Valor da avaliação
        suggestion, // Sugestão do usuário
        timestamp: new Date(),
        name: user.displayName,
        email: user.email,
      });

      setSubmitted(true);

      console.log("Avaliação enviada com sucesso!");

      navigation.navigate("HomeScreen")
    } catch (error) {
      console.log("Erro ao enviar a avaliação." + error);
    }
  };

  if (loading) return <Loading />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Numa escala de 1 a 5, o quanto você apreciou o nosso serviço?</Text>
      
      <View style={styles.starsContainer}>
        {[1, 2, 3, 4, 5].map((star) => (
          <TouchableOpacity key={star} onPress={() => handleRating(star)}>
            <FontAwesome
              name={star <= rating ? 'star' : 'star-o'}
              size={40}
              color={star <= rating ? '#FFD700' : '#D3D3D3'}
            />
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.subtitle}>Alguma sugestão para melhorarmos nosso serviço?</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Escreva sua sugestão aqui"
        value={suggestion}
        onChangeText={(text) => setSuggestion(text)}
        multiline
      />
      
      <TouchableOpacity onPress={() => handleSubmit({navigation})} style={styles.button}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  starsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  input: {
    height: 100,
    width: '100%',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#f9f9f9',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#eee',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Avalicao_tela;
