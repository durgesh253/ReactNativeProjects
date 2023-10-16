import { View, Text, SafeAreaView, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = () => {
  return (
  <SafeAreaView>
  
    <ScrollView nestedScrollEnabled>
    <Image source={require('../../assets/Threads-Logo.jpg')} 
    style={{width : 50, height :50, alignSelf : 'center'}}/>
    <FlatList 
      data={[1,2,3,4,5,6]} renderItem={(({item,index}) => {
           return (
            <View style={{width : '100%'}}>
            <View
              style={{
                width : '100%',
                flexDirection : 'row',
                justifyContent : 'space-between',
                paddingHorizontal : 10,
              }}>
              <View style={{flexDirection : 'row', alignItems : 'center'}}>
              <View
                style={{
                    width : 50,
                    height : 50,

                }}>
                <Image source={require('../../assets/user.jpg')}
                  style={{height : 50, width : 50}}/>
                  <Image source={require('../../assets/plus.png')}
                  style={{height : 16, width : 16, position :'absolute', right : 0, bottom : 10}}/>
              </View>
              <View style={{marginLeft : 10}}>
              <Text style={{fontSize : 18 , fontWeight : '500'}}>Duragesh Jadhav</Text>
              <Text>Caption demo for threds</Text>

              </View>
            </View>
            <View style={{flexDirection : 'row', alignItems : 'center'}}>
            <Text>53m</Text>
            <TouchableOpacity style={{marginLeft : 10}}>
            <Icon name="bars"/>
            </TouchableOpacity>
            
            </View>
            </View>
            <View style={{flexDirection :  'row'}}>
            <View
              style={{
                height : 200,
                width : 2,
                opacity : 0.2,
                marginLeft : 33, 
                backgroundColor : 'black'
              }}>

            </View>
            <View style={{width :  '75%'}}>
            <Image source={require('../../assets/post.jpeg')} style={{height : 180, width : '100%',marginLeft : 30,
             borderRadius : 10}}/>
             <View style={{flexDirection : 'row', marginTop : 15,  marginLeft : 25,}}>
               <Icon name='heart-o' size={25} style={{marginLeft : 20}}/>
               <Icon name='comment-o' size={25} style={{marginLeft : 20}} />
               <Icon name='refresh' size={25}  style={{marginLeft : 20}}/>
               <Icon name='send-o' size={25}  style={{marginLeft : 20}}/>

             </View>
             <View style={{flexDirection : 'row', marginTop : 10,  marginLeft : 42,}}>
             <Text style={{color :'#9e9e9e'}}>93 Replies</Text>
              <Text style={{color :'#9e9e9e' , marginLeft : 20}}>83 Likes</Text>
           </View>
             </View>

            </View>

            </View>
           )
      })}/>
    </ScrollView>
  </SafeAreaView>
  )
}

export default Home