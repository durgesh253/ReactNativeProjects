
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Appnavigation from "./navigations/Appnavigation";
import { Provider } from "react-redux";
import { store } from "./redux/Store";


const App = () => {
  return(
    <Provider store={store}>
    <Appnavigation/>
   
    </Provider>
  
  )
}
const styles = StyleSheet.create({
  
})
export default App