import React              from 'react';
import { Link }           from 'react-router-dom';
import { Container,
         Row,
         Col }            from 'reactstrap';

import Slider             from '../components/Slider';

import DataStore          from '../flux/stores/DataStore';


const divstyle = {
  display: 'inline-block',
  width: '49%'
};
const colStyle = {
  paddingTop: '.75rem',
  paddingBottom: '.75rem',
  border: '3px solid #C9C1D5',
  color: '#5F5F5F'
};

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
            <Col style = {colStyle}>.<img
                style={{maxWidth:'100%', border: '1px'}}
                src={'../src/ResizedImage560305-Promise-logo-Blue.png'}
                onMouseOver= {this.handleMouseOver()}
            />
            </Col>
            <Col>.szöveg a jeleőltekhez szöveg a jeleőltekhez   szöveg a jeleőltekhez</Col>
          </Row>
      </Container>
      <Container>
        <Row>
          <Col>.szöveg a jeleőltekhez szöveg a jeleőltekhez   szöveg a jeleőltekhez</Col>
          <Col style = {colStyle}>.
            <img
              style={{maxWidth:'20%%', border: '1px'}}
              src={'../src/4442.png'}
              onMouseOver= {this.handleMouseOver()}
          />
          </Col>

        </Row>
      </Container>
      <Container>
        <Row >
          <Col style = {colStyle}>.<img
            style={{maxWidth:'100%', border: '1px'}}
            src={'../src/ResizedImage560305-Promise-logo-Blue.png'}
            onMouseOver= {this.handleMouseOver()}
          />
          </Col>
          <Col>.szöveg a jeleőltekhez szöveg a jeleőltekhez   szöveg a jeleőltekhez</Col>
        </Row>
      </Container>

      </div>


    );
  }
}


// <div  <!--style={{marginTop:'200px'}} dangerouslySetInnerHTML={{ __html: hcontent}}> </div>
