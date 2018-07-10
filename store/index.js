// import {createStore, combineReducers} from 'redux';
import {createStore} from 'redux';
import {combineReducers} from 'redux-immutable';
import {Map} from 'immutable';

let initState = Map({number: 0});

function counter(state = initState, action) {
  switch (action.type) {
    case 'ADD':
      return state.update('number', val => val + action.payload);
    default:
      return state;
  }
}

let reducers = combineReducers({
  counter
});

let store = createStore(reducers);
export default store;
