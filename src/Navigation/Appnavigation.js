import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Splash from '../screens/Splash'
import SignUp from '../screens/SignUp'
import Login from '../screens/Login'
import Chat from '../screens/Chat'


const Stack = createNativeStackNavigator()
const Appnavigation = () => {
  return (
  <NavigationContainer>
  <Stack.Navigator >
  
  <Stack.Screen name={'splash'} component={Splash} options={{headerShown : false}}/>
  <Stack.Screen  name={'signup'} component={SignUp} options={{headerShown :false}}/>
  <Stack.Screen  name={'login'} component={Login} options={{headerShown :false}}/>
  <Stack.Screen  name={'chat'} component={Chat} options={{headerShown : false}}/>
  
  </Stack.Navigator>
  </NavigationContainer>
  )
}

export default Appnavigation