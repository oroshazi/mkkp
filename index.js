import 'bootstrap/dist/css/bootstrap.css';

import React 				from 'react';
import ReactDOM 		from 'react-dom';
import { Provider } from 'react-redux';

// main routes
import AppRoutes 		from './routes';
import App 					from './containers/App';

import store 				from './store';

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('app')
)
