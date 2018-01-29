import React from 'react';
import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, CardImgOverlay } from 'reactstrap';
import { Container, Row, Col }    from 'reactstrap';
import DataStore from '../flux/stores/DataStore';


const cardColor = {
  backgroundColor: '#B82601',
  color: 'white',
  border: 'none'
}

export default class CandidateChooserImgView extends React.Component {
  constructor(props){
    super(props);
    this.state = {


    }
  }

  componentDidMount (slug) {
    var postBySlug = DataStore.getPostBySlug(slug)
    return postBySlug;
  }

  render(){

    var slug =  this.props.CandidateProps.cities[this.props.CandidateProps.candidateId].slug;
    var postBySlug = this.componentDidMount(slug);
    console.log(" paosdpapsdpoapsodpoapsodpaospdoapsodp:     ", postBySlug);
    console.log('this.props.CandidateProps.candidateId', this.props.CandidateProps.candidateId);
    console.log(this.props.CandidateProps.cities[this.props.CandidateProps.candidateId].slug);
    var error = DataStore.getPostBySlug('error');

  return (
    // <div >
    //   <Card  >
    //     <CardImg width="100%" height='100%'  src={(slug) ? postBySlug._embedded["wp:featuredmedia"][0].source_url :  error._embedded["wp:featuredmedia"][0].source_url} alt="Card image cap" />
    //     <CardImgOverlay>
    //       <CardTitle> {this.props.CandidateProps.cities[this.props.CandidateProps.candidateId].candidate } </CardTitle>
    //       <CardText   dangerouslySetInnerHTML={{__html: (slug) ? postBySlug.excerpt.rendered.substring(0, 225) + '...' : 'nincsilyen TBU' }}></CardText>
    //       <CardText>
    //         <small className="text-muted">
    //           <Container>
    //               <Row>
    //                 <Col > { this.props.CandidateProps.cities[this.props.CandidateProps.candidateId].city  }</Col>
    //               </Row>
    //               <Row>
    //                 <Col > { this.props.CandidateProps.cities[this.props.CandidateProps.candidateId].constituency }</Col>
    //               </Row>
    //         </Container>
    //
    //         </small>
    //       </CardText>
    //     </CardImgOverlay>
    //   </Card>
    // </div>

    <div>
      <Card style={cardColor}>
        <CardBody>
          <CardTitle>{this.props.CandidateProps.cities[this.props.CandidateProps.candidateId].candidate }</CardTitle>
          <CardSubtitle>
            <Container>
                <Row>
                  <Col > { this.props.CandidateProps.cities[this.props.CandidateProps.candidateId].city  }</Col>
                </Row>
                <Row>
                  <Col > { this.props.CandidateProps.cities[this.props.CandidateProps.candidateId].constituency }</Col>
                </Row>
          </Container>
          </CardSubtitle>
        </CardBody>
        <img width="100%" src={(slug) ? postBySlug._embedded["wp:featuredmedia"][0].source_url :  error._embedded["wp:featuredmedia"][0].source_url} alt="Card image cap" />
        <CardBody>
          <CardText dangerouslySetInnerHTML={{__html: (slug) ? postBySlug.excerpt.rendered.substring(0, 225) + '...' : 'nincsilyen TBU' }}></CardText>
        </CardBody>
      </Card>
    </div>
  );
};
}
