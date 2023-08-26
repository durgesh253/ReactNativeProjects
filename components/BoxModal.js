import React from "react";
import { View ,StyleSheet,Text} from "react-native";

const BoxModal = () => {
  return(

    <View style={styles.box}>
        <Text>First Box</Text>
    </View>
   
  )
}
const styles = StyleSheet.create({
    box:{
        backgroundColor:'lightgray',
        padding:56,
        width:'100%',
        margin:10,
        borderRadius:8,
    }
})
export default BoxModal;