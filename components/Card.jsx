import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Card = () => {
    return (
        <View style={styles.card}>
            <Text style={styles.cardtitle}>Durgesh Jadhav</Text>
            <Text style={styles.craddescri}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum error reprehenderit corrupti exercitationem 
            quasi voluptatem,deleniti neque consequatur modi repellendus esse dignissimos consectetur
                obcaecati sequi dolorum veniam! Non, odit laboriosam!</Text>
                <TouchableOpacity style={styles.btn} >
                <Text style={styles.btntext}>Join Us</Text>
                </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    card : {
      backgroundColor : "black",
      borderRadius :  10,
      padding : 16,
      shadowColor : "white",
      shadowOffset: { width: 0, height: 2 },
      marginTop :20,
      width : 300,
      height : 300,
      marginLeft : 20,
      elevation : 3,
      shadowRadius :3,
    },
    cardtitle : {
        color : "white",
        fontWeight: "bold",
        marginBottom : 6,
        fontSize : 24,
    },
    craddescri : {
        
            fontSize: 16,
            color: 'gray',
        
    },
    btn: {
        backgroundColor : "purple",
        padding :20,
        marginTop: 10,

    },
    btntext : {
        color : "white",
        textAlign : "center",
        fontWeight : "bold"
    }

})

export default Card