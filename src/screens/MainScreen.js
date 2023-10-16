import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { useState } from 'react'
import Home from '../componets/Home';
import Search from '../componets/Search';
import Notefication from '../componets/Notefication';
import Account from '../componets/Account';
import { useNavigation } from '@react-navigation/native';

const MainScreen = () => {
  const [selectTab,setselectTab] = useState(0)

  const navigation = useNavigation()
  
  const renderComponent = () => {
    switch (selectTab) {
      case 1:
        return <Home />;
      case 2:
        return <Search />;
      case 4:
        return <Notefication/>;
      case 5:
        return <Account />;
      default:
        return null;
    }
  };
    return (
        <SafeAreaView style={{ flex: 1 ,backgroundColor : 'white'}}>
        {renderComponent()}
            <View style={{ position: 'absolute',
             bottom: 10, 
             width: '100%',
              height: 60,
              justifyContent: "center",
              flexDirection : 'row',
              alignItems : 'center', 
              backgroundColor : 'white',
              marginLeft : 22,
               }}>
            <TouchableOpacity style={{width : '20%', height : '100%',justifyContent : "center", }}
            onPress={() => setselectTab(1)}>
            <Icon name="home" size={30} color={selectTab === 1 ? 'black' : 'blue'}   />

            </TouchableOpacity>
            <TouchableOpacity style={{width : '20%', height : '100%',justifyContent : "center"}}
            onPress={() => setselectTab(2)}>
            <Icon name="search" size={30}  color={selectTab === 2 ? 'black' : 'blue'}  />

            </TouchableOpacity>
            <TouchableOpacity style={{width : '20%', height : '100%',justifyContent : "center"}} onPress={() => {
              navigation.navigate('thred')
            }}>
            <Icon name="edit" size={30}  color={selectTab === 3 ? 'black' : 'blue'} />

            </TouchableOpacity>
            <TouchableOpacity style={{width : '20%', height : '100%',justifyContent : "center"}}
              onPress={() => setselectTab(4)}>
            <Icon name="heart" size={30}  color={selectTab === 4 ? 'black' : 'blue'} />

            </TouchableOpacity>
            <TouchableOpacity style={{width : '20%', height : '100%',justifyContent : "center"}}
            onPress={() => setselectTab(5)}>
            <Icon name="user" size={30} color={selectTab === 5 ? 'black' : 'blue'}  />

            </TouchableOpacity>

            </View>
        </SafeAreaView>
    )
}

export default MainScreen