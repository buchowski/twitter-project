import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers/index';
import { getBootstrappedData } from './services/data-service';
import AppComponent from './containers/app-component';

let store = createStore(reducers);
let bootstrappedData = getBootstrappedData();

store.dispatch({ type: 'BOOTSTRAP', data: bootstrappedData })

render(
	<Provider store={store}>
		<AppComponent />
	</Provider>,
    document.getElementById('root')
);

