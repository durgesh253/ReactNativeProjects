import { LinearGradient } from 'expo-linear-gradient';
import tw from 'twrnc';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import GameCard from './GameCard';

const categories = ['Action', 'Family', 'Puzzle', 'Adventure', 'Racing', 'Education', 'Others'];
const featured = [
  {
      id: 1,
      title: 'Zooba',
       image: require('../assets/cardimg.jpeg'),
      downloads: '200k',
      stars: 4
  },
  {
      id: 2,
      title: 'Subway Surfer',
      image: require('../assets/cardimg.jpeg'),
      downloads: '5M',
      stars: 4
  },
  {
      id: 3,
      title: 'Free Fire',
      image: require('../assets/cardimg.jpeg'),
      downloads: '100M',
      stars: 3
  },
  
  {
      id: 4,
      title: "Alto's Adventure",
      image: require('../assets/cardimg.jpeg'),
      downloads: '20k',
      stars: 4
  },
 ];
 const games = [
  {
      id: 1,
      title: 'Shadow Fight',
      image: require('../assets/cardimg.jpeg'),
      downloads: '20M',
      stars: 4.5
  },
  {
      id: 2,
      title: 'Valor Arena',
      image: require('../assets/cardimg.jpeg'),
      downloads: '10k',
      stars: 3.4
  },
  {
      id: 3,
      title: 'Frag',
      image: require('../assets/cardimg.jpeg'),
      downloads: '80k',
      stars: 4.6
  },
  {
      id: 4,
      title: "Zooba Wildlife",
      image: require('../assets/cardimg.jpeg'),
      downloads: '40k',
      stars: 3.5
  },
  {
      id: 4,
      title: "Clash of Clans",
      image: require('../assets/cardimg.jpeg'),
      downloads: '20k',
      stars: 4.2
  },
];
const Storescreen = () => {
  return (
    <LinearGradient
      colors={['rgba(200, 161, 190,0.4)', 'rgba(9, 11, 211, 0.4)']}
      style={tw`w-full flex-1`}
    >
      <SafeAreaView>
      <View style={tw`container`}>
       <View style={tw`flex-row justify-between item-center px-2`}>
       <Text style={styles.fontstyle1}>DJ</Text>
       <Text style={styles.fontstyle1}>Bell</Text>
       </View>
       </View>
      {/*  categoreies row*/}
       <View style={tw`mt-3 `}>
       <Text style={[styles.titlecolor , tw`ml-4 font-bold`]}>
       Browse Games
       </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {
            categories.map(cat => {
              return (
                <TouchableOpacity key={cat}
                style={[tw`bg-purple-200 p-3 px-4 rounded-full mt-3 mr-2 ml-2`,styles.hovercat]}>
               <Text>{cat}</Text>
                </TouchableOpacity>
              )
            })
          }
        </ScrollView>
       </View>
       {/*  fetured row*/}
        <View style={tw`mt-3 `}>
        <Text
        style={tw`ml-4 text-lg font-bold`}>
        Feutured Games
        </Text>
        </View>
        <View style={tw`pl-4`}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
            {
              featured.map((item , index) => {
                return(
                  <GameCard key={index} game={item}/>
                )
              })
            }
        </ScrollView>

          {/* top action gamse list*/}
          <View style={tw`mt-3`}>
          <View style={tw`flex-row justify-between items-center mb-2`} >
          <Text
           style={tw`text-lg font-bold`}>
           Top Action Games </Text>
           <TouchableOpacity style={tw`mr-4`}>
           <Text style={tw`text-blue-600 font-bold`}>See All</Text>
           </TouchableOpacity>
          </View>
          <ScrollView style={{height: 340}} showsVerticalScrollIndicator={false} >
           {
            games.map((game, index)=> {
              return(
                <TouchableOpacity style={tw`mx-4 p-2 mb-2 flex-row`} key={index}>
              <Image source={game.image} style={[{height:80,width:80} , tw`rounded-2xl`]}></Image>
              <View style={tw`flex-1 flex justify-center pl-3 space-y-3`}>
                <Text style={tw`font-semibold`}>{game.title}</Text>
                 <Text style={tw`text-xs`}>Rating : {game.stars}</Text>
                 <Text style={tw`text-xs`}>Downloads : {game.downloads}</Text>
                </View>
                <View className="flex justify-center items-center">
                       <TouchableOpacity style={[tw` px-5 rounded-full mt-2 `, styles.bgplay]} >
                       <Text style={tw`py-5 text-white `}>Play</Text>
                       </TouchableOpacity>
                      </View>
                
                
                </TouchableOpacity>
              )
            })
           }
          </ScrollView>
          </View>
         
        </View>
      
          
        
      
      </SafeAreaView>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  fontstyle1 : {
    fontSize:30,
  },
  titlecolor:{
    color:"black",
    fontSize:30,

  },
  bgplay:{
    backgroundColor:"#483d8b",
    color:"white",
  }
  

})

export default Storescreen;
