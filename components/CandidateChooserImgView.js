import React                    from 'react';
import {Card, CardImg, CardText,
        CardBody, CardLink, CardTitle,
        CardSubtitle, CardImgOverlay } from 'reactstrap';
import { Container, Row, Col }  from 'reactstrap';
import { Link } from 'react-router-dom';

import DataStore                from '../flux/stores/DataStore';

//{id:10 , city: "Érd",                constituency: "Pest megye I.",  slug:"szecsi-barbara",   coordinates: [18.90454, 47.39197],  candidate: "Szécsi Barbara"},
const cardColor = {
  backgroundColor: '#B82601',
  color: 'white',
  border: 'none'
}
const txtStyle ={
  backgroundColor: 'black',
  color: 'white',
  opacity: '.7'
}

export default class CandidateChooserImgView extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      status: this.props.CandidateProps.status,
      pages: []
    }
  }

  componentDidMount (slug) {
    var postBySlug = DataStore.getPageBySlug(slug)
    console.log('this.state,pages,', this.state.pages);
    return postBySlug;
  }

componentWillMount () {
      let dataURL = "http://juliajogacom.ipage.com/wp-json/wp/v2/pages?_embed&per_page=30";
  fetch(dataURL)
    .then(res => res.json())
    .then(res => {
      this.setState({
        pages: res
      })
    })
}
  render(){

    var status = this.props.CandidateProps.status
    var slug =  (status == 'land') ? this.props.CandidateProps.land[this.props.CandidateProps.candidateId].slug : this.props.CandidateProps.budapest[this.props.CandidateProps.candidateId].slug ;
    console.log('slug', slug);
    var postBySlug = this.componentDidMount(slug);
    var error = DataStore.getPostBySlug('error');
  //  var pagebySlug = DataStore.getPageBySlug(slug)
  console.log("allpages", DataStore.getAllPages());

//    console.log('post by slug: ', postBySlug);

    //  console.log(DataStore.getPageBySlug('savkopo'));


  return (
    <div>

      <div>

        <style>
          {
            `
            .card-img-overlay {
              position: absolute;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              padding: 1.25rem;
            }
            .card {
              display: -ms-flexbox;
              display: flex;
              -ms-flex-direction: column;
              flex-direction: column;
              min-width: 0;
              word-wrap: break-word;
              background-clip: border-box;
              border: unset;
              border-radius: unset;
            }
            a a:hover {
              color: white;
              text-decoration: none; /* no underline */
            }
        `
            }
        </style>
            <Card body inverse style={{}}>
                <CardImg   width= '100px' src={(slug) ? postBySlug._embedded["wp:featuredmedia"][0].source_url :  error._embedded["wp:featuredmedia"][0].source_url} alt="Card image cap" />
                  <Link style={{color:'white'}} to={'/pages/' + slug}>
              <CardImgOverlay style = {{backgroundColor:'rgba(22, 26, 24, 0.3)', height: '100%'}}>
                <div style={{position:'absolute', bottom: '0'}}>
                <CardTitle>{ (status == 'land') ? this.props.CandidateProps.land[this.props.CandidateProps.candidateId].candidate : this.props.CandidateProps.budapest[this.props.CandidateProps.candidateId].candidate} </CardTitle>
                <CardText >
                <Container>
                    <Row>
                      <Col > {(status == 'land') ? this.props.CandidateProps.land[this.props.CandidateProps.candidateId].city : this.props.CandidateProps.budapest[this.props.CandidateProps.candidateId].city}</Col>
                    </Row>
                    <Row>
                      <Col > { (status == 'land') ? this.props.CandidateProps.land[this.props.CandidateProps.candidateId].constituency : this.props.CandidateProps.budapest[this.props.CandidateProps.candidateId].constituency}</Col>
                    </Row>
              </Container>
            </CardText>

                <CardText>
                  <h4  dangerouslySetInnerHTML={{__html: (slug != 'error') ? postBySlug.excerpt.rendered.substring(0, 225) + '...' : 'nincsilyen TBU' }}></h4>
                </CardText>
                  </div>
              </CardImgOverlay>
            </Link>
            </Card>
          </div>




      {/* <Card style={cardColor}>
        <CardBody>
          <CardTitle > <h1> { (status == 'land') ? this.props.CandidateProps.land[this.props.CandidateProps.candidateId].candidate : this.props.CandidateProps.budapest[this.props.CandidateProps.candidateId].candidate} </h1>

                    {/* <h1> {(status == 'land') ? 'IGEEEN' : 'nem :( '} </h1> */}
        {/* </CardTitle>
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
      </Card> */}
    </div>
  );
};
}
