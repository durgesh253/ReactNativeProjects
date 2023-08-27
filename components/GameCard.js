import { LinearGradient } from 'expo-linear-gradient';
import React, {  } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import tw from 'twrnc';
const GameCard = ({game}) => {
    return (
      <View style={tw`mr-4 mt-2 relative`}>
        <Image source={game.image} style={tw`w-80 h-60 rounded-3xl`}/>
        <LinearGradient colors={['transparent' ,'rgba(0,0,0,0.6)']} 
        style={tw`absolute p-4 h-full w-full flex justify-between  rounded-3xl`}>
        <View style={tw``}>
           <Text style={tw` font-bold text-gray-300`}>Rating : {game.stars}</Text>
          <Text style={tw`text-xl font-bold text-gray-300`}>{game.title}</Text>
           <Text style={[tw` font-bold text-green-400`]}>{game.downloads} downloads</Text>
        </View>
        </LinearGradient>
        
     
      </View>
    )
  }

const styles = StyleSheet.create({

})

export default GameCard;
