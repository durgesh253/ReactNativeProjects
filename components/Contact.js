import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native'
import Checkbox from 'expo-checkbox';

const Contact = ({ navigation }) => {
  const [isChecked, setChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (email === "Durgesh" && password === "durgesh") {
      Alert.alert(`Hello ${email}`);
      navigation.navigate("colour");
    } else {
      Alert.alert(`Your Password Is Incorrect`);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGIN PAGE</Text>
      <Text style={styles.textStyle}>Enter Email:</Text>
      <TextInput
        placeholder='Enter Email'
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
      <Text style={styles.textStyle}>Enter Password:</Text>
      <TextInput
        placeholder='Enter Password'
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#4630EB' : undefined}
        />
        <Text style={styles.paragraph}>Custom colored checkbox</Text>
      </View>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: isChecked ? "#007bff" : "gray" }]}
        disabled={!isChecked}
        onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    backgroundColor: 'orange',
    padding: 10,
    color: 'white',
  },
  textStyle: {
    fontSize: 25,
    marginBottom: 10,
  },
  button: {
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paragraph: {
    fontSize: 15,
  },
  checkbox: {
    margin: 8,
  },
});

export default Contact;
