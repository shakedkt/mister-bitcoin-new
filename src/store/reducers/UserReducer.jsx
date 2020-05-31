const initialState = {
  users: [],
  currUser: null
}

export default function UserReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_USERS':
      return { ...state, users: action.users }
    case 'SET_CURR_USER':
      return { ...state, currUser: action.user }
    case 'UPDATE_USER': 
      return { ...state, currUser: action.user }
    default:
      return state;
  }
};