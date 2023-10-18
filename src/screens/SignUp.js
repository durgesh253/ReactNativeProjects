import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/core'

const SignUp = () => {
    const navigation = useNavigation()
    const [name,setname] = useState('')   
    const [email,setemail] = useState('')
    const [mobile,setmobile] = useState('')  
    const [password,setpassword] = useState('')   
    const [cprassword,setcpassword] = useState('')   
  return (
    <View style={styles.container}>
      <Text  style={styles.title}>SignUp</Text>
      <TextInput placeholder='Enter Name' style={styles.input}
        value={name} onChangeText={txt => setname(txt)}/>
      <TextInput placeholder='Enter Email' style={styles.input}
      value={email} onChangeText={txt => setemail(txt)}/>
      <TextInput placeholder='Enter Mobile' style={styles.input}
      value={mobile} onChangeText={txt => setmobile(txt)}/>
      <TextInput placeholder='Enter Password' style={styles.input}
      value={password} onChangeText={txt => setpassword(txt)}/>
      <TextInput placeholder='Enter Confirm Password' style={styles.input}
      value={cprassword} onChangeText={txt => setcpassword(txt)}/>
      <TouchableOpacity style={styles.btn}>
      <Text style={{fontSize : 20,  fontWeight : '700',
     paddingTop : 10,alignSelf : 'center',color : 'white'}}>Sign Up</Text>
      </TouchableOpacity>
      <Text style={{
     paddingTop : 10,alignSelf : 'center',color : 'black'}} onPress={() => navigation.navigate('login')}>Login</Text>
    </View>
  )
}

const styles =  StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : 'white',
    },
    title : {
        fontSize : 30,
        color : 'black',
        alignSelf :'center',
        marginTop :  100,
        fontWeight : 600, 
    },
    input : {
        width : '90%',
        height : 50,
        borderWidth : 0.5,
        borderRadius : 10,
        marginTop : 50,
        alignSelf : 'center',
        paddingLeft : 20,

    },
    btn : {
        width : '90%',
        height : 50,
        borderWidth : 0.5,
        borderRadius : 40,
        marginTop : 50,
        alignSelf : 'center',
        paddingLeft : 20,
        backgroundColor : 'orange'
    }
})

export default SignUp