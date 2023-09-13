import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';


const WelcomScreen = () => {
    const navigation = useNavigation()
    return (
       <SafeAreaView style={tw`flex-1 bg-black `}  >
       <StatusBar  barStyle={'light-content'}/>
       <View style={tw`flex-row justify-center `}>
       <Image source={require("../assets/resturant1.jpeg")} style={tw`rounded-full h-100 w-100`}/>
       </View>
       <View style={tw`flex flex-1 justify-center items-center`} >
         <Text style={tw`text-white text-center font-bold text-2xl`} >Lets Get started</Text>
       </View>
       <View style={tw``}>
       <TouchableOpacity
       onPress={() => navigation.navigate('signup')}
        style={tw`py-3 bg-yellow-400 mx-7 rounded-xl `}>
       <Text style={tw`text-white text-xl text-center `}>Sign up</Text>
       </TouchableOpacity>
       <View style={tw`justify-center flex-row`}>
       <Text style={tw`text-white font-semibold `}>Already have an account?</Text>
       <TouchableOpacity
       onPress={() => navigation.navigate('login')} >
           <Text style={tw`font-semibold text-yellow-400`}> Log In</Text>
       </TouchableOpacity>
       </View>
   </View>
    

       </SafeAreaView>
    )
}

export default WelcomScreen 
