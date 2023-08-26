import { StatusBar } from 'expo-status-bar';
import { Alert, Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import Card from './Card';
import BoxModal from './components/BoxModal';
import FilterList from './components/FilterList';
import Responsive from './components/Rsponsive';
import CounterNumber from './components/CounterNumber';
import ColourGenraor from './components/ColourGenratore';
import FetchData from './components/FetchData';
import Contact from './components/Contact';
// import FilterList from './components/FilterList';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    
    <NavigationContainer>
    <Stack.Navigator initialRouteName="login">
      <Stack.Screen name="login" component={Contact} />
      <Stack.Screen name="colour" component={ColourGenraor} />
      <Stack.Screen name="data" component={FetchData} />
    </Stack.Navigator>
  </NavigationContainer>
  
  
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    
    // alignItems: 'center',
    // justifyContent: 'center',
    // color:'#ffff',
    margin:60,
    // height:"100%"
    
  },
  // text: {
  //   color:'white',
  //   fontSize:30,
  // },
  // scrolls:{
  //  width:'100%',
     
  // }
});
