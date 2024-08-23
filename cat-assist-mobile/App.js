import { StyleSheet, View } from "react-native";

// Tela de Splash
import Splash from "./components/splash";
// Tela de Recepção
import Recepcao from "./components/Recepcao";

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
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
          listeners={({ navigation }) => ({
            focus: () => handleNavigationChange("Splash"),
          })}
        />
      </Stack.Navigator>

      {currentScreen != "Splash" &&
        currentScreen != "Login" &&
        currentScreen != "_dev_addProfile" && (
          <Navbar user={user} cs={currentScreen} />
        )}
    </NavigationContainer>
  );
}

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
          <Image
            source={require("./screens/_assets/images/icons/samplePfp.webp")}
            style={styles.pfpImg}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("AddKanban");
          }}
        >
          <Image
            source={require("./screens/_assets/images/icons/addkanban.png")}
            style={styles.pfpImgCenter}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Main");
          }}
        >
          <Image
            source={require("./screens/_assets/images/icons/kanbanlist.png")}
            style={styles.pfpImg}
          ></Image>
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
          <Image
            source={require("./screens/_assets/images/icons/npPfp_noUser.jpg")}
            style={styles.pfpImg}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("AddKanban");
          }}
        >
          <Image
            source={require("./screens/_assets/images/icons/addkanban.png")}
            style={styles.pfpImgCenter}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Main");
          }}
        >
          <Image
            source={require("./screens/_assets/images/icons/kanbanlist.png")}
            style={styles.pfpImg}
          ></Image>
        </TouchableOpacity>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },

  // pfpImg: {
  //   borderRadius: 1000,
  //   height: 40,
  //   width: 40,
  // },
  // pfpImgCenter: {
  //   borderRadius: 1000,
  //   height: 50,
  //   width: 50,
  // },

  // quicksandLight: {
  //   fontFamily: 'Quicksand-Light',
  //   fontSize: 20,
  // },
  // quicksandRegular: {
  //   fontFamily: 'Quicksand-Regular',
  //   fontSize: 20,
  // },
  // ralewayItalic: {
  //   fontFamily: 'Raleway-Italic',
  //   fontSize: 20,
  // },
  // ralewayThin: {
  //   fontFamily: 'Raleway-ThinItalic',
  //   fontSize: 20,
  // },

  // navbar: {
  //   position: "absolute",
  //   display: "flex",
  //   flexDirection: "row",
  //   bottom: 0,
  //   width: "100%",
  //   height: 60,
  //   justifyContent: "space-around",
  //   backgroundColor: "#2E2F30",
  //   alignItems: "center",

  // }
});
