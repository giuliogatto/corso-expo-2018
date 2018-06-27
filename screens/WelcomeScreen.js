import React from 'react'
import {Button, View, StyleSheet, Text, FlatList, Image , ScrollView} from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'

export default class WelcomeScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({focused, tintColor}) => (
      <Ionicons name={`ios-options${focused ? '' : '-outline'}`} size={25} color={tintColor} />
    ),
  }

  state = {
    data: [],
  }

  componentDidMount(){
    fetch('https://5b3348f7d167760014c26437.mockapi.io/api/v1/items')  
    .then(response => response.json())
    .then(data => {
      console.log(data)
      this.setState({data:data})
    });
  }


  clicked(id){
    console.log(id)
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Welcome Screen.</Text>
        <ScrollView>
          <FlatList
            data={this.state.data}
            keyExtractor={(item, index) => item.id}
            renderItem={({item}) => 
            <View>
              
              <Button onPress={() => this.clicked(item.id)}
              title={item.id + ' ' + item.name}
              color="#000000"
              />
             
            </View>
            }
          />
          
         
      </ScrollView>
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
