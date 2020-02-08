import { combineReducers } from 'redux';
import UserReducer from './reducer-user';
import ActiveUserReducer from './reducer-active-users';
import TodoReducer from './reducer-todo';



const allReducers = combineReducers({
    users: UserReducer,
    activeUser: ActiveUserReducer,
    todo: TodoReducer,
});

export default allReducers;

