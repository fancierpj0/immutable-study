import {Map} from 'immutable';

function combineReducers(reducers) {
  return function(state=Map({}),action) {
    let newState = Map({});

    for (let key in reducers) {
      newState = newState.set(key,reducers[key](state.get(key),action));
    }

    return newState;
  };
}

export default combineReducers;
