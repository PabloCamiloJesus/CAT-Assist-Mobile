

import React, { useState } from "react";
import { AppRegistry, StyleSheet, View, TouchableOpacity, Text } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Splash from "./screens/Splash";
import PageList from "./screens/_Dev_screens/pagelist";
import Recepcao from "./screens/Recepcao";
import SobreNos from './screens/sobrenos/sobrenos';
import Cadastro from './screens/Crie_conta/crieconta';
import RecuperarSenha from "./screens/recuperacao/recuperar";
import Avalicao_tela from "./screens/avaliacao/avaliacao";
import Login from "./screens/login";
import ProfileScreen from "./screens/tela_perfil/perfil";
import HomeScreen from "./screens/Home/home";
import ChatbotScreen from "./screens/Chatbot/ChatbotScreen";
import ChatScreen from "./screens/Chat/ChatScreen";
import Redefinicao from "./screens/Redefinir_senha/redefinicaao"
import FAQScreen from './screens/FAQ/FAQScreen';
import Navbar from "./components/navbar";
import Loading from "./screens/loading/loading";

AppRegistry.registerComponent("main", () => App);

const Stack = createStackNavigator();

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("Splash");

  const handleNavigationChange = (routeName) => {
    setCurrentScreen(routeName);
  };

  const linkingConfig = {
    prefixes: ['com.toranjeworks.catassist://'],
    // prefixes: ['exp://localhost:8081/--/catassist'],
    config: {
      screens: {
        // PageList: {
        //   path: 'page-list'
        // },
        Splash: {
          path: 'splash'
        },
        Loading: {
          path: 'loading'
        },
        Recepcao: {
          path: 'reception'
        },
        Sobrenos: {
          path: 'about-us'
        },
        Cadastro: {
          path: 'register'
        },
        Login: {
          path: 'login'
        },
        RecuperarSenha: {
          path: 'recover-password'
        },
        Redefinicao: {
          path: 'reset-password'
        },
        Avalicao_tela: {
          path: 'evaluation'
        },
        ProfileScreen: {
          path: 'profile'
        },
        HomeScreen: {
          path: 'home'
        },
        ChatScreen: {
          path: 'chat'
        },
        ChatbotScreen: {
          path: 'chatbot'
        },
        FAQScreen: {
          path: 'faq'
        },
      },
    },
  };

  return (
    <NavigationContainer linking={linkingConfig}>
      <Stack.Navigator
        // DEVELOPER-- switch to Splash after all the software is completed
        // initialRouteName="PageList"
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* DEVELOPER SCREENS */}
        {/* <Stack.Screen
          name="PageList"
          component={PageList}
          options={{
            headerShown: false,
          }}
          listeners={({ navigation }) => ({
            focus: () => handleNavigationChange("PageList"),
          })}
        /> */}
        {/* END OF DEVELOPER SCREENS */}
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
        <Stack.Screen
          name="Loading"
          component={Loading}
          options={{
            headerShown: false,
          }}
          listeners={({ navigation }) => ({
            focus: () => handleNavigationChange("Loading"),
          })}
        />
        <Stack.Screen
          name="Recepcao"
          component={Recepcao}
          options={{
            headerShown: false,
          }}
          listeners={({ navigation }) => ({
            focus: () => handleNavigationChange("Recepcao"),
          })}
        />
        <Stack.Screen
          name="Sobrenos"
          component={SobreNos}
          options={{
            headerShown: false,
          }}
          listeners={({ navigation }) => ({
            focus: () => handleNavigationChange("Sobrenos"),
          })}
        />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{
            headerShown: false,
          }}
          listeners={({ navigation }) => ({
            focus: () => handleNavigationChange("Cadastro"),
          })}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
          listeners={({ navigation }) => ({
            focus: () => handleNavigationChange("Login"),
          })}
        />
        <Stack.Screen
          name="RecuperarSenha"
          component={RecuperarSenha}
          options={{
            headerShown: false,
          }}
          listeners={({ navigation }) => ({
            focus: () => handleNavigationChange("RecuperarSenha"),
          })}

        />
        <Stack.Screen
          name="Redefinicao"
          component={Redefinicao}
          options={{
            headerShown: false,
          }}
          listeners={({ navigation }) => ({
            focus: () => handleNavigationChange("Redefinicao"),
          })}

        />
        <Stack.Screen
          name="Avalicao_tela"
          component={Avalicao_tela}
          options={{
            headerShown: false,
          }}
          listeners={({ navigation }) => ({
            focus: () => handleNavigationChange("Avalicao_tela"),
          })}

        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            headerShown: false,
          }}
          listeners={({ navigation }) => ({
            focus: () => handleNavigationChange("ProfileScreen"),
          })}

        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
          listeners={({ navigation }) => ({
            focus: () => handleNavigationChange("HomeScreen"),
          })}

        />
        <Stack.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={{
            headerShown: false,
          }}
          listeners={({ navigation }) => ({
            focus: () => handleNavigationChange("ChatScreen"),
          })}

        />
        <Stack.Screen
          name="ChatbotScreen"
          component={ChatbotScreen}
          options={{
            headerShown: false,
          }}
          listeners={({ navigation }) => ({
            focus: () => handleNavigationChange("ChatbotScreen"),
          })}

        />
        <Stack.Screen
          name="FAQScreen"
          component={FAQScreen}
          options={{
            headerShown: false,
          }}
          listeners={({ navigation }) => ({
            focus: () => handleNavigationChange("FAQScreen"),
          })}

        />
      </Stack.Navigator>

      {
        currentScreen != "Splash" &&
        currentScreen != "Cadastro" &&
        currentScreen != "ChatScreen" &&
        currentScreen != "ChatbotScreen" &&
        currentScreen != "Login" && (
          <Navbar cs={currentScreen} />
        )}
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
