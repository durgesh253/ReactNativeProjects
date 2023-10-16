import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

const Account = () => {
    const [Tab,setTab] = useState(0)
  return (
    <SafeAreaView>
        <View style={{
            
            width : '100%',
            height :50,
            flexDirection : 'row',
            justifyContent : 'space-between',
            paddingLeft : 20,
            paddingRight : 20,
            alignItems : 'center',
            
        }}>
    <Icon  name='bell' size={30} />
    <View style={{flexDirection : 'row', alignItems : 'center',}}>
    <Icon name='instagram' size={30}/>
    <Icon name='bars' size={30} style={{marginLeft : 20}}/>
    </View>

    </View>
    <View style={{flexDirection : 'row', justifyContent : 'space-between', marginTop : 20,}}>
    <View style={{ marginLeft : 20 }}>
    <Text style={{fontSize : 22, fontWeight : 600 }}>
    Durgesh Jadhav
    </Text>
    <Text>durgeshjadhav2345</Text>
    <Text style={{fontSize : 15 ,marginTop : 10}}>Full Stack Web Devloper</Text>
    <Text style={{fontSize : 15}}>React Native|python|React Js</Text>

    </View>
    <View style={{
        
        width : 90,
        height : 90,
        borderRadius : 45,
        backgroundColor : '#e6e6e6',
        marginRight : 20,
    }}>
    </View>
    </View>
    
    <View style={{marginTop : 20, paddingLeft : 20, paddingRight :20, flexDirection :'row'}}>
     <Image source={require('../../assets/user.jpg')} style={{width : 28,height :28}}/>
     <Image source={require('../../assets/user.jpg')} style={{width : 28,height :28 , marginLeft:-7}}/>
     <Image source={require('../../assets/user.jpg')} style={{width : 28,height :28 ,marginLeft:-7}}/>
     <Text style={{marginLeft : 10,alignSelf : 'center'}}>12 Followers</Text>
     <Text style={{marginLeft : 10,alignSelf : 'center', color : '#9e9e9e'}}>myportfollio.netlify.app</Text>
    </View>
    <View style={{width : '100%' , flexDirection : 'row', justifyContent : 'space-evenly', alignItems : 'center', marginTop : 20}}>
    <TouchableOpacity style={{
        width : '40%',
        height : 45,
        borderWidth : 2,
        borderRadius : 10,
        alignItems : 'center',
        justifyContent : 'center'
    }}>
    <Text style={{}}>Edit Profile</Text>

    </TouchableOpacity>
    <TouchableOpacity style={{
        width : '40%',
        height : 45,
        borderWidth : 2,
        borderRadius : 10,
        alignItems : 'center',
        justifyContent : 'center'
    }}>
    <Text style={{}}>Share Profile</Text>

    </TouchableOpacity>
    </View>
    <View style={{flexDirection : 'row' , height : 50, justifyContent : 'center' ,marginTop : 20}} >
    <TouchableOpacity style={{
        width : '30%',
        height : 45,
        
        borderRadius : 10,
        alignItems : 'center',
        justifyContent : 'center',
        borderBottomWidth : Tab==0?1:0
    }} onPress={() => {setTab(0)}}>
    <Text style={{color : Tab == 0 ? 'black' : '#9e9e9e'}}>Threds</Text>

    </TouchableOpacity>
    <TouchableOpacity style={{
        width : '30%',
        height : 45,
       
        borderRadius : 10,
        alignItems : 'center',
        justifyContent : 'center',
        borderBottomWidth : Tab==1?1:0
    }}
      onPress={() => {setTab(1)}}>
      <Text style={{color : Tab == 1 ? 'black' : '#9e9e9e'}}>Replies</Text>

    </TouchableOpacity>
    <TouchableOpacity style={{
        width : '30%',
        height : 45,
       
        borderRadius : 10,
        alignItems : 'center',
        justifyContent : 'center',
        borderBottomWidth : Tab==2?1:0
    }}
    onPress={() => {setTab(2)}}
     >
     <Text style={{color : Tab == 2 ? 'black' : '#9e9e9e'}}>Reposts</Text>

    </TouchableOpacity>
    </View>
    {Tab == 0 ? (<View>
        <View style={{justifyContent : 'center',alignItems : 'center' , marginTop : 100}}>
        <Text>Create A new Thred</Text>
        </View>
        </View>) : (
            <View style={{justifyContent : 'center',alignItems : 'center' ,marginTop : 100,}}>
            <Text style={{color : '#9e9e9e'}}>you haven't posted any replies</Text>
            </View>
        )}
    </SafeAreaView>
  )
}

export default Account