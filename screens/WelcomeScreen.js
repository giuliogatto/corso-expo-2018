import React from 'react'
import {Button, View, StyleSheet, Text} from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'

export default class WelcomeScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({focused, tintColor}) => (
      <Ionicons name={`ios-options${focused ? '' : '-outline'}`} size={25} color={tintColor} />
    ),
  }
  componentDidMount(){
    fetch('https://5b3348f7d167760014c26437.mockapi.io/api/v1/items')  
    .then(response => response.json())
    .then(data => {
      console.log(data)
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Welcome Screen.</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    textAlign: 'center',
  },
})
