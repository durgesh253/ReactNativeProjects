import { useRoute, useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View ,TouchableOpacity ,StatusBar} from 'react-native'
import tw from 'twrnc';
import ResturantDishes from '../components/ResturantDishes';
import Cartbutton from '../components/Cartbutton';
const Resturantscreen = () =>  {
 const route = useRoute()
 const navigation = useNavigation()
const {itemId , itemName , itemImage , itemdes , dishesitem} = route.params
    return (
      <>
      <Cartbutton/>
      <StatusBar barStyle='light-content'/>
        <ScrollView 
        showsVerticalScrollIndicator={false}
        >
        <View style={tw`relative`}>
         <Image style={tw`w-full h-84`} source={itemImage} />
            <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={tw`absolute top-14 left-4 bg-gray-50 p-4 rounded-full`} >
               <Text>Back</Text>
            </TouchableOpacity>
            <View style={tw`mt-3`}>
              <Text style={tw`text-3xl pl-2 font-bold `}>{itemName}</Text>
              <View style={tw`flex-row  item-center space-x-1 my-1 `}>
              <Text style={tw`text-2xl font-bold bg-red-500 p-3  ml-2`}>{itemId}</Text>
              <Text style={tw`text-2xl font-bold bg-green-500 p-3 text-white  ml-2`}>{itemdes}</Text>
              </View>
            </View>
        </View>
        <View style={tw`pb-36 bg-white`}>
        <Text style={tw`px-4 py-4 text-2xl font-bold`}>Menu</Text>
        {/* dishes */}
        {
          dishesitem.map(dish=>{
                return (
                 <ResturantDishes
                   key={dish.id}
                   id={dish.id}
                   name={dish.name}
                   description={dish.description}
                   price={dish.price}
                   image={dish.image}
                    />
                )
            })
        }
       </View>

        </ScrollView>
        </>
    )

  }
  const styles = StyleSheet.create({

  })
export default Resturantscreen