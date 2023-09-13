import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { deleteuser } from '../redux/Userslice';

const User = () => {
  // Assuming that you have a Redux store configured with a 'users' slice
  const users = useSelector((state) => state.users);
  console.log(users)
  const navigation = useNavigation();
  const dispatch = useDispatch()

  const Userdelete = (id) => {
       dispatch(deleteuser({id : id}))
  }

  return (
    <View style={styles.container}>
      <View>
        {users && users.length > 0 ? (
          users.map((item) => (
            <View style={{display :'flex'}}>
            <Text style={{ color: 'red' }} key={item.id}>
             Id :  {item.id}
            </Text>
            <Text>
             Name :  {item.userName}
            </Text>
            <Text>
            email :  {item.email}
           </Text>
            <View style={{}}>
             <TouchableOpacity style={styles.deletebtn} onPress={() => Userdelete(item.id)}>
             <Text style={{textAlign :"center",color:"white"}}>Dlete</Text>
         
             </TouchableOpacity>
             <TouchableOpacity style={styles.updatebtn} onPress={() => navigation.navigate('update')}>
             <Text style={{textAlign :"center",color:"white"}}>Update</Text>
         
             </TouchableOpacity>
             </View>
             
            </View>
            
          ))
        ) : (
          <Text>No users available</Text>
        )}
      </View>

      <TouchableOpacity
        style={styles.addbtn}
        onPress={() => navigation.navigate('adduser')}
      >
        <Text style={styles.textstyle}>ADD USER</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addbtn: {
    backgroundColor: 'purple',
    position: 'absolute',
    bottom: 15,
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
  },
  textstyle: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  deletebtn : {
    marginTop:10,
    padding:10,
    backgroundColor:'red',
    width:60,
    borderRadius:10,

    
  },
  updatebtn : {
      marginTop:10,
      padding:10,
      backgroundColor:'green',
      width:70,
      borderRadius:10,
  

  }
});

export default User;
