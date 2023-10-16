import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useState } from 'react'

const Notefication = () => {
  const [selectedTab,setselectedTab] = useState(0)
  return (
    <SafeAreaView style={{flex : 1}}>
    <Text style={{fontSize : 32 , fontWeight : '700' , marginLeft : 20}} >Activity</Text>
    <View>
    <ScrollView horizontal style={{marginTop :20}}>
    <TouchableOpacity style={{width : 100 , height :40 ,borderWidth : 1,borderRadius : 10,
      marginLeft : 20 ,justifyContent : 'center', alignItems : 'center' ,backgroundColor: selectedTab==0 ?'black' :'transparent'}}
      onPress={()=>setselectedTab(0)}>
      <Text style={{fontSize : 16 ,fontWeight : '600',color : selectedTab==0 ?'white' :'black'}}
        >All</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{width : 100 , height :40 ,borderWidth : 1,borderRadius : 10,
      marginLeft : 20 ,justifyContent : 'center', alignItems : 'center',backgroundColor: selectedTab==1 ?'black' :'transparent'}}
      onPress={()=>setselectedTab(1)}>
      <Text style={{fontSize : 16 ,fontWeight : '600',color : selectedTab==1 ?'white' :'black'}}>Follows</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{width : 100 , height :40 ,borderWidth : 1,borderRadius : 10,
      marginLeft : 20 ,justifyContent : 'center', alignItems : 'center',backgroundColor: selectedTab==2 ?'black' :'transparent'}}
      onPress={()=>setselectedTab(2)}>
      <Text style={{fontSize : 16 ,fontWeight : '600',color : selectedTab==2 ?'white' :'black'}}>Replies</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{width : 100 , height :40 ,borderWidth : 1,borderRadius : 10,
      marginLeft : 20 ,justifyContent : 'center', alignItems : 'center',backgroundColor: selectedTab==3 ?'black' :'transparent'}}
      onPress={()=>setselectedTab(3)}>
      <Text style={{fontSize : 16 ,fontWeight : '600',color : selectedTab==3 ?'white' :'black'}}>Mentions</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{width : 100 , height :40 ,borderWidth : 1,borderRadius : 10,
      marginLeft : 20 ,justifyContent : 'center', alignItems : 'center',backgroundColor: selectedTab==4 ?'black' :'transparent'}}
      onPress={()=>setselectedTab(4)}>
      <Text style={{fontSize : 16 ,fontWeight : '600',color : selectedTab==4 ?'white' :'black'}}>Quotes</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{width : 100 , height :40 ,borderWidth : 1,borderRadius : 10,
      marginLeft : 20 ,justifyContent : 'center', alignItems : 'center',backgroundColor: selectedTab==5 ?'black' :'transparent'}}
      onPress={()=>setselectedTab(5)}>
      <Text style={{fontSize : 16 ,fontWeight : '600',color : selectedTab==5 ?'white' :'black'}}>Reposts</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{width : 100 , height :40 ,borderWidth : 1,borderRadius : 10,
      marginLeft : 20 ,justifyContent : 'center', alignItems : 'center',backgroundColor: selectedTab==6 ?'black' :'transparent'}}
      onPress={()=>setselectedTab(6)}>
      <Text style={{fontSize : 16 ,fontWeight : '600',color : selectedTab== 6?'white' :'black'}}>Verified</Text>
    </TouchableOpacity>
    </ScrollView>
    </View>
    <View>
    <FlatList data={[1,1,1,1,1,1,1,1,1,1]} renderItem={({item,index}) => {
         return (
          <View style={{
            width : '100%',
             flexDirection : 'row',
             paddingLeft : 20,
             paddingRight :20,
             height : 50,
             alignItems : 'center',
             justifyContent : 'space-between',
             marginTop  : 20,

          }}>
          <View style={{flexDirection : 'row'}}>
          <Image  source={require('../../assets/user.jpg')} style={{
            width : 40, height : 40, borderRadius : 20,
          }}/>
          <View style={{marginLeft : 10}}>
          <View style={{flexDirection : 'row' ,alignItems : 'center'}}>
          <Text style={{fontWeight : '600'}}>Durgesh Jadhav</Text>
          <Text style={{marginLeft : 10 , color : '#9e9e9e'}}>7h</Text>
          </View>
          <Text style={{ color : '#9e9e9e'}}>Followed you</Text>


          </View>
          </View>
          <TouchableOpacity style={{width : 100 , height : 35 , borderRadius : 10, borderWidth : 0.3,
          justifyContent : 'center' ,alignItems : 'center'}}>
          <Text style={{color : '#9e9e9e'}}>Follow</Text>
          </TouchableOpacity>
          </View>
         )
    }}/>
    </View>
    
    
    </SafeAreaView>
  )
}

export default Notefication