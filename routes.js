import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';


import App from './containers/App';
import Program from './containers/Program';
import News from './containers/News'

export default () => {
	return (
		<BrowserRouter>
			<Switch>
			  <Route exact path='/' component={App}/>
			  <Route path='/program' component={Program}/>
				<Route path='/news' component={News}/>
			</Switch>
		</BrowserRouter>
	)
}
