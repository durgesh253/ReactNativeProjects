import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { adduser } from '../redux/Userslice'

const Adduser = () =>  {
  const route = useRoute()
    const users = useSelector((state) => state.users)
    const [userName,setuserName] = useState()
    const [email,setemail] = useState('')
    const [phone,setphone] = useState('')
    const [address,setaddress] = useState('')
    const dispatch = useDispatch()
    const navigation = useNavigation()
     
     const handlesubmite = () => {
        dispatch(adduser({id : users[users.length - 1].id + 1 , userName,email,phone,address}))
        navigation.navigate('user')

     }
    return (
      <View style={styles.addcontainer}>
        <TextInput style={styles.textinput} placeholder='   Enter Name' value={userName} onChangeText={(text) =>  setuserName(text)}/>
        <TextInput style={styles.textinput} placeholder='   Enter Email' value={email} onChangeText={(text) => setemail(text)}/>
        <TextInput style={styles.textinput} placeholder='   Enter Phone' value={phone} onChangeText={(text) => setphone(text)}/>
        <TextInput style={styles.textinput} placeholder='   Enter Address' value={address} onChangeText={(text) => setaddress(text)}/>
        <TouchableOpacity style={styles.addbtn} onPress={handlesubmite}>
        <Text style={{textAlign : "center" , color : "white" , fontSize:19}}>Add User</Text>
        </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
    addcontainer : {
        flex : 1,
    },
    textinput : {
        height : 50,
        width :'90%',
        borderColor : "black",
       borderWidth :1,
       marginTop:20,
      alignSelf :"center",
      borderRadius : 10,
      justifyContent :'center',
      alignItems :'center'

    
    },
    addbtn : {
        marginTop:20,
        backgroundColor:"green",
        padding:20,
        width:"90%",
        justifyContent:"center",
        alignContent:"center",
        marginLeft :20,
        borderRadius : 20,
    }

})

export default Adduser
