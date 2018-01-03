import 'bootstrap/dist/css/bootstrap.css';

import React 				from 'react';
import ReactDOM 		from 'react-dom';
import { Provider } from 'react-redux';

import DataActions 	from './flux/actions/DataActions';

// main routes
import AppRoutes 		from './routes';
import App 					from './containers/App';

import store 				from './store';



class AppInitializer {
    run() {
				DataActions.getPages((response)=>{
						ReactDOM.render(
								<Provider store={store}>
									<App />
								</Provider>,
								document.getElementById('app')
							);
						});
					}
				}

	new AppInitializer().run();
