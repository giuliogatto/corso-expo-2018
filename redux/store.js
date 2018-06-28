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
// MIDDLEWARE: in express per esempio e' un layer di business logic (funzioni) che viene applicata ad ogni REQUEST
// un middleware viene in pratica INIETTATO nella logica, come un blocco indipendente che agisce in qualche modo sui dati in un certo momento
// IN REDUX un middleware permette di iniettare della logica custom al DISPATCH di una ACTION, prima che raggiunga il REDUCER

/*
store.dispatch(updateUser({foo: 'foo'}))
store.dispatch(updateUser({bar: 'bar'}))
store.dispatch(updateUser({foo: 'baz'}))
*/

store.dispatch(addContact({name: 'zextras', phone: '1234567890'}))
store.dispatch(addContact({name: 'studio storti', phone: '5050505050'}))

console.log(store.getState())

export default store
