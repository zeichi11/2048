import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './game/reducers';
import Container from './game/Container';


const rootElement = document.getElementById('container');
const store = createStore(reducers);

ReactDOM.render(
	<Provider store={store}>
		<Container/>
	</Provider>,
	rootElement
);