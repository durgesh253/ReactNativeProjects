import React from "react";
import { StyleSheet, View ,Text, Image, TouchableOpacity, Alert}  from "react-native";

const Card = () => {
   return(
    <View style={styles.card}>
        <Image source={require('./assets/cardimg.jpeg') } style={styles.img}></Image>
      <Text style={styles.title}>This Is Card Component</Text>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ipsum optio,
         nostrum illum a ea odit voluptatum iure neque excepturi dicta nisi!
          Ratione expedita quasi vel non vitae ipsum earum.</Text>
          <TouchableOpacity style={styles.btn}onPress={() => Alert.alert('Sorry but Bokking Is Already Done')}>
            <Text style={styles.btntext} >Join Now</Text>
          </TouchableOpacity>
    </View>
   )
}
const styles = StyleSheet.create({
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
})
export default Card;