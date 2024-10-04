import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.redBox}>
        <View>
           
        </View>
      </View>

      <View>
        <View>
          <Image></Image>
          <Text></Text>
          <Text></Text>
        </View>

        <View></View>

        <View>
          <Image></Image>
          <Text></Text>
          <Text></Text>
        </View>

        <View></View>

        <View>
          <Image></Image>
          <Text></Text>
          <Text></Text>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  redBox:{
    // position:'relative',
    // top:0,
    height:'30%',
    width:'100%',
    flexGrow:2,
    marginBottom:300,
    marginTop:-100,
    borderRadius:50,
    backgroundColor:'#bf0b3b',
  }
});
