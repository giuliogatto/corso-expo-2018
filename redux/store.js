import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import {addContact} from './actions'
import reducer from './reducer'

const store = createStore(
		reducer,
        applyMiddleware(thunk))

// argomenti di createStore: un reducer, stato iniziale (che si puo' saltare), middleware
// ritorna un oggetto che definisce lo stato completo dell'applicazione
// MIDDLEWARE e' l'unico modo per cambiare il modo di funzionamento del dispatch

/*
store.dispatch(updateUser({foo: 'foo'}))
store.dispatch(updateUser({bar: 'bar'}))
store.dispatch(updateUser({foo: 'baz'}))
*/

store.dispatch(addContact({name: 'zextras', phone: '1234567890'}))
store.dispatch(addContact({name: 'studio storti', phone: '5050505050'}))

console.log(store.getState())

export default store
