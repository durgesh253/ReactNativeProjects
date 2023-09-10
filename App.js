import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Homescreen from "./screens/Homescreen";
import Resturantscreen from "./screens/Resturantscreen";
import CartScreen from "./screens/CartScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="home" options={{ headerShown: false }} component={Homescreen} />
        <Stack.Screen name="store" options={{ headerShown: false }} component={Resturantscreen} />
        <Stack.Screen name="cart" options={{presentation: "modal", headerShown:"false"}}  component={CartScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  textstyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
