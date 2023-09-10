import React, { Component, useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import tw from 'twrnc';
import {categories} from '../screens/Api'

const Categories =() => { 
   
  const [categoryList, setCategoryList] = useState(categories);


    // const fetchCategories = async() => {
    //     try {
    //         const response = await  fetch(categories)
    //         const data =  await response.json()
    //         console.log(data)
    //         setCategoryList(data)
    //     } catch (error) {
    //           console.log(error)
    //     }
    // }

    // useEffect(() => {
    //       fetchCategories()
    // },[])
 
    return (
      <View style={tw`mt-3`}>
        <ScrollView  
         horizontal
         showsHorizontalScrollIndicator={false}
        style={tw`overflow-visible`} >
        {
            categoryList.map((categori) => {
                return(
                    <View key={categori.id} style={tw`flex justify-center items-center mr-6 `}>
                    <TouchableOpacity 
                     style={tw`p-1 rounded-2xl shadow`}>
                     <Image style={tw`rounded-full w-20 h-20`} source={categori.image} />
                     <Text style={tw`text-center mt-2`}>{categori.name}</Text>
                    </TouchableOpacity>
                    </View>
                )
            })
        }
        </ScrollView>

      </View>
    )
}

const styles = StyleSheet.create({
    
})
export default Categories
