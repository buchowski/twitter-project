import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index';
import { getBootstrappedTweets } from './services/data-service';
import AppContainer from './containers/app-container';
import { setTweets } from './actions/all-actions';

let store = createStore(reducers, applyMiddleware(thunk));
let bootstrappedTweets = getBootstrappedTweets();

store.dispatch(setTweets(bootstrappedTweets));

render(
	<Provider store={ store }>
		<AppContainer />
	</Provider>,
    document.getElementById('root')
);

