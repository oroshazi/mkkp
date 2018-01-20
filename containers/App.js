import React, {Component} from 'react';
import {connect}          from 'react-redux';
import {Link, BrowserRouter, Switch, Route} from 'react-router-dom';

import {setMessage}       from '../actions/message';
import DataStore          from '../flux/stores/DataStore.js';

import InputPreview       from '../components/InputPreview';
import HuMap              from '../components/HuMap';
import NavBar             from '../components/NavBar';


import PartyProgram       from './PartyProgram';
import News               from './News'
import Home               from './Home'
import Candidates         from './Candidates';
import Posts              from './Posts';


class App extends Component {

  _onChange = (value) => {
    this.props.dispatch(setMessage(value))
  }

  render() {

    let allPages = DataStore.getAll();
    console.log('app.js: ', DataStore);

    const {message} = this.props.messageReducer;
    console.log(this.props.children);

    return (<div style={{}}>
      <div style={{
          backgroundColor: 'rgba(54, 41, 41, 0.75)',
          width: '100%',
          height: '100%'

        }}>

				<BrowserRouter>
					<div>
						<div class="SideContainer" style={{
							height: '40px',
							position: 'fixed',
							float: 'top',
							width: '100%',
              overflow: 'hidden',
              backgroundColor: 'rgba(58, 69, 102, 1)',
              zIndex: '1'

						}}>
							<div class="NavBar" style={{}} >
								<NavBar />
							</div>
						</div>

					 	<div style={{
			          margin: '0 auto',
                paddingTop: '40px',
								height: '100%',
                backgroundColor: 'rgba(251, 249, 249, 0.87)',
                width:'960px'

			        }}>
							<Route exact path='/' component={Home}/>
							<Route path='/partyprogram' component={PartyProgram}/>
							<Route path='/candidates' component={Candidates}/>
							<Route path='/news' component={News}/>
              <Route path='/posts/:slug' component={Posts}/>
						</div>
					</div>
		</BrowserRouter>
      </div>

      <div style={{}}>
        {this.props.children}
      </div>
    </div>)
  }
}

export default connect(state => state)(App);
