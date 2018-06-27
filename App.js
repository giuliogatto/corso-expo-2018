import React from 'react'
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {Provider} from 'react-redux'

import AddContactScreen from './screens/AddContactScreen'
import SettingsScreen from './screens/SettingsScreen'
import ContactListScreen from './screens/ContactListScreen'
import ContactDetailsScreen from './screens/ContactDetailsScreen'
import store from './redux/store'

// MAIN STACK NAVIGATOR: comprende 3 schermate su cui navigare

const MainStack = createStackNavigator(
  {
    ContactList: ContactListScreen,
    ContactDetails: ContactDetailsScreen,
    AddContact: AddContactScreen,
  },
  {
    initialRouteName: 'ContactList',
    navigationOptions: {
      headerTintColor: '#a41034',
      headerStyle: {
        backgroundColor: '#fff',
      },
    },
  }
)

MainStack.navigationOptions = {
  tabBarIcon: ({focused, tintColor}) => (
    <Ionicons name={`ios-contacts${focused ? '' : '-outline'}`} size={25} color={tintColor} />
  ),
}

// MAIN TABS COMPONENT: navigazione a TABS che comprende uno screen (SettingsScreen) e uno Stack Navigator (MainStack)
// esempio di composizione di navigazione

const MainTabs = createBottomTabNavigator(
  {
    Contacts: MainStack,
    Settings: SettingsScreen,
  },
  {
    tabBarOptions: {
      activeTintColor: '#a41034',
    },
  }
)

// COMPONENTE PRINCIPALE: ENTRY POINT DELLA APP
// e' incluso dentro ad un componente <Provider> legato allo store importato da /redux/store

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainTabs />
      </Provider>
    )
  }
}
