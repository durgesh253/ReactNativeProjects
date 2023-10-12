import React, { useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "./components/IconName";
// import Snackbar from "react-native-snackbar";

const App = () => {



  return (
    <>
     
     
      <View style={styles.container}>
      <Icon/>
      </View>
      

      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 70,
  },
  actionBtn: {
    borderRadius: 8,
    backgroundColor: "red",
    padding: 18,
  },
  btnText: {
    color: "black",
  }
});

export default App;
