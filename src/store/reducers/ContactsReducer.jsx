const initialState = {
  contacts: [],
  currContact: null
}

export default function ContactReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_CONTACTS':
      return { ...state, contacts: action.contacts }
    case 'SET_CURR_CONTACT':      
    console.log('got hre currContact SET_CURR', action.currContact);
     
    return { 
        ...state, currContact: action.contact 
      
      }
    case 'UPDATE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.map(contact => {
          if (contact._id === action.contact._id) return action.contact;
          return contact;
        })
      }
    case 'DELETE_CONTACT':
      return {
        ...state,
        robots: state.contacts.filter(contact => {
          return contact._id !== action.id
        })
      }
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [...state.contacts, action.contact]
      }
    default:
      return state;
  }
};