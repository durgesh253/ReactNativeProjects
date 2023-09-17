import React from "react";
import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import tw from 'twrnc';
import { categories } from "../Data";
import BootomNavigation from "../components/BootomNavigation";


const Storescreen = () => {
  return (
   
    <View style={tw`bg-white mt-15 flex-1`}>
    <BootomNavigation/>
      <StatusBar style={tw`dark-content`} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* top header */}
        <View style={tw`mx-4 flex-row justify-between items-center mb-2 relative`}>
          <Image source={require('../assets/iconBack.png')} />
          <Image source={require('../assets/Icon.png')} />
        </View>
        {/* greeting header*/}
        <View style={tw`mx-4 space-y-2 mb-2 mt-5`}>
          <Text style={styles.headertitle}>Plant</Text>
          <Text style={styles.headertitle}>is for room</Text>
        </View>
        {/* categories*/}
        <View style={tw`mt-4`}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={tw`space-x-4`}
            contentContainerStyle={{ paddingHorizontal: 15 }}
          >
            {categories.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={[tw`bg-green-700 p-2 px-3 rounded-2xl mt-3 mr-2 ml-2`, styles.hovercat]}
                >
                  <View style={tw`rounded p-[6px]`}>
                    <Text style={tw`text-white`}>{item.name}</Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
          <View style={styles.box}>
          <View style={styles.rectangle}>
          <Image source={require('../assets/resturant5.jpeg')} style={{width : '100%' ,height : 152 , justifyContent :'center' ,alignItems : 'center' , borderRadius : 16 , position :'fixed'}}/>
          </View>
         
        </View>
      
         
        </View>
        
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headertitle: {
    color: '#000',
    fontSize: 28,
    fontWeight: '600',
  },
  box: {
    position: 'relative',
    padding :20,
    marginTop : 20,
  },
  rectangle: {
    width: 380,
    height: 152,
    borderRadius: 16,
    backgroundColor:"pink",
  
  },
});

export default Storescreen;
