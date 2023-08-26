import React, { useState } from "react";
import { Alert, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ColourGenraor = ({navigation}) => {
    const [newColour , setnewColour ] = useState([]);

    const randomColor = () => {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);

        return `rgb(${red} ,${green} , ${blue})`
    }
    const handlefetch = () => {
        navigation.navigate("data")
    }
 return(
    <View style={styles.container}>
        <TouchableOpacity style={styles.btn} onPress={() => setnewColour([...newColour ,randomColor()])
        }>
            
            <Text style={styles.textstyle}>Genrate Colour</Text>
        </TouchableOpacity>
        <View style={styles.imagecontainer}>
            <FlatList keyExtractor={(key) => key} data={newColour} renderItem={({item}) => {
                return <Text style={{backgroundColor: item , height :100,marginTop:20 , color:"white", fontSize:30, textAlign:"center"}}>{item}</Text>
             
            }}/>
                 </View>
         <TouchableOpacity style={styles.btn} onPress={() => handlefetch()}>
            <Text>fetch Data</Text>
         </TouchableOpacity>
    </View>
 )
}
const styles =  StyleSheet.create({
    container : {
        margin:50,
    },
    btn:{
        backgroundColor:"red",
     
        padding:16,
        borderRadius:8,

    },
    textstyle: {
        color:"white",
        textAlign:"center",
         fontSize:18,
         fontWeight:900,
    }
});
export default ColourGenraor;