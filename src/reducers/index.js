import { combineReducers } from "redux";

const rootReducer = combineReducers({
  apod: apodReducer,
  earth: earthReducer,
});

function apodReducer(state = [], action){
  switch (action.type) {
    case 'ADD_APOD':
    return action.apod;
    default:
    return state;
  }
}

function earthReducer(state = [], action){
  switch (action.type) {
    case 'ADD_EARTH':
    return action.image;
    default:
    return state;
  }
}

export default rootReducer;
