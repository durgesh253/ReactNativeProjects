import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Homescreen from "../screens/Homescreen";
import Storescreen from "../screens/Storescreen";
import Productscreen from "../screens/Productsscreen";
import CartScreen from "../screens/CartScreen";
import PersonScreen from "../screens/PersonScreen";
import LoveScreen from "../screens/LoveScreen";

const Stack = createNativeStackNavigator()
const Appnavigation = () => {
    return(
        <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="home" options={{headerShown : false}} component={Homescreen}/>
        <Stack.Screen name="store" options={{headerShown : false}}  component={Storescreen}/>
        <Stack.Screen name="products"   component={Productscreen}/>
        <Stack.Screen name="cart" options={{headerShown : false}}  component={CartScreen}/>
        <Stack.Screen name="love" options={{headerShown : false}}  component={LoveScreen}/>
        <Stack.Screen name="person" options={{headerShown : false}}  component={PersonScreen}/>

    
        </Stack.Navigator>
        </NavigationContainer>
        
    )

}
export default Appnavigation