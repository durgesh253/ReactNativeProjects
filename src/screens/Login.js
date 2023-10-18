import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { signInWithEmailAndPassword } from 'firebase/auth'; // Assuming you have imported this correctly
import { auth } from '../../config/firebase';

const Login = () => {
  const navigation = useNavigation();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const onHandleLogin = () => {
    if (email !== "" && password !== "") {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => navigation.navigate('chat'))
        .catch((error) => Alert.alert("Login error", error.message));
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        placeholder='Enter Email'
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        placeholder='Enter Password'
        style={styles.input}
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.btn} onPress={onHandleLogin}>
        <Text style={{
          fontSize: 20,
          fontWeight: '700',
          paddingTop: 10,
          alignSelf: 'center',
          color: 'white'
        }}>Login</Text>
      </TouchableOpacity>
      <Text style={{
        paddingTop: 10,
        alignSelf: 'center',
        color: 'black'
      }} onPress={() => navigation.navigate('signup')}>Sign Up</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 30,
    color: 'black',
    alignSelf: 'center',
    marginTop: 100,
    fontWeight: '600',
  },
  input: {
    width: '90%',
    height: 50,
    borderWidth: 0.5,
    borderRadius: 10,
    marginTop: 50,
    alignSelf: 'center',
    paddingLeft: 20,
  },
  btn: {
    width: '90%',
    height: 50,
    borderRadius: 40,
    marginTop: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
  }
});

export default Login;
