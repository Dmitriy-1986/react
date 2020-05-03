import {combineReducers} from 'redux';
import usersReducer from './usersReducer';


const appReducer = combineReducers({
    usersReducer, // in this place you should add each new reducer
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;