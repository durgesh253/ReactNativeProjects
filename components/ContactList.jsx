import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import React from 'react'


const ContactList = () => {

    const Contacts = [
        {
            uid : 1,
            name : 'Durgesh Jadhav',
            status :"I Love React Native Application",
            image : 'https://images.pexels.com/photos/4061662/pexels-photo-4061662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            uid : 2,
            name : 'Durgesh Jadhav',
            status :"I Love React Native Application",
            image : 'https://images.pexels.com/photos/4061662/pexels-photo-4061662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            uid : 3,
            name : 'Durgesh Jadhav',
            status :"I Love React Native Application",
            imagUrl : 'https://images.pexels.com/photos/4061662/pexels-photo-4061662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            uid : 4,
            name : 'Durgesh Jadhav',
            status :"I Love React Native Application",
            imagUrl : 'https://images.pexels.com/photos/4061662/pexels-photo-4061662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            uid : 5,
            name : 'Durgesh Jadhav',
            status :"I Love React Native Application",
            imagUrl : 'https://images.pexels.com/photos/4061662/pexels-photo-4061662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            uid : 6,
            name : 'Durgesh Jadhav',
            status :"I Love React Native Application",
            imagUrl : 'https://images.pexels.com/photos/4061662/pexels-photo-4061662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }
    ]
  return (
    <>
    <Text style={styles.hedteditxt} >ConatctList</Text>
    <View style={styles.headingStyle}>
      <ScrollView scrollEnabled={true}
        style={styles.container}>
        {Contacts.map((cont) => {
            const {uid,image,name,status} = cont

            return (
                <View key={uid} style={styles.userCard}>
                <Image  source={{url : image}}  style={styles.userimge}/>
                <View>
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userstatus}>{status}</Text>
                </View>
                </View>
            )
        })}

      </ScrollView>
    </View>
    </>
  )
 
};
const styles =  StyleSheet.create({
    hedteditxt : {
        fontSize : 24,
        fontWeight : 'bold',
        paddingHorizontal : 8,
    },
    headingStyle : {
        paddingHorizontal : 16,

    },
    userCard : {
        flex : 1,
        flexDirection : 'row',
        alignItems  :'center',
        marginBottom : 3,
        backgroundColor : '#8D3DAF',
        padding : 4,
        borderRadius: 14,
    },
    userimge : {
        height : 60,
        width : 60,
        borderRadius :  60 / 2,
        marginRight : 12,
    },
    userName : {
        fontSize : 18,
        fontWeight : 'bold',


    },
    userstatus : {

    }
    
})
export default ContactList