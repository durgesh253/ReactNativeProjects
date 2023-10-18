import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/core'

const Splash = () => {

    const navigaion = useNavigation()

    useEffect(() => {
        setTimeout(() => {
            navigaion.navigate('login')
        }, 2000);
    },[])
  return (
    <View style={styles.container} >
      <Text style={styles.textstyle} >Chat App</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flex :  1,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor: 'orange'
    },
    textstyle : {
        fontSize : 30,
        color : 'white',
        fontWeight : '800',
        paddingHorizontal : 20,
    }
})
export default Splash