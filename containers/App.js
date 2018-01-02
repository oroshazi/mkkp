import React, {Component} from 'react';
import {connect}          from 'react-redux';
import {Link, BrowserRouter, Switch, Route} from 'react-router-dom';

import {setMessage}       from '../actions/message';
import DataStore          from '../flux/stores/DataStore.js';

import InputPreview       from '../components/InputPreview';
import HuMap              from '../components/HuMap';
import NavBar             from '../components/NavBar';


import PartyProgram from './PartyProgram';
import News from './News'
import Home from './Home'
import Candidates from './Candidates';


class App extends Component {

  _onChange = (value) => {
    this.props.dispatch(setMessage(value))
  }

  render() {

    let allPages = DataStore.getAll();
    console.log(allPages);

    const {message} = this.props.messageReducer;
    console.log(this.props.children);

    return (<div style={{}}>
      <div style={{

          width: '100%',
          height: '100%',
					backgroundColor:'red'

        }}>

				<BrowserRouter>
					<div>
						<div class="SideContainer" style={{
							height: '100%',
							position: 'fixed',
							float: 'left',
							width: '125px'
						}}>
							<div class="NavBar" style={{paddigTop: '20%'}} >

								<NavBar dark />
							</div>
						</div>

					 	<div style={{
			          marginLeft: '125px',
								float: 'left',
                height: '100%',
                width:'100%'

			        }}>
							<Route exact path='/' component={Home}/>
							<Route path='/partyprogram' component={PartyProgram}/>
							<Route path='/candidates' component={Candidates}/>
							<Route path='/news' component={News}/>
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
