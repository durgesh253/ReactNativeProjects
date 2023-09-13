import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./components/HomeScreen";
import WelcomScreen from "./components/WelcomeScreen";
import LoginScreen from "./components/LoginScreen";
import SignupScreen from "./components/SignupScreen";
import UseAuth from "./config/UseAuth";


const Stack = createNativeStackNavigator()
const App = () => {
  const user = UseAuth()
if(user !== null){
  return (
    <NavigationContainer>
     <Stack.Navigator initialRouteName="home" >
     <Stack.Screen  name="home" options={{headerShown : false}} component={HomeScreen}/>
     </Stack.Navigator>
    </NavigationContainer>
  )

}else{
  return (
    <NavigationContainer>
     <Stack.Navigator initialRouteName="welcome" >

     <Stack.Screen name="welcome" options={{headerShown : false}} component={WelcomScreen} />
     <Stack.Screen name="login" options={{headerShown:false}} component={LoginScreen} />
     <Stack.Screen name="signup" options={{headerShown : false}} component={SignupScreen} />
     </Stack.Navigator>
    </NavigationContainer>
  )

}
  
};

const styles = StyleSheet.create({

});

export default App;
