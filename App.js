import React, { useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet, Switch, Text, TouchableOpacity, View, useColorScheme } from "react-native";



const App = () => {
  const [darkTheme,setdarkTheme] = useState(false)
  const [result,setresult] = useState("")

  const colors = {
    dark : '#22252D',
    dark1 : '#293B36',
    dark2 : '#272B22',
    light : '#FFF',
    light1 : '#F1F1F1',
    light2 : '#F7F7F7',
  }

  const calculate = (title) => {
      if (title == 'C'){
        setresult('')
      }else if (title == 'DL'){
        setresult(result.substring(0 , result.length - 1))
      }else if(title == '='){
        const ans = Number(eval(result).toFixed(3)).toString();
        setresult(ans)
      }else{
        setresult(result + title)
      }
  }

  const Btn = ({title,type}) => {
    return <TouchableOpacity onPress={() =>calculate(title)}
    style={{padding : 10, borederRadius : 20, 
    elevation : 2, backgroundColor : getColor(colors.light1, colors.dark1) , height : 70,
   width : 70 , margin : 16, alignItems : 'center', }}>
        <Text style={{fontSize : 37 , color : getBtnColor(type)}}>{title}</Text>
      </TouchableOpacity>
  }

  const getBtnColor = (type) => {
     if(type == 'top'){
      return '#35FBD6'
     } else if(type == 'right'){
      return '#EB6363'
     }else{
      return getColor(colors.dark ,colors.light)
     }

  }

  const getColor = (light , dark) => darkTheme ? dark : light;
  return (
    <View style={{height : '100%'  , width : '100%',backgroundColor : getColor(colors.light, colors.dark), 
     marginTop : 50, alignItems : 'center' }}>
   <Switch value={darkTheme} onValueChange={() =>  setdarkTheme(!darkTheme)} 
      thumbColor={getColor(colors.dark , colors.light)}  
        trackColor={{true : colors.light2 , false : colors.dark2}}/>
        <Text style={{color : getColor(colors.dark , colors.light) ,
        width : '100%' , textAlign : 'left', paddingRight : 20 ,fontSize : 30, marginTop :160 ,paddingBottom : 20 }}>{result}</Text>
        <View style={{flexDirection :  'row' , flexWrap : 'wrap',alignItems : 'center',
      backgroundColor: getColor(colors.light1 , colors.dark1)}}>
       <Btn title="C" type='top'/>
       <Btn title="DL" type='top'/>
       <Btn title="/" type='top'/>
       <Btn title="%" type='top'/>
       <Btn title="7"/>
       <Btn title="8"/>
       <Btn title="9"/>
       <Btn title="*" type='right'/ >
       <Btn title="4"/>
       <Btn title="5"/>
       <Btn title="6"/>
       <Btn title="-" type='right'/>
       <Btn title="1"/>
       <Btn title="2"/>
       <Btn title="3"/>
       <Btn title="+" type='right'/>
       <Btn title="00"/>
       <Btn title="0"/>
       <Btn title="."/>
       <Btn title="=" type='right'/>
        </View>
   </View>

  );
}


export default App;
