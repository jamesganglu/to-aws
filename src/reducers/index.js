import { combineReducers } from 'redux';
import auth from './auth';
import resources from './resources';

const rootReducer = combineReducers({
	auth,
	resources
})

export default rootReducer;