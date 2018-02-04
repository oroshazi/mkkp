import React              from 'react';
import { Link }           from 'react-router-dom';
import { Container,
         Row,
         Col }            from 'reactstrap';
import FontAwesome 			  from 'react-fontawesome';

import CandidateFinder    from '../components/CandidateFinder';

import DataStore          from '../flux/stores/DataStore';


const divstyle = {
  display: 'inline-block',
  width: '49%',

};
const colStyle = {
  paddingTop: '.75rem',
  paddingBottom: '.75rem',
  border: '1px solid rgb(88, 92, 70)',
  margin: '10px',
  backgroundColor: '#000000',

};

const imgStyle = {
   fontSize: '200px',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   color: 'white'
}

const arrowStyle = {
  fontSize: '80px',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   color: 'white'
}

const textBoxStyle = {
  backgroundColor:'#062F4F',
  color: 'white',
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
    return(
      <div>
        <div className='slider' >
          <CandidateFinder/>
        </div>

        <Container>
          <Row >
            <Col style = {colStyle}>

              <FontAwesome name='users' size='5x' style={imgStyle}/>

            </Col>
            <Col style={textBoxStyle}>
              <div>
                <FontAwesome name='arrow-circle-left' size='5x' style={arrowStyle}/>
              </div>
              Szeretnél a Kutyapártra szavazni, de nem ismered a körzeted jelöltjét? Ne habozz, itt megtalálhatod!
            </Col>
          </Row>
      </Container>
      <Container>
        <Row >
          <Col style={textBoxStyle}>
            szöveg a jeleőltekhez szöveg a jeleöltekhez   szöveg a jeleőltekhez
            <div>
              <FontAwesome name='arrow-circle-right' size='5x' style={arrowStyle}/>
            </div>
          </Col>
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
          <Col style={textBoxStyle}>
            <div>
              <FontAwesome name='arrow-circle-left' size='5x' style={arrowStyle}/>
            </div>
            .szöveg a jeleőltekhez szöveg a jeleőltekhez   szöveg a jeleőltekhez
          </Col>
        </Row>
      </Container>

      </div>


    );
  }
}


// <div  <!--style={{marginTop:'200px'}} dangerouslySetInnerHTML={{ __html: hcontent}}> </div>
