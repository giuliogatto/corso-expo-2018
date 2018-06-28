// action types
export const UPDATE_USER = 'UPDATE_USER'
export const UPDATE_CONTACT = 'UPDATE_CONTACT'

// action creators
export const updateUser = update => ({
  type: UPDATE_USER,
  payload: update,
})

export const addContact = newContact => ({
  type: UPDATE_CONTACT,
  payload: newContact,
})


// esempio di THUNK: un thunk e' una funzione che ritorna un altra funzione da eseguire in un secondo momento
// le ACTIONS PRECEDENTI RITORNANO UN OGGETTO (tramite arrow function)
// in redux un thunk e' una ACTION che ritorna una funzione e che quindi permette di 'SPORCARE' quelle che in teoria dovrebbero
// essere FUNZIONI PURE (senza side effects). Una thunk puo' avere anche un secondo argomento oltre a 'dispatch', 'getState'
// per accedere allo state ( https://daveceddia.com/what-is-a-thunk/)
export function itemsFetch(url) {
    return (dispatch) => {
        
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                
                return response;
            })
            .then((response) => { return response.json();})
            .then((items) => dispatch(addContact(items[0])))
            .catch(() => console.log('error')); 
    };
}
