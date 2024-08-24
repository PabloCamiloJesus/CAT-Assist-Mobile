import React from 'react'
import { StyleSheet, View, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";

const Navbar = ({ user, cs }) => {
    const navigation = useNavigation();
  
    if (user) {
      return (
        <View style={styles.navbar}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Profile");
            }}
          >
            {/* <Image
              source={require("./screens/_assets/images/icons/samplePfp.webp")}
              style={styles.pfpImg}
            ></Image> */}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("AddKanban");
            }}
          >
            {/* <Image
              source={require("./screens/_assets/images/icons/addkanban.png")}
              style={styles.pfpImgCenter}
            ></Image> */}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Main");
            }}
          >
            {/* <Image
              source={require("./screens/_assets/images/icons/kanbanlist.png")}
              style={styles.pfpImg}
            ></Image> */}
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View style={styles.navbar}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Profile");
            }}
          >
            {/* <Image
              source={require("./screens/_assets/images/icons/npPfp_noUser.jpg")}
              style={styles.pfpImg}
            ></Image> */}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("AddKanban");
            }}
          >
            {/* <Image
              source={require("./screens/_assets/images/icons/addkanban.png")}
              style={styles.pfpImgCenter}
            ></Image> */}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Main");
            }}
          >
            {/* <Image
              source={require("./screens/_assets/images/icons/kanbanlist.png")}
              style={styles.pfpImg}
            ></Image> */}
          </TouchableOpacity>
        </View>
      );
    }
  };

export default Navbar

const styles = StyleSheet.create({
    
  pfpImg: {
    borderRadius: 1000,
    height: 40,
    width: 40,
  },
  pfpImgCenter: {
    borderRadius: 1000,
    height: 50,
    width: 50,
  },

  quicksandLight: {
    fontFamily: 'Quicksand-Light',
    fontSize: 20,
  },
  quicksandRegular: {
    fontFamily: 'Quicksand-Regular',
    fontSize: 20,
  },
  ralewayItalic: {
    fontFamily: 'Raleway-Italic',
    fontSize: 20,
  },
  ralewayThin: {
    fontFamily: 'Raleway-ThinItalic',
    fontSize: 20,
  },

  navbar: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    bottom: 0,
    width: "100%",
    height: 60,
    justifyContent: "space-around",
    backgroundColor: "#2E2F30",
    alignItems: "center",

  }

})