import React from 'react';
import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, CardImgOverlay } from 'reactstrap';
import { Container, Row, Col }    from 'reactstrap';
import DataStore from '../flux/stores/DataStore';

//{id:10 , city: "Érd",                constituency: "Pest megye I.",  slug:"szecsi-barbara",   coordinates: [18.90454, 47.39197],  candidate: "Szécsi Barbara"},
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
    var postBySlug = DataStore.getPageBySlug(slug)
    return postBySlug;
  }

  render(){

    var slug =  (this.props.CandidateProps.candidateId) ? this.props.CandidateProps.cities[this.props.CandidateProps.candidateId].slug : 'error';
    console.log("################################", slug);
    console.log((this.props.CandidateProps.candidateId) ? this.props.CandidateProps.cities[this.props.CandidateProps.candidateId].slug : 'error');
    var postBySlug = this.componentDidMount(slug);
    var error = DataStore.getPostBySlug('error');

      var pagebySlug = DataStore.getPageBySlug(slug)
      console.log('XXXXXXXXXXXXXXXXXXXXXXX', pagebySlug);
      console.log('cccccccccccccccccccccccccccccccccc', this.props.CandidateProps.candidateId);

  return (
    <div>
      <Card style={cardColor}>
        <CardBody>
          <CardTitle>{this.props.CandidateProps.cities[this.props.CandidateProps .candidateId].candidate }</CardTitle>
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
