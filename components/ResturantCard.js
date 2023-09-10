import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import tw from 'twrnc';

const RestaurantCard = ({ item}) => {
    const navigation = useNavigation()
  return (
    <TouchableOpacity 
     onPress={() => navigation.navigate('store' ,  { itemId: item.id, itemName: item.name ,itemImage : item.image , itemdes : item.description, dishesitem :item.dishes })}>
    <View style={tw`p-2 shadow-lg`} key={item.id}  >
    <View style={styles.card}>
      <Image
        source={item.image} 
        style={styles.cardImage}
      />
      <View style={styles.cardTitle}>
        <Text style={tw`text-lg`}>{item.name}</Text>
      </View>
      <View style={styles.cardDescription}>
        <Text>{item.description}</Text>
      </View>
      <TouchableOpacity style={tw`bg-gray-300 p-3 rounded mt-2 `}>
        <Text style={tw` text-center`}>Checkout There</Text>
      </TouchableOpacity>
    </View>    
    </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    main : {
       paddingRight:10,
       paddingLeft:10,
      
    },
  card: {
    width: 190,
    backgroundColor: 'white',
    padding: 10, 
    borderRadius: 6,
   
  },
  cardImage: {
    backgroundColor: 'white',
    width: '100%',
    height: 150, // Use '130' instead of '130px'
    borderRadius: 6,
  },
  cardTitle: {
    marginTop: 10,
    
  },
  cardDescription: {
    marginTop: 10, // Add some margin to separate description from title
  },
});

export default RestaurantCard;
