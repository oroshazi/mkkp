import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';


import App from './containers/App';
import PartyProgram from './containers/PartyProgram';
import News from './containers/News'

export default () => {
	return (
		<BrowserRouter>
			<Switch>
			  <Route exact path='/' component={App}/>
			  <Route path='/partyprogram' component={PartyProgram}/>
				<Route path='/news' component={News}/>
			</Switch>
		</BrowserRouter>
	)
}
