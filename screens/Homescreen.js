import { useNavigation } from '@react-navigation/native';
import React, { Component } from 'react'
import { Image, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import tw from 'twrnc';

const Homescreen = () => {
    const navigation = useNavigation()
  
    return (
      <>
      <StatusBar barStyle={'dark-content'}/>
   
      <ScrollView
      showsVerticalScrollIndicator={false}>
      <View style={tw`relative p-10`}>
         <Image source={require('../assets/Woman.png')} style={tw`h-100 w-full `}/>
         <TouchableOpacity style={tw`absolute top-14 left-4 bg-green-900 p-3 rounded-2xl`}>
          <Text style={tw`text-white`}>Back</Text>
         </TouchableOpacity>
      </View>
      <View style={tw`bg-green-900  pt-4 h-120 rounded-tr-full`}>
      <View style={tw`p-5`}>
        <Text style={tw`text-3xl  mt-18 text-white font-bold `}>Add a flower</Text>
        <Text style={tw`text-3xl text-white font-bold`}>To favorites</Text>
        <Text style={tw`mt-5 text-xl text-gray-400`}>So that you do not lose</Text>
        <Text style={tw`text-xl text-gray-400`}>a new friend for home</Text>
        <View style={tw`mt-5`}>
        <TouchableOpacity style={tw`bg-white p-3 w-20 rounded-lg `} onPress={() => navigation.navigate('store')}>
        <Text>Sign Up</Text>
        </TouchableOpacity>
        </View>
      </View>
       
      </View>

      </ScrollView>
      </>
    )
}

export default Homescreen
