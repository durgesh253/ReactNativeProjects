import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput 
         
         style={styles.searchbar}
         placeholder='Search Here'/>
    </View>
  )
}

const styles =  StyleSheet.create({
    container : {
        justifyContent: "center"
    },
    searchbar: {
        borderWidth: 0.5,
        height: 40,
        borderRadius: 40,
        paddingLeft : 15,
        
      },
})

export default SearchBar