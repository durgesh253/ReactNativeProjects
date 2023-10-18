import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Appnavigation from './src/Navigation/Appnavigation'

const App = () => {
  return <Appnavigation/>
}
const styles = StyleSheet.create({
    container : {
      flex  : 1,
      justifyContent : 'center',
      alignItems : 'center' ,
    }
})
export default App