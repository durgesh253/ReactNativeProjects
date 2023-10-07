import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Text, View } from "react-native";
import QuizApp from "../Screens/QuizApp";

const Stack = createNativeStackNavigator()
const AppNavigations = () => {
   return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="quiz"  component={QuizApp}  />
    </Stack.Navigator>
    </NavigationContainer>
   
   )
}
export default AppNavigations