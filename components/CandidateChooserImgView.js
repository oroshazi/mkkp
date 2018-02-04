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
      status: this.props.CandidateProps.status
    }
  }

  componentDidMount (slug) {
    var postBySlug = DataStore.getPageBySlug(slug)
    return postBySlug;
  }


  render(){

    var status = this.props.CandidateProps.status
    var slug =  (status == 'land') ? this.props.CandidateProps.land[this.props.CandidateProps.candidateId].slug : this.props.CandidateProps.budapest[this.props.CandidateProps.candidateId].slug ;
    console.log('slug', slug);
    var postBySlug = this.componentDidMount(slug);
    var error = DataStore.getPostBySlug('error');
  //  var pagebySlug = DataStore.getPageBySlug(slug)


//    console.log('post by slug: ', postBySlug);

    //  console.log(DataStore.getPageBySlug('savkopo'));


  return (
    <div>

      {/* <div>
            <Card >
                <CardImg   width= '100px' src={(slug) ? postBySlug._embedded["wp:featuredmedia"][0].source_url :  error._embedded["wp:featuredmedia"][0].source_url} alt="Card image cap" />
              <CardImgOverlay>
                <CardTitle>{() => changeCardTitle()  }</CardTitle>
                <CardText>
                  <Container>
                    <Row>
                      <Col > { this.props.CandidateProps.cities[this.props.CandidateProps.candidateId].city  }</Col>
                    </Row>
                    <Row>
                      <Col > { this.props.CandidateProps.cities[this.props.CandidateProps.candidateId].constituency }</Col>
                    </Row>
              </Container>
            </CardText>
                <CardText>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </CardText>
              </CardImgOverlay>
            </Card>
          </div>
 */}



      <Card style={cardColor}>
        <CardBody>
          <CardTitle > <h1> { (status == 'land') ? this.props.CandidateProps.land[this.props.CandidateProps.candidateId].candidate : this.props.CandidateProps.budapest[this.props.CandidateProps.candidateId].candidate} </h1>

                    {/* <h1> {(status == 'land') ? 'IGEEEN' : 'nem :( '} </h1> */}
        </CardTitle>
          <CardSubtitle>
            <Container>
                <Row>
                  <Col > {(status == 'land') ? this.props.CandidateProps.land[this.props.CandidateProps.candidateId].city : this.props.CandidateProps.budapest[this.props.CandidateProps.candidateId].city}</Col>
                </Row>
                <Row>
                  <Col > { (status == 'land') ? this.props.CandidateProps.land[this.props.CandidateProps.candidateId].constituency : this.props.CandidateProps.budapest[this.props.CandidateProps.candidateId].constituency}</Col>
                </Row>
          </Container>
          </CardSubtitle>
        </CardBody>
        <img width="100%" src={(slug != 'error') ? postBySlug._embedded["wp:featuredmedia"][0].source_url :  'hiba'} alt="Card image cap" />
        <CardBody>
          <CardText dangerouslySetInnerHTML={{__html: (slug != 'error') ? postBySlug.excerpt.rendered.substring(0, 225) + '...' : 'nincsilyen TBU' }}></CardText>
        </CardBody>
      </Card>
    </div>
  );
};
}
