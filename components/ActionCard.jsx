import { View, Text, StyleSheet, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const ActionCard = () => {

    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink)
    }
    return (
        <View>
            <Text style={styles.hedingtext}>ActionCard</Text>
            <View style={[styles.elventCrad, styles.card]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>
                        What is Your Next Plan Durgesh!
                    </Text>
                </View>
                <Image source={{
                    uri: 'https://images.pexels.com/photos/11042107/pexels-photo-11042107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                }}  style={styles.cardImg}/>
                <View style={styles.bodyContainer}>
                <Text numberOfLines={4}>
               
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolores
                necessitatibus natus, nobis voluptates, earum aut sapiente consequuntur rem sequi harum,
                odio vel ad? Earum asperiores odio assumenda odit voluptatibus.
                </Text>
                </View>
                <View >
                <TouchableOpacity
                  onPress={() => openWebsite('https://chat.openai.com')}>
                <Text>Red More</Text>
                </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    hedingtext: {},
    card: {},
    headingContainer: {},
    headerText: {},
    cardImg : {},
    bodyContainer : {},
})

export default ActionCard