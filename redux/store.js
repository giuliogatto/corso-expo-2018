import {createStore} from 'redux'

import {addContact} from './actions'
import reducer from './reducer'

const store = createStore(reducer)

store.dispatch(addContact({name: 'zextras', phone: '1234567890'}))
store.dispatch(addContact({name: 'studio storti', phone: '5050505050'}))

console.log(store.getState())

export default store
