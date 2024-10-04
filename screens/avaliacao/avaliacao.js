import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Avalicao_tela = () => {
  const [rating, setRating] = useState(0);
  const [suggestion, setSuggestion] = useState('');

  // Função para definir a avaliação quando o usuário clica em uma estrela
  const handleRating = (value) => {
    setRating(value);
  };

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
      
      <TouchableOpacity style={styles.button}>
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
