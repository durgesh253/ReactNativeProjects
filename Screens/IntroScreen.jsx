import { View, Text, StatusBar, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const IntroScreen = ({onFinish}) => {
    const [name, setname] = useState(''); // Initialize with an empty string
    const handleOnChangeText = text => setname(text);

    const handleSubmit = () => {
        const user = {name : name}
        AsyncStorage.setItem('user',JSON.stringify(user))
        if (onFinish) onFinish()
    }

    return (
        <View style={styles.container}>
            <Text style={styles.inputTitle}>Enter Your Name To Continue</Text>
            <TextInput
                value={name}
                onChangeText={handleOnChangeText} // Use onChangeText instead of onChange
                placeholder='Enter Name'
                style={styles.textinput}
            />
            {name.trim().length >= 3 ? (
                <TouchableOpacity style={styles.btnctn} onPress={handleSubmit}>
                    <Text style={styles.textbtn}>Continue</Text>
                </TouchableOpacity>
            ) : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    textinput: {
        borderWidth: 2,
        backgroundColor: "gray",
        color: "white",
        width: "90%",
        height: 50,
        borderRadius: 10,
        paddingLeft: 15,
        fontSize: 25,
        marginBottom: 15,
        
    },
    inputTitle: {
        alignSelf: 'flex-start',
        paddingLeft: 25,
        marginBottom: 5,
        opacity: 0.5,
    },
    btnctn: {
        backgroundColor: "black",
        padding: 15,
        borderRadius: 5,
    },
    textbtn: {
        color: "white",
    }
});

export default IntroScreen;
