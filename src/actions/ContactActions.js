import  ContactService  from '../services/ContactService'

// LIST
export function loadContacts(filterBy) {
  return async dispatch => {
    const contacts = await ContactService.getContacts(filterBy);
    dispatch({ type: 'SET_CONTACTS', contacts })
  }
}

// READ
export function loadContactById(id) {
  return async dispatch => {
    const contact = await ContactService.getContactById(id);
    dispatch({ type: 'SET_CURR_CONTACT', contact })
  }
}

// UPDATE + CREATE
export function saveContact(contact) {
  return async dispatch => {
    const isEdit = !!contact._id 
    contact = await ContactService.saveContact(contact);

    if (isEdit) dispatch({ type: 'UPDATE_CONTACT', contact })
    else dispatch({ type: 'ADD_CONTACT', contact })
    return contact;
  }
}

// REMOVE

export function deleteContact(id) {
  return async dispatch => {
    await ContactService.deleteContact(id);
    dispatch({ type: 'DELETE_CONTACT', id })
  }
}
