import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, SafeAreaView, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";

import tw from 'twrnc';

const LoginScreen = () => {
   const  navigation = useNavigation()

    return (
        <View style={tw`flex-1 bg-black`} >
        <StatusBar barStyle='light-content' />
         <SafeAreaView style={tw`flex`}>
         <View style={tw`flex-row justify-start`}>
         <TouchableOpacity
         onPress={() => navigation.goBack() }
            style={tw`bg-yellow-500 p-2 rounded-tr-2xl rounded-bl-2xl ml-4 mt-4`}>
         <Text style={tw`text-white`}>Black</Text>
         </TouchableOpacity>
         </View>
         <View style={tw`flex-row  justify-center`}>
         <Image source={require('../assets/resturant6.jpeg')} style={tw`h-100 w-100 mt-2 rounded-full`}/>
         </View>
         <View style={tw`bg-black px-8 pt-8 rounded-bl-2xl rounded-br-2xl`}>
         <View style={tw`form space-y-2`}>
         <Text style={tw`text-white ml-4`}>Full Name</Text>
         <TextInput  style={tw`p-4 text-white rounded-2xl mb-3 border-green-100 border mt-2`} placeholder="Enter Name"/>
         <Text style={tw`text-white ml-4`}>Password</Text>
         <TextInput  style={tw`p-4 text-white rounded-2xl mb-3 border-green-100 border mt-2`} placeholder="Enter Password" secureTextEntry/>
         <TouchableOpacity
         style={tw`py-3 bg-yellow-500 rounded-xl`}>
         <Text style={tw`text-center font-bold text-white text-lg`}>Log in</Text>
         </TouchableOpacity>
         <View style={tw`justify-center flex-row mt-3` }>
         <Text style={tw`text-white font-semibold `}>Already have an account?</Text>
         <TouchableOpacity
         onPress={() => navigation.navigate('login')} >
             <Text style={tw`font-semibold text-yellow-400`}> Sign In</Text>
         </TouchableOpacity>
         </View>
         </View>
         </View>
         </SafeAreaView>
        </View>
    )
}

export default LoginScreen