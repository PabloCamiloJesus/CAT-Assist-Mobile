import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";


const Recepcao = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.principalText}>
        Programa do dia? Que tal um exercício
      </Text>
      <TouchableOpacity style={styles.principalButton}>
        <Text style={styles.textButton}>Comece agora</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Recepcao;

const styles = StyleSheet.create({
  customFontText: {
    fontSize: 20,
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
    gap: 40,
  },

  principalText: {
    fontFamily: "Raleway",
    fontSize: 36,
    color: "#000",
    borderRadius: 15,
    textAlign: "center",
  },

  principalButton: {
    padding: 15,
    backgroundColor: "#BF0B3B",
    borderRadius: 20,
  },

  textButton: {
    color: "#fff",
    fontSize: 24,
  },
});
