import {UserService} from '../services/UserService'

export function loadUserByName() {
    return async dispatch => {
      const user = await UserService.getUser();
      dispatch({ type: 'SET_CURR_USER', user })
    }
  }

  export function addMove(contact, amount) {    
    return async dispatch => {  
      const user = await UserService.addMove(contact, amount);
      dispatch({ type: 'UPDATE_USER', user })
    }
  }

  export function saveUser(user) {
    return async dispatch => {
      const isEdit = !!user.name 
      user = await UserService.saveUser();
  
      if (isEdit) dispatch({ type: 'UPDATE_USER', user })
      else dispatch({ type: 'ADD_USER', user })
      return user;
    }
  }