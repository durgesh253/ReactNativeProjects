import React, { useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet, Switch, Text, TouchableOpacity, View, useColorScheme } from "react-native";
// import ButtonLoader from "./components/ButtonLoder";
import ButtonLoder from "./screens/ButtonLoder";

const App = () => {
   const [isEnable,setisEnable] = useState()
   const backgroundColor = isEnable ? "#000" : "#fff";
   const textColor = isEnable ? "#fff" : "#000";
   

   const toggleSwitch = () => {
    setisEnable(previousState => !previousState)
   }




  return (
    <SafeAreaView style={[styles.container, {backgroundColor}]}>
    
      
     <View >
   
      <View style={styles.maincontainer}>
      <Text style={[styles.tgstyle , { color : textColor} ]}>Toogle Theme</Text>
      <Switch value={isEnable}   thumbColor={isEnable ? '#f5dd4b' : '#f4f3f5'} onValueChange={toggleSwitch}/>
      </View>
        <View>
        <Text style={{color : textColor}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, aliquam. Culpa praesentium odit modi impedit, 
        doloremque omnis molestias nisi repellat, beatae est quasi delectus aspernatur?
         Aliquid officiis odit cumque amet.
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, aliquam. Culpa praesentium odit modi impedit, 
        doloremque omnis molestias nisi repellat, beatae est quasi delectus aspernatur?
         Aliquid officiis odit cumque amet.
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, aliquam. Culpa praesentium odit modi impedit, 
        doloremque omnis molestias nisi repellat, beatae est quasi delectus aspernatur?
         Aliquid officiis odit cumque amet.
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, aliquam. Culpa praesentium odit modi impedit, 
        doloremque omnis molestias nisi repellat, beatae est quasi delectus aspernatur?
         Aliquid officiis odit cumque amet.
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, aliquam. Culpa praesentium odit modi impedit, 
        doloremque omnis molestias nisi repellat, beatae est quasi delectus aspernatur?
         Aliquid officiis odit cumque amet.
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, aliquam. Culpa praesentium odit modi impedit, 
        doloremque omnis molestias nisi repellat, beatae est quasi delectus aspernatur?
         Aliquid officiis odit cumque amet.
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, aliquam. Culpa praesentium odit modi impedit, 
        doloremque omnis molestias nisi repellat, beatae est quasi delectus aspernatur?
         Aliquid officiis odit cumque amet.
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, aliquam. Culpa praesentium odit modi impedit, 
        doloremque omnis molestias nisi repellat, beatae est quasi delectus aspernatur?
         Aliquid officiis odit cumque amet.
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, aliquam. Culpa praesentium odit modi impedit, 
        doloremque omnis molestias nisi repellat, beatae est quasi delectus aspernatur?
         Aliquid officiis odit cumque amet.
        </Text>
        </View>
        <ButtonLoader/>
      </View>

      </SafeAreaView>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 70,
  },
  maincontainer: {
    flexDirection :'row',
    justifyContent : "center",
    alignItems : "center",
    
  },
  tgstyle: {
    fontSize: 24,
    margin :  10,
    color : "white"

  }
});

export default App;
