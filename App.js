
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Product from "./Product";
import { Provider } from "react-redux";
import { store } from "./redux/Store";

const App = () => {
  return(
    <Provider store={store}>
    <Product/>
    </Provider>
  
  )
}
const styles = StyleSheet.create({
  
})
export default App