import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Homescreen from './components/Homescreen';
import Storescreen from './components/Storescreen';
const Stack = createNativeStackNavigator();
const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Store' >
        <Stack.Screen name='Home' options={{ headerShown: false }} component={Homescreen} />
        <Stack.Screen name='Store' options={{headerShown: false}} component={Storescreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
