import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View ,Image,TouchableOpacity} from "react-native";

const FetchData = () => {
    const [showData, setShowData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const getFetchData = async () => {
        try {
            const response = await fetch(
                "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
            );
            const data = await response.json();
            setShowData(data.drinks); // You need to extract the 'drinks' array from the response
            setIsLoading(false); // Set loading to false after data is fetched
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getFetchData();
    }, []);

    return (
        <View style>
            <Text style={styles.textstyle}>Fetch Their Data</Text>
            {isLoading ? (
                <Text>Loading...</Text>
            ) : (
                <FlatList
                keyExtractor={(item) => item.idDrink}
                    data={showData}
                    renderItem={({ item }) => {
                        return(
                            <View style={styles.card}>
                            <Image source={{uri : item.strDrinkThumb}} style={styles.img}></Image>
                            <Text style={styles.tittle}>{item.strDrink}</Text>
                          <Text>{item.strInstructions}</Text>
                              <TouchableOpacity style={styles.btn}onPress={() => Alert.alert('Sorry but Bokking Is Already Done')}>
                                <Text style={styles.btntext} >Join Now</Text>
                              </TouchableOpacity>
                        </View>
                        )
                    }}
                    
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    textstyle: {
        color: "tomato",
        fontSize: 24,
        textAlign: "center",
        marginVertical: 16,
    },
    drinkName: {
        fontSize: 18,
        marginVertical: 8,
    },
    card: {
        backgroundColor:'white',
        width:300,
        padding:16,
        borderRadius:8,
        shadowColor:'white',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
     },
     img:{
       width:'100%',
       height:200,
       marginBottom:8,
       borderRadius:8,
 
     },
     title:{
       fontSize:20,
       paddingBottom:10,
      fontWeight:'bold',
     },
     btn:{
         backgroundColor:'#18c443',
         paddingVertical:10,
         paddingHorizontal:20,
         borderRadius:8,
         justifyContent:'center',
         alignItems:'center',
         marginTop:10,
     },
     btntext:{
         color:'white',
         fontSize:16,
         fontWeight:'bold',
     }
});

export default FetchData;
