import React from 'react'
import {Button, View, StyleSheet} from 'react-native'
import {connect} from 'react-redux'

import SectionListContacts from '../components/SectionListContacts'

class ContactListScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle: 'Contacts',
    headerRight: (
      <Button title="Add" onPress={() => navigation.navigate('AddContact')} color="#a41034" />
    ),
  })

  state = {
    showContacts: true,
  }

  handleSelectContact = contact => {
    this.props.navigation.push('ContactDetails', contact)
  }

  render() {
    return (
      <View style={styles.container}>
        
        {this.state.showContacts && (
          <SectionListContacts
            contacts={this.props.contacts}
            onSelectContact={this.handleSelectContact}
          />
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

const mapStateToProps = state => ({
  contacts: state.contacts,
})

export default connect(mapStateToProps)(ContactListScreen)
