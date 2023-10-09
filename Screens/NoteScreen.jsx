import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import SearchBar from '../components/SearchBar'
import NoteInputModal from '../components/NoteInputModal'

const NoteScreen = ({user}) => {

  const findGreet = () => {
    const hrs = new Date().getHours()
    console.log(hrs)
  }
  return (
    <>
    <View style={styles.container}>
      <Text style={styles.header}>{`Hello ${user.name}` }</Text>
      <SearchBar />
      <View style={[ StyleSheet.absoluteFillObject ,styles.emptyContainer]}>
       <Text style={styles.emptyHeader}>Add Notes</Text>
       <TouchableOpacity style={styles.plusiconcontainer}>
       <Text style={styles.plusicon}>+</Text>
       </TouchableOpacity>
      </View>
    </View>
    <NoteInputModal visible={true}/>
    </>
  )
}

const styles = StyleSheet.create({
  container : {
    marginTop : 40,
    paddingHorizontal : 10,
    flex : 1,
  },
  header : {
    fontSize: 25,
    fontWeight : 'bold',
  },
  emptyHeader : {
    fontSize: 30,
    textTransform : 'uppercase',
    fontWeight : 'bold',
    opacity : 0.5,
  }, 
  emptyContainer : {
    flex : 1,
    justifyContent:"center",
    alignItems : "center",
  },
  plusicon : {
    fontSize: 60,
    color : "white",
    textAlign : "center",
  },
  plusiconcontainer : {
    backgroundColor : "black",
    width : 80,
    borderRadius :"100%",
    position :"absolute",
    right : 40,
    bottom : 50,
  }
})

export default NoteScreen;