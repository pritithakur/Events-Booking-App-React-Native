import { StatusBar, StyleSheet, Text, View } from "react-native";
// import Login from './App/Screens/LoginScreen/Login';
// import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./App/Navigation/TabNavigation";
import { useFonts } from "expo-font";
import Colors from "./App/Utils/Colors";
// import HomeNavigation from './App/Navigation/HomeNavigation';

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    PlayfairDisplay: require("../DoneWithIt/assets/fonts/PlayfairDisplay-Black.ttf"),
    "PlayfairDisplay-bold": require("../DoneWithIt/assets/fonts/PlayfairDisplay-Bold.ttf"),
    "RobotaSlab-Black": require("../DoneWithIt/assets/fonts/RobotoSlab-Black.ttf"),
    "PlayfairDisplay-medium": require("../DoneWithIt/assets/fonts/PlayfairDisplay-Medium.ttf"),
    "RobotaSlab-Bold": require("../DoneWithIt/assets/fonts/RobotoSlab-Bold.ttf"),
    "RobotaSlab-Light": require("../DoneWithIt/assets/fonts/RobotoSlab-Light.ttf"),
    "Mukta-Bold": require("../DoneWithIt/assets/fonts/Mukta-Bold.ttf"),
  });
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end", // Positions children at the bottom
  },
});
