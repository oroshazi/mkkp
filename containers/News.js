import React              from 'react';
import { Container,
         Row,
         Col }            from 'reactstrap';

import DataStore          from '../flux/stores/DataStore';


const tagStyle ={
  border: '1px solid rgba(135, 140, 144, 0.83)',
  height:'120px',
  width:'100%',
  paddingRight: '0px',
  paddingReft: '0px'
}
const colStyle = {
  paddingRight: '0px',
  paddingLeft: '0px',
  margin: '2px'

}
const rowStyle = {
  marginLeft: '0',
  marginRight: '0'
}

const newsStyle = {
  height: '100%',
  border: '1px solid rgba(135, 140, 144, 0.83)',
  width:'100%',
  paddingRight: '0px',
  paddingReft: '0px'
}
const excerptStyle = {
  height: '300px',
  border: '1px solid rgba(135, 140, 144, 0.83)',
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

componentDidMount () {
  var allPosts = DataStore.getAllPosts();
  return allPosts;
}
/*allPosts[i]._embedded["wp:featuredmedia"][0].source_url != "" ? allPosts[i]._embedded["wp:featuredmedia"][0].source_url :
  dangerouslySetInnerHTML={{__html: allPosts[i].title.rendered}}*/
  render(){
  var allPosts = this.componentDidMount();
  console.log(allPosts[0].title);
  var postsCol =[];
  for(var i = 0; i< allPosts.length; i++){
    postsCol.push((
        <Col style={colStyle}>
          <div style={{position: 'relative', fontFamily: ' Arial', height:'150px'}}>
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

    return(<div>

      <Container>
        <Row>
          <Col className="tag-bar" style={colStyle} >
            <div style={tagStyle}>
              ide jönnek a teg.ek
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className="title" style={colStyle} >
            <div style={tagStyle}>
              <h1>{allPosts[0].title.rendered}</h1>
            </div>
            <Row style={rowStyle}>

              <Col className="excerpt" style={excerptStyle} >
                <div style={{}} dangerouslySetInnerHTML={{__html: allPosts[0].excerpt.rendered}}>

                </div>
              </Col>

              <Col className="featured-img" style={excerptStyle} >
                <div style={{excerptStyle}}>
                   <img className="img" ref = "sliderimages" src={allPosts[0]._embedded["wp:featuredmedia"][0].source_url} alt={'some text'} />
                </div>
              </Col>
            </Row>


              {postsList}


          </Col>


          <Col className="news-list" style={colStyle}>
            <div style={newsStyle}>
              hírek lista
            </div>
          </Col>

        </Row>
      </Container>

    </div>);
  }


}
