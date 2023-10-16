import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

const Search = () => {
  return (
    <SafeAreaView style={{flex : 1}}>
    <Text style={{fontSize : 30 , fontWeight : '800', marginLeft : 20}}  >
    Search
    </Text>
    <View style={{
        width : '90%',
        height : 45,
        backgroundColor : '#e6e6e6',
        alignSelf : 'center',
        marginTop : 20,
        borderRadius : 10,
        flexDirection : 'row',
        paddingLeft : 15,
    }}>
    <Icon name='search' size={22} color='#6e6e6e' style={{alignSelf :'center'}}/>
    <Text  style={{alignSelf :'center',marginLeft : 16,fontSize :20, fontWeight: '500' ,color : '#6e6e6e'}}>Search</Text>
    </View>
    </SafeAreaView>
  )
}

export default Search