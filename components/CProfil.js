import React           from 'react';
import { Card,
         CardImg,
         CardText,
         CardBody,
         CardTitle,
         CardSubtitle,
         Button }      from 'reactstrap';

import DataStore       from '../flux/stores/DataStore.js'
import CModal          from './CModal';



export default class CProfile extends React.Component {
  constructor(){
    super();
    this.state={
      shortDesc: [
        { description: "ez a leírás az első jelölthöz"},
        { description: "ez a leírás az második jelölthöz"},
        { description: "ez a leírás az harmadik jelölthöz"},
        { description: "ez a leírás az negyedik jelölthöz"},
        { description: "ez a leírás az ötödik jelölthöz"},
        { description: "ez a leírás az hatodik jelölthöz"},
        { description: "ez a leírás az hetedik jelölthöz"},
        { description: "ez a leírás az nyolcadik jelölthöz"},
        { description: "ez a leírás az kilencedik jelölthöz"}
      ],

      isOpen: false
    }
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render(){


  if (this.props.callbackFromPrent.id == null) {
    var id = 0;
  }else {
    var id = this.props.callbackFromPrent.id;
  }
    console.log(this.state.isOpen);
    console.log("ez a data megmar a CProfilban van: ",
    this.props.callbackFromPrent.id);
    console.log("ez pont state: ", this.state.shortDesc[0].description );

    console.log(id);
    return(
      <div style={{margin:'60px', padding: '100px'}} >
      <Card style={{width: '200px', height:'400px' }} >
        <CardImg src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle> {this.props.callbackFromPrent.candidate} </CardTitle>
          <CardSubtitle> {this.props.callbackFromPrent.city}</CardSubtitle>
          <CardText> {this.state.shortDesc[id].description}</CardText>

          <CModal show={this.state.isOpen } onClose={this.toggleModal} propsFromProf={this.props}/>
        </CardBody>
      </Card>
    </div>
  );
  }
}

// <Button onClick={this.props.toggleModal}>Button</Button>
