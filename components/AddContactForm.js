import React from 'react'
import {Button, KeyboardAvoidingView, StyleSheet, TextInput, View, TouchableOpacity, Text} from 'react-native'

export default class AddContactForm extends React.Component {
  state = {
    name: '',
    phone: '',
    isFormValid: false,
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.name !== prevState.name || this.state.phone !== prevState.phone) {
      this.validateForm()
    }
  }

  getHandler = key => val => {
    this.setState({[key]: val})
  }

  handleNameChange = this.getHandler('name') // val => { this.setState({name: val}) }
  handlePhoneChange = this.getHandler('phone')


  handlePhoneChange = phone => {
    if (+phone >= 0 && phone.length <= 10) {
      this.setState({phone})
    }
  }

  validateForm = () => {
    console.log(this.state)
    const names = this.state.name.split(' ')
    if (
      +this.state.phone >= 0 &&
      this.state.phone.length >= 10 &&
      names.length >= 2 &&
      names[0] &&
      names[1]
    ) {
      this.setState({isFormValid: true})
    } else {
      this.setState({isFormValid: false})
    }
  }

  validateForm2 = () => {
    if (+this.state.phone >= 0 && this.state.phone.length > 9 && this.state.name.length >= 3) {
      return true
    }
    return false
  }

  handleSubmit = () => {
    this.props.onSubmit(this.state)
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <TextInput
          style={styles.input}
          value={this.state.name}
          onChangeText={this.getHandler('name')}
          placeholder="Name"
        />
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          value={this.state.phone}
          onChangeText={this.getHandler('phone')}
          placeholder="Phone"
        />
        {this.state.isFormValid && <Text> Form validata!</Text>}
        <TouchableOpacity
         style={styles.button}
         onPress={this.handleSubmit}
         disabled={!this.state.isFormValid}
         >
           <Text> Inserisci </Text>
         </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    minWidth: 100,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width:100,
    marginTop: 20,
  },
})
