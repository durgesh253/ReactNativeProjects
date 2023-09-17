import React, { useEffect } from "react";
import { ScrollView, Text, View, Image, StyleSheet } from "react-native";
import tw from 'twrnc';
import { useDispatch, useSelector } from "react-redux";
import { fetchproducts } from "../redux/ProductsSlice";

const Productscreen = () => {
   const { data, isLoading } = useSelector((state) => state.products);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchproducts());
   }, []);

   return (
      <View style={tw`mx-4 space-y-4`}>
         <Text style={tw`font-semibold text-neutral-600`}>Products</Text>
         <ScrollView showsVerticalScrollIndicator={false}>
            <View>
               {data.map((item, index) => (
                  <View style={styles.card} key={index}>
                     <Image source={{ uri: item.image }} style={styles.image} />
                     <View style={styles.cardContent}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.text}>hello</Text>
                     </View>
                  </View>
               ))}
            </View>
         </ScrollView>
      </View>
   );
};

const styles = StyleSheet.create({
   card: {
     backgroundColor: 'white',
     borderRadius: 10,
     overflow: 'hidden',
     marginVertical: 10,
     elevation: 2, // For Android shadow
     shadowColor: 'black', // For iOS shadow
     shadowOffset: { width: 0, height: 2 },
     shadowOpacity: 0.2,
   },
   image: {
     width: '100%',
     height: 200,
   },
   cardContent: {
     padding: 15,
   },
   title: {
     fontSize: 18,
     fontWeight: 'bold',
   },
   text: {
     fontSize: 16,
     marginTop: 5,
   },
 });

export default Productscreen;
