import { StorageService } from './StorageService'

const KEY = 'loggedinUser';

let loggedInUser = {
  name: 'shaked',
  coins: 100,
  moves: []
};


function getUser() {
  loggedInUser = StorageService.load(KEY);
  return loggedInUser ? loggedInUser : null;
}


function signUp(userName) {
  console.log('userName', userName);

  loggedInUser = {
    name: userName,
    coins: 100,
    moves: [],
  };
  StorageService.save(KEY, loggedInUser);
  return loggedInUser;
}

function addMove(contact, amount) {
  const newMove = {
    _id: _makeId(),
    toId: contact._id,
    to: contact.name,
    at: Date.now(),
    amount,
  }
  
  loggedInUser.moves.unshift(newMove)
  _updateCoins(amount)
  StorageService.save(KEY, loggedInUser);

  return JSON.parse(JSON.stringify(loggedInUser));
}

function _updateCoins(amount) {
  loggedInUser.coins -= amount
}

export const UserService = {
  getUser,
  signUp,
  addMove
}

function _makeId(length = 10) {
  var txt = ''
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return txt
}