import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import MainScreen from '../screens/MainScreen'
import AddNewThred from '../screens/AddNewThred'


const Stack = createNativeStackNavigator()
const AppNavigation = () => {
  return (
  <NavigationContainer>
  <Stack.Navigator initialRouteName='main' >
  <Stack.Screen name='main' component={MainScreen} options={{headerShown : false}} />
  <Stack.Screen  name='thred' component={AddNewThred} options={{headerShown : false}}/>
  </Stack.Navigator>
  </NavigationContainer>
  )
}

export default AppNavigation