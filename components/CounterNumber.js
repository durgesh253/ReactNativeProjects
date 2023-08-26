import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CounterNumber = () => {

    const [count , setCount] = useState(0);

    const handleincrement = () => {
        setCount(preve => preve + 1);
    }
    const handleReset = () => {
        setCount(0);
    }
    const handleDecrement = () => {
        setCount(preve => preve - 1);
    }
return(
    <View style={styles.conatiner}>
        <Text style={styles.textstyle}>Count : {count}</Text>
        <TouchableOpacity style={styles.comn} onPress={() => handleincrement()}>
            <Text>Increment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.comn} onPress={() => handleReset()}>
            <Text>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.comn} onPress={() => handleDecrement()}>
            <Text>Decrement</Text>
        </TouchableOpacity>
    </View>
)
}
const styles = StyleSheet.create({
    conatiner:{
        justifyContent:"center",
        alignItems:"center",
        marginTop:200,
    },
    comn: {
       backgroundColor:'pink',
       padding:16,
       marginTop:20,
       borderRadius:8,

    },
    textstyle : {
        fontSize:30,
    }
}) 
export default CounterNumber;