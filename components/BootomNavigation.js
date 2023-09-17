import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import tw from 'twrnc';



const BootomNavigation = () => {

  const navigation = useNavigation()
    return (
    
            <View style={tw`absolute bottom-5 w-full  z-50 shadow`}>
            <View style={tw`flex-row justify-between rounded-3xl p-4 bg-green-800 shadow-lg py-3`}
             >
            <TouchableOpacity style={tw`bg-white p-3 px-4 justify-center items-center rounded-full`} 
               onPress={() =>  navigation.navigate('products')}>
              <Image source={require('../assets/Home.jpg')} />
            </TouchableOpacity>
            <TouchableOpacity style={tw`bg-white p-3 px-4 justify-center items-center rounded-full`}
            onPress={() =>  navigation.navigate('cart')}>
            <Image source={require('../assets/Cart.jpg')} />
          </TouchableOpacity>
          <TouchableOpacity style={tw`bg-white p-3 px-4 justify-center items-center rounded-full`}
          onPress={() =>  navigation.navigate('love')}>
          <Image source={require('../assets/Like.jpg')} />
        </TouchableOpacity>
        <TouchableOpacity style={tw`bg-white p-3 px-4 justify-center items-center rounded-full`}
        onPress={() =>  navigation.navigate('person')}>
        <Image source={require('../assets/User.jpg')}/>
      </TouchableOpacity>
            </View>
           
            </View>
    )

}
export default BootomNavigation