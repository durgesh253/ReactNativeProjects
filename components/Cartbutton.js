import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import tw from 'twrnc';


const Cartbutton = () => {

    const navigation = useNavigation()
return(
    <View style={tw`absolute bottom-5 w-full z-50`}>
    <TouchableOpacity style={tw`flex-row justify-between mx-5 rounded-full p-4 bg-orange-400 shadow-lg py-3`}
     onPress={() => navigation.navigate('cart')}>
    <View style={tw`bg-white p-2 px-4 rounded-full`}>
    <Text style={tw`font-bold  text-lg`}>3</Text>
    </View>
    <Text style={tw` flex-1 text-center font-bold text-white mt-2 text-lg` }>View Cart</Text>
    <Text style={tw` text-center font-bold text-white mt-2 text-lg`}>${25}</Text>
    </TouchableOpacity>
   
    </View>
)
}
export default Cartbutton