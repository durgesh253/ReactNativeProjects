import { View, Text, SafeAreaView, Image, TextInput } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

const AddNewThred = () => {
  return (
    <SafeAreaView  style={{flex : 1}}>
      <View style={{
        width : '100%',
        height : 50,
        borderBottomWidth : 0.3,
        borderBottomColor : '#9e9e9e',
        justifyContent : 'space-between',
        alignItems : 'center',
        flexDirection : 'row',
        paddingLeft : 20,
      }}>
      <Text>Cancel</Text>
      <Text style={{color : 'black' , fontSize : 18 , fontWeight :  '700'}}>New Thred</Text>
      <Text> </Text>
      </View>
      <View style= {{
        flexDirection : 'row',
        marginLeft : 20,
        marginTop : 20,
      }}>
      <Image  source={require('../../assets/user.jpg')} style={{ width : 40 , height : 40 , borderRadius :  20,
        color : '#9e9e9e'}}/>
     <View >
      <Text style={{marginLeft : 10 , fontSize : 18}}>Durgesh Jadhav</Text>
      <TextInput  placeholder='start a thread...' style={{marginLeft : 10}}/>
      <Icon  name='link' size={20}  style={{opacity : 0.7 , marginTop : 22}}/>
      </View>
      </View>
      <View style={{
        width :  '100%',
        position : 'absolute',
        bottom : 50,
        justifyContent : 'space-between',
        flexDirection :'row',
        paddingLeft : 20,
        paddingRight : 20,
      }}>
      <Text>Anyone Can Replay</Text>
      <Text style={{color : 'blue' , fontSize : 18}}>Post</Text>
      </View>
    

    </SafeAreaView>
  )
}

export default AddNewThred