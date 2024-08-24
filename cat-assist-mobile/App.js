import React, { useState } from "react";
import { AppRegistry, StyleSheet, View, TouchableOpacity, Text } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Tela de Splash
import Splash from "./screens/Splash";

import Navbar from "./components/navbar";

AppRegistry.registerComponent("main", () => App);

const Stack = createStackNavigator();

// faz a coiso de screens e components, app.js vai virar tela de generalizados por causa do react-navigation
export default function App() {
  const [currentScreen, setCurrentScreen] = useState("Splash");

  // const user = auth.currentUser;

  const handleNavigationChange = (routeName) => {
    setCurrentScreen(routeName);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        // DEVELOPER-- switch to Splash after all the software is completed
        // initialRouteName="PageList"
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{
            headerShown: false,
          }}
          listeners={({ navigation }) => ({
            focus: () => handleNavigationChange("Splash"),
          })}
        />
      </Stack.Navigator>

      {/* {currentScreen != "Splash" &&
        currentScreen != "Login" &&
        currentScreen != "_dev_addProfile" && ( */}
          <Navbar cs={currentScreen} />
        {/* )} */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },

});
