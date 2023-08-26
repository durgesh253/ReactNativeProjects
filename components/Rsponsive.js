import React from "react";
import  { StyleSheet, Text, View } from "react-native";

const Responsive = () => {
  return(
    <View style={styles.conatiner}>
        <View style={styles.header} />
        <View style={styles.main}>
            <View style={styles.section1}/>
            <View style={styles.section1}/>
        </View>
        <View style={styles.footer}/>
   
    </View>
  )
}
const styles =  StyleSheet.create({
    conatiner:{
    height:500,
    },
    header : {
        backgroundColor:"red",
        width:100,
    }
})
export default Responsive;