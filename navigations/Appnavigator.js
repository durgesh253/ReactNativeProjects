import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Adduser from '../screens/Adduser'
import User from '../screens/User'
import Updateuser from '../screens/Updateuser'


const Stack = createNativeStackNavigator()
const Appnavigator = () =>  {
 
    return (
        <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen  name='user' component={User} options={{}}/>
        <Stack.Screen name='adduser' component={Adduser} />
        <Stack.Screen name='update' component={Updateuser} />
        </Stack.Navigator>
        </NavigationContainer>
     
    )
}

export default Appnavigator
