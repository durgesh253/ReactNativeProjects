import React, { useState } from "react";
import { Text, View, TouchableOpacity, ScrollViewComponent, ScrollView } from "react-native";
import { Feutureresturants } from "../screens/Api";
import tw from 'twrnc';
import ResturantCard from "./ResturantCard";

const FeutureProducts = () => {
    const [resturants , setresturants] = useState(Feutureresturants)
    return (

        <View style={tw`mt-4`}>
        <View style={tw`flex-row justify-between items-center px-4`}>
          <View>
            <Text style={tw`font-bold text-lg`}>Resturants</Text>
            <Text style={tw`text-gray-500 text-xs`}>
             All there resurant are here
            </Text>
          </View>
          
          <TouchableOpacity>
            <Text style={tw`font-semibold`}>See All</Text>
          </TouchableOpacity>
        </View>
          
           <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
             style={tw`overflow-visible py-5`}>

             {
                resturants.map((resuturant,index) => {
                    return(
                        <ResturantCard
                           item={resuturant}
                           key={index}
                        />
                    )
                })
             }
           </ScrollView>
        </View>
    )
    
}
export default FeutureProducts