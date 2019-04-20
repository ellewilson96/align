import { combineReducers } from "redux";

const rootReducer = combineReducers({
  apod: apodReducer,
});

function apodReducer(state = [], action){
  switch (action.type) {
    case 'ADD_APOD':
    return action.apod;
    default:
    return state;
  }
}

export default rootReducer;
