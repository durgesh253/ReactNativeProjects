import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, useColorScheme } from "react-native";
import IntroScreen from "./Screens/IntroScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NoteScreen from "./Screens/NoteScreen";

const App = () => {
  const [user, setUser] = useState(""); // Initialize with null

  const findUser = async () => {
    try {
      const result = await AsyncStorage.getItem('user');
      if (result !== null) {
        setUser(JSON.parse(result));
      }
    } catch (error) {
      console.error('Error loading user from AsyncStorage:', error);
    }
  }

  useEffect(() => {
    findUser();
    // AsyncStorage.clear();
  }, []);

  if (!user.name) return <IntroScreen onFinish={findUser} />;
  return <NoteScreen user={user} />;
};

const styles = StyleSheet.create({
  // Your styles here
});

export default App;
