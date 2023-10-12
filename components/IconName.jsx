import { View, Text,Linking } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';


const IconName = () => {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink)
}
  return (
    <View>
    <Icon.Button name="github" backgroundColor="black" onPress={() => openWebsite('https://chat.openai.com')}>
    <Text style={{ fontFamily: 'Arial', color :"white", fontSize: 15 }}>
      Login with Github
    </Text>
  </Icon.Button>
  <Icon.Button name="android" backgroundColor="black" onPress={() => openWebsite('https://chat.openai.com')}>
    <Text style={{ fontFamily: 'Arial', color :"white", fontSize: 15 }}>
      Login with Github
    </Text>
  </Icon.Button>
    </View>
  )
}

export default IconName