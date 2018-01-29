import React 						from 'react';
import {Link} 					from 'react-router-dom';
import { Container,
         Row,
         Col }          from 'reactstrap';
import FontAwesome 			from 'react-fontawesome';


import CProfil 					from '../components/CProfil';
import CList 						from '../components/CList'


const rowStyle = {
	margin: '5px',
  backgroundColor: '#062F4F',
  color: 'white',


	// backgroundColor: 'red'
}
const textBoxStyle = {
  fontSize: '20px',
  display: 'flex',
  alignItems: 'center',
//  justifyContent: 'center',
}

const programs = [
	"Gazdaságpolitika",
	"Egészségügyi program",
	"Biztonságpolitika",
	"Környezetvédelem",
	"Közlekedéspolitika",
	"Általános közjó program",
	"Időjárás politika",
	"Választójogi reform",
	"Ígéretek Angliában dolgozó magyaroknak",
	"Budapesti program",
	"Szegedi program",
	"Látványtervek, látványberuházások",
];

const icons = [
	"money",
	"medkit",
	"shield",
	"envira",
	"rocket",
	"smile-o",
	"sun-o",
	"handshake-o",
	"flag",
	"building",
	"hospital-o",
	"eye"
];

export default class Program extends React.Component {
	render () {
		var programlist = [];
		for (var i = 0; i < programs.length; i++ ){
			programlist.push((
				<Container>
					<Row style={rowStyle}>
						<Col xs="3">
							<FontAwesome style={{color: 'white'}}name={icons[i]} size='5x'/>
						</Col>
						<Col style = {textBoxStyle}>
							{programs[i]}
						</Col>
					</Row>
				</Container>
			))
		}
		return (

			<div >

				{programlist}
		</div>
		)
	}
}
