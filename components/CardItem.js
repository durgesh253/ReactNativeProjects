import React from "react";
import { Text, View,ScrollView,TouchableOpacity ,StyleSheet,Image} from "react-native";



const CardItem = ({item,index}) => {
    console.log(item)
    return(
        <View style={tw`mt-4`}>
          <View style={tw`flex-row justify-beween items-center px-4`}>
          <ScrollView
          
           style={tw`overflow-visible py-5`}>

           <TouchableOpacity 
           >
          <View style={tw`p-2 shadow-lg`} key={item.id}  >
          <View style={styles.card}>
            <Image
            //   source={item.image} 
              style={styles.cardImage}
            />
            <View style={styles.cardTitle}>
              <Text style={tw`text-lg`}>{item.title}</Text>
            </View>
            <View style={styles.cardDescription}>
              <Text></Text>
            </View>
            <TouchableOpacity style={tw`bg-gray-300 p-3 rounded mt-2 `}>
              <Text style={tw` text-center`}>Checkout There</Text>
            </TouchableOpacity>
          </View>    
          </View>
          </TouchableOpacity>
         </ScrollView>
          </View>
        </View>
    )
}

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

export default CardItem;