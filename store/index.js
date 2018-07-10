import {createStore, combineReducers} from 'redux';
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


function combineReducers(reducers){
  return function(state=Map({}),action){
    let newState = Map({});
    for(let key in reducers){
      newState = newState.set(key, reducers[key](state.get(key), action));
    }
    return newState;
  }
}


class ConnectedRouter extends Component{
  static childContext = {
    store: PropTypes.object
  };

  componentWillMount(){
    this.store =this.context.store
  }

  render(){
    return <Router {...this.props}/>
  }
}


function push(pathname){
  return {
    type
  }
}

let initRouterState = {location: {}};

function routerReducer(state,action){
  return state;
}

function routerMiddleware(history){
  return function(getState,dispatch){
    return function(next){
      return function(action){
        if(action.type === CHANGE_LOCATION){
          history.push(action.pathname);
        }else{
          next(action)
        }
      }
    }
  }
}
