import { combineReducers } from 'redux';
import tweets from './tweets-reducer';
import search from './search-reducer';

export default combineReducers({
	tweets,
	search
});