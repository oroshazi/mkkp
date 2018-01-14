import React              from 'react';
import { Container,
         Row,
         Col }            from 'reactstrap';

import DataStore          from '../flux/stores/DataStore';
import Slider             from '../components/Slider';


const tagStyle ={

  width:'100%',
  paddingRight: '0px',
  paddingReft: '0px'
}
const titleStyle = {
  height:'60px',
  width:'100%',
  paddingRight: '0px',
  paddingReft: '0px',
  textAlign: 'center'
}

const colStyle = {
  paddingRight: '0px',
  paddingLeft: '0px',
  margin: '2px',
  borderStyle:'solid',
  borderRadius: '20px',
  overflow: 'hidden'



}
const rowStyle = {
  marginLeft: '0',
  marginRight: '0'
}

const newsStyle = {
  height: '100%',
  width:'100px',
  paddingRight: '0px',
  paddingReft: '0px',

}
const excerptStyle = {
  height: '300px',
  width:'100%',
  paddingRight: '0px',
  paddingReft: '0px',
  overflow: 'hidden',
  marginTop: '30px',
  textAlign: 'center',
  verticalAlign: 'inherit'


}
const featuredStyle = {
  height: '300px',
  width:'100%',
  paddingRight: '0px',
  paddingReft: '0px',
  marginLeft: 'auto',
  marginRight: 'auto',
  overflow: 'hidden'
}

const textStyle = {
    position: 'absolute',
    bottom: '20px',
    right: '20px',
    backgroundColor: 'black',
    color: 'white',
    paddingLeft: '20px',
    paddingRight: '20px'
}

export default class News extends React.Component{
  constructor(props) {
    super(props);

    this.handleclick = this.handleclick.bind(this);
  }

componentDidMount () {
  var allPosts = DataStore.getAllPosts();
  return allPosts;
}

  render(){
  var allPosts = this.componentDidMount();
  console.log(allPosts[0].title);
  var postsCol =[];
  for(var i = 0; i< allPosts.length; i++){
    postsCol.push((
        <Col style={colStyle}>
          <div style={{position: 'relative', height:'150px'}}>
            <img
              style={{height: '100%', width:'100%'}}
              className="grad"
              ref = "sliderimages"
              src={(allPosts[i]._embedded["wp:featuredmedia"]) ? allPosts[i]._embedded["wp:featuredmedia"][0].source_url :  'ninskép'}
              alt={'some text'}
            />

          <div style={textStyle}>
            <p>{allPosts[i].title.rendered}</p>
          </div>

          </div>
        </Col>
    ));
    console.log('kép:   ', (allPosts[i]._embedded["wp:featuredmedia"]) ? allPosts[i]._embedded["wp:featuredmedia"][0].source_url :  'ninskép');
  }

  var postsList = [];
  for(var i = 0; i < allPosts.length; i++){
    postsList.push((
      <Row style = {rowStyle}>
        {postsCol[i++]}
        {postsCol[i++]}
        {postsCol[i]}
      </Row>
    ));
  }

  var newsList = [];
  for (var i = 0; i < allPosts.length; i ++) {
    newsList.push((
      <li data={allPosts[i]} onClick={ (e) => this.handleclick(e)}>{allPosts[i].title.rendered}</li>
  ));
  console.log('newsList: ', allPosts[i]);
  }

    return(<div>

      <Container>
        <Row>
          <Col className="tag-bar" style={colStyle} >
            <div style={tagStyle}>
              <Slider/>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>

          <Col className="title" style={colStyle} >
            <div style={{maxWidth:'750px'}}>
            <div style={titleStyle}>
              <h1>{allPosts[0].title.rendered}</h1>
            </div>
            <Row style={rowStyle}>

              <Col className="excerpt" style={colStyle} >
                <div style={excerptStyle} dangerouslySetInnerHTML={{__html: allPosts[0].excerpt.rendered}}>

                </div>
              </Col>

              <Col className="featured-img" style={colStyle} onClick={(e) => this.handleclick(e)} >
                <style>
                  {
                    `.more-link {
                      display:none;
                    }
                    .img {
                      vertical-align: middle;
                      border-style: none;
                      max-width: 350px;
                    }`
                  }
                </style>
                <div style={{featuredStyle}}>
                   <img className="img" ref = "sliderimages" src={allPosts[0]._embedded["wp:featuredmedia"][0].source_url} alt={'some text'} />
                </div>
              </Col>
            </Row>


              {postsList}

            </div>
          </Col>


          <Col className="news-list" xs="3" style={colStyle}>
            <div style={{newsStyle}}>

              <ul>
                  {newsList}
              </ul>



            </div>
          </Col>

        </Row>
      </Container>

    </div>);
  }

  handleclick (e) {
    console.log('e.target: ', e.target.data);
    console.log('this.state: ', this.state);

  }
}
