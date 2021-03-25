import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import TransactionScreen from "./screens/transaction";
import SearchScreen from "./screens/search";
import InstagramScreen from "./screens/inscreen";
import FacebookScreen from "./screens/fbscreen";
export default function App() {
  return <AppContainer />;
}
const TabNavigator = createBottomTabNavigator(
  {
    Instagram: { screen: InstagramScreen },
    Facebook: { screen: FacebookScreen },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        const routeName = navigation.state.routeName;
        console.log(routeName);
        if (routeName === "Instagram") {
        } else if (routeName === "FaceBook") {
          return (
            <Image
              source={require("./assets/searchingbook.png")}
              style={{ width: 40, height: 40 }}
            />
          );
        }
      },
    }),
  }
);
const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
