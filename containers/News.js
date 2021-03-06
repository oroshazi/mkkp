import React              from 'react';
import { Container,
         Row,
         Col }            from 'reactstrap';
import { Link }           from 'react-router-dom';

import DataStore          from '../flux/stores/DataStore';
import Slider             from '../components/Slider';


const tagStyle ={

  width:'100%',
  paddingRight: '0px',
  paddingReft: '0px'
}
const titleStyle = {
   minHeight:'60px',
  // width:'100%',
  // paddingRight: '0px',
  // paddingReft: '0px',
  // textAlign: 'center'
  marginTop: '5px',
  marginBottom:'5px',
  color: 'white',
  borderBottom: '3px solid grey'
}

const colStyle = {
  paddingRight: '0px',
  paddingLeft: '0px',
  margin: '2px',
  // borderStyle:'solid',
  // borderRadius: '20px',
  overflow: 'hidden',
  // border: '10px solid #062F4F'
  //height: '200px'
}

const rowStyle = {
  marginLeft: '0',
  marginRight: '0',
  //backgroundColor:'#062F4F',
  marginTop: '5px',
  marginBottom:'5px'
}

const newsStyle = {
  marginTop:'50px',
  height: '100%',
  width:'100px',
  paddingRight: '0px',
  paddingReft: '0px',

}
const excerptStyle = {
  fontSize: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'black'

  // height: '300px',
  // width:'100%',
  // paddingRight: '0px',
  // paddingReft: '0px',
  // overflow: 'hidden',
  // marginTop: '30px',
  // textAlign: 'center',
  // verticalAlign: 'inherit'


}
const featuredStyle = {
  // height: '300px',
  // width:'100%',
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

const postContainerStyle = {
    backgroundColor:'#062F4F',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: 'auto',
    height:'200px',
    border: '5px solid #062F4F'
  }

const oddStyle = {
  //fontSize: '200px',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   color: 'white'
}

export default class News extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      link: ""
    }

    this.handleClick = this.handleClick.bind(this);
  }

componentDidMount () {
  var allPosts = DataStore.getAllPosts();
  return allPosts;
}

render(){
  var allPosts = this.componentDidMount();
  var slugs= [];
  for(var i = 0; i< allPosts.length; i++){
    slugs.push((allPosts[i].slug))
  }
console.log('allposts:   ', allPosts);
//{position: 'relative', height:'150px', border: '3px solid rgb(17, 22, 6)'}
  var postsCol =[];
  for(var i = 0; i< allPosts.length; i++){
    postsCol.push((

        <Col style={colStyle}>
          <Link to={'/posts/' + slugs[i]}>
          <div style={ postContainerStyle }
            id = {i}
            onClick={(e) => this.handleClick(slugs, e)}
            >
            <div className="myitem">
            <img
              ref = "sliderimages"
              src={(allPosts[i]._embedded["wp:featuredmedia"]) ? allPosts[i]._embedded["wp:featuredmedia"][0].source_url :  'ninskép'}
              alt={'some text'}
            />
          </div>
          <div style={textStyle}>
            <p>{allPosts[i].title.rendered}</p>
          </div>

          </div>
          </Link>
        </Col>

    ));
    console.log('kép:   ', (allPosts[i]._embedded["wp:featuredmedia"]) ? allPosts[i]._embedded["wp:featuredmedia"][0].source_url :  'ninskép');
    console.log('slug', slugs);
  }

  var postsList = [];
  for(var i = 1; i < allPosts.length; i++){
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
        <Link to={'/posts/' + slugs[i]}>
      <div className='side-posts' >
      <li id = {i}
        onClick={(e) => this.handleClick(slugs, e)}
        style={{color: 'white'}}
        >

          {allPosts[i].title.rendered}

        </li>
      </div>
  </Link>
  ));
  console.log('link: ', this.state.link);
  }

    return(<div>
      <style>

      </style>

      <Container>
        <Row>
          <Col className="tag-bar" style={colStyle} >
            <div style={tagStyle}>
              <Slider/>
            </div>
          </Col>
        </Row>
      </Container>
      <Container style = {{backgroundColor: '#062F4F'}} >
        <Row>

          <Col className="title" style={colStyle} >
            <div style={{maxWidth:'750px'}}>
            <Link to={'/posts/' + slugs[0]}>
            <div style={titleStyle}>

              <h1
                id = {0}
                onClick={(e) => this.handleClick(slugs, e )}
                >
                {allPosts[0].title.rendered}
              </h1>
            </div>
          </Link>
          <div style = {{borderBottom: '3px solid grey'}}>
            <Row style={rowStyle}
              id = {0}
              onClick={(e) => this.handleClick(slugs, e )}>

              <Col className="excerpt" style={colStyle} >
                <Link to={'/posts/' + slugs[0]}>
                <div
                  style={excerptStyle}
                  slug = {allPosts[0].slug}

                  dangerouslySetInnerHTML={{__html: allPosts[0].excerpt.rendered}}
                  >

                </div>
              </Link>
              </Col>

              <Col className="featured-img" style={colStyle} >
                <Link to={'/posts/' + slugs[0]}>
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
              </Link>
              </Col>
            </Row>
            </div>
            <style>
              {
                `
              .myitem {
                position: relative;
                min-height: 100%;
                overflow: hidden;
                min-width: 100%;
                transition: all 0.3s;
                backgroundColor:'#062F4F',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                width: 'auto'
              }
              .myitem img {
                min-width: 100%;
                min-height: 100%;
                -moz-transition: all 0.3s;
                -webkit-transition: all 0.3s;
                transition: all 0.3s;
              }
              .myitem:hover img {
                -moz-transform: scale(1.1);
                -webkit-transform: scale(1.1);
                transform: scale(1.1);
              }
              a:hover {
                color: none;
                text-decoration: none; /* no underline */
              }`
                }
            </style>

              {postsList}

            </div>
          </Col>


          <Col className="news-list" xs="3" style={colStyle}>
            <style>
              {
                `.side-posts {
                  border-top: 1px solid rgba(135, 140, 144, 0.83);
                  padding: 14px 25px;
                  text-align: left;
                  text-decoration: none;
                  display: inline-block;
                  width: 100%;
                  font-weight: 900;

                }
                .side-posts:hover {
                    background-color: red;
                }
                .side-posts li {
                  list-style-type: none;
                  color: rgb(32, 24, 24);
                }
                .side-posts:hover li {
                  list-style-type: none;
                  color: white;
                }`
              }
            </style>
            <div style={newsStyle}>
              <ul style = {{position: 'absolute', right: '0', }}>
                  {newsList}
              </ul>
            </div>
          </Col>

        </Row>
      </Container>

    </div>);
  }


  handleClick(slug, e) {
    var sublink = slug[e.currentTarget.id];
  }
}
