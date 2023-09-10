import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import tw from 'twrnc';

const ResturantDishes = ({name, id,image,description,price}) => {
    return(
        <View style={tw`flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2`}>
        <Image style={{height:100, width:100}} source={image}  />
        <View style={[tw`flex flex-1 space-y-3`, styles.textstyle]} >
        <View style={tw`pl-3`}>
        <Text style={tw`text-xl`}>{name}</Text>
        <Text style={tw`text-gray-700`}>{description}</Text>
       
        
        </View>
        <View style={tw`flex-row items-center justify-between`}>
        <Text style={tw`text-gray-700 text-lg font-bold ml-3`}>${price}</Text>
        <View style={tw`flex-row item-center`}>
        <TouchableOpacity
         style={tw`p-1 rounded-full bg-orange-400`}>
          <Text style={tw`p-1`}>M</Text>
        </TouchableOpacity>
        <Text style={tw`px-3 mt-2`}>{2}</Text>
        <TouchableOpacity
        style={tw`p-1 rounded-full bg-orange-400`}>
         <Text style={tw`p-1`}>P</Text>
       </TouchableOpacity>
        </View>
        </View>
      
        </View>
        </View>
    )
}
const styles = StyleSheet.create({
   
})
export default ResturantDishes