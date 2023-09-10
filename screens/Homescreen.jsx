import React from 'react';
import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text , TextInput, View } from 'react-native';
import tw from 'twrnc';
import Categories from '../components/Categories';
import FeutureProducts from '../components/FeutureProducts';

const Homescreen = () => {
  return (
     <SafeAreaView style={tw`bg-white`}>
     <StatusBar  barStyle={'dark-content'}/>
      {/* nav bar*/}
       <View style={tw`flex-row item-center space-x-2 pb-2`}>
       <View style={tw`flex-row flex-1 item-center ml-5 mr-5 justify-between `}>
         <Image  source={require('../assets/menu.png')}/>
         <View style={tw`flex-row item-center `}>
         <Image  source={require('../assets/map.png')}/>
         <Text className="text-gray-600">Surat, Gujrat</Text>
         </View>
         <Image  source={require('../assets/bell.png')} style={tw`mt-2 `}/>
       </View>

       </View>
       {/* search bar*/}
       <View style={tw`flex-row item-center space-x-2 px-4 pb-2`}>
       <View style={tw`flex-row flex-1 item-center p-3 border rounded-full border-gray-300`}>
       <Image source={require('../assets/search.png')} style={styles.searchstyle}/>
      <TextInput placeholder='Enter Resturant' style={tw`ml-2 flex-1`} />
       </View>
       </View>
        {/* menu bar*/}
       <ScrollView  
          showsVerticalScrollIndicator={false}
          contentContainerStyle={
            {
              paddingBottom:60,
            }
          } >

          {/* categories to resturant*/}
          <Categories/>
             {/* feuture proucts */}
             <View style={tw``}>
          <FeutureProducts/>
          <FeutureProducts/>
          <FeutureProducts/>
          </View>

       </ScrollView>
     </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    searchstyle : {
        height:25,
        width:25,
        
    }
})


export default Homescreen;
