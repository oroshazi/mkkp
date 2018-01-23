import React              from 'react';
import { Link }           from 'react-router-dom';
import { Container,
         Row,
         Col }            from 'reactstrap';
import FontAwesome 			  from 'react-fontawesome';

import Slider             from '../components/Slider';

import DataStore          from '../flux/stores/DataStore';


const divstyle = {
  display: 'inline-block',
  width: '49%'
};
const colStyle = {
  paddingTop: '.75rem',
  paddingBottom: '.75rem',
  border: '1px solid rgb(88, 92, 70)',
  // color: '#5F5F5F'
};

const imgStyle = {
  fontSize: '200px',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center'
}

export default class Home extends React.Component{

  handleMouseOver(){
    //TODO - + bind.this increase img size
  }

  render(){
    console.log('last three posts: ', DataStore.getLastThreePosts()[0]);
    console.log(DataStore.getPageBySlug('home'));
    var htitle = DataStore.getPageBySlug('home').title.rendered;
    var hcontent = DataStore.getPageBySlug('home').content.rendered;
    return(
      <div>
        <div className='slider' >
          <Slider/>
        </div>

        <Container>
          <Row>
            <Col style = {colStyle}>

              <FontAwesome name='users' size='5x' style={imgStyle}/>

            </Col>
            <Col>.szöveg a jeleőltekhez szöveg a jeleőltekhez   szöveg a jeleőltekhez</Col>
          </Row>
      </Container>
      <Container>
        <Row>
          <Col>.szöveg a jeleőltekhez szöveg a jeleőltekhez   szöveg a jeleőltekhez</Col>
          <Col style = {colStyle}>
            <FontAwesome name='newspaper-o' size='5x' style={imgStyle}/>
          </Col>

        </Row>
      </Container>
      <Container>
        <Row >
          <Col style = {colStyle}>
            <FontAwesome name='tasks' size='5x' style={imgStyle}/>
          </Col>
          <Col>.szöveg a jeleőltekhez szöveg a jeleőltekhez   szöveg a jeleőltekhez</Col>
        </Row>
      </Container>

      </div>


    );
  }
}


// <div  <!--style={{marginTop:'200px'}} dangerouslySetInnerHTML={{ __html: hcontent}}> </div>
