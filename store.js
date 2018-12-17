import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

const initialState = {
  counter:{
    count:0,
    update:10,
  },
};

const actionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET'
};

// Reducers
const countReducer = (state = initialState, action) => { // state include the current state value.
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {...state, counter:{...state.counter,count:action.count}}
    case actionTypes.DECREMENT:
      return {...state, counter:{...state.counter,count:action.count}}
    case actionTypes.RESET:
      return {...state, counter:initialState.counter}
    default: return state
  }
}

const reducers = combineReducers({
  counter:countReducer, //the key mush be the same as the key of state's key.
});

//Actions
export const incrementCount = (props) => dispatch => {
  return dispatch({ type: actionTypes.INCREMENT, count:props.count })
}
export const decrementCount = (props) => dispatch => {
  return dispatch({ type: actionTypes.DECREMENT, count:props.count })
}
export const resetCount = (props) => dispatch => {
  return dispatch({ type: actionTypes.RESET })
}

export const initializeStore = (initialState = initialState) => {
  return createStore(countReducer, initialState,composeWithDevTools(applyMiddleware(thunkMiddleware)))
}
