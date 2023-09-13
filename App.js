
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Appnavigator from "./navigations/Appnavigator";
import { Provider } from "react-redux";
import { store } from "./redux/Store";

const App = () => {
  return(
  <Provider store={store} >
  <Appnavigator/>
  </Provider>
  )
}
const styles = StyleSheet.create({
  
})
export default App