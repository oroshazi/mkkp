import React              from 'react';
import DataStore          from '../flux/stores/DataStore';



export default class Pages extends React.Component {
  constructor(props){
    super(props);

  }


  render() {
    console.log(this.props.match.params.slug);
    var slug = this.props.match.params.slug;
    var  post = DataStore.getPageBySlug(slug)
    console.log(post);
    return(
      <div style={{backgroundColor: 'rgba(68, 123, 167, 0.99)'}}>
        <style>
          {
            `.post-title {
              display: flex;
              align-items: center;
              justify-content: center;
              margin-bottom: 30px;
            }
            .post-content {
              vertical-align: middle;
              border-style: none;
              max-width: 750px;
              margin-left: auto;
              margin-right: auto;
              color: white;
              font-size: 18px;
            }
            img {
              max-width: 700px;
              height: auto;
            }
            iframe {
              max-width: 700px;
            }`
          }
        </style>
        <div style={{marginBottom: '5px'}}>
          <h1
            className= "post-title"
            style={{backgroundColor:'#062F4F', marginTop: '5px', marginBottom:'0px', color: 'white'}} >
            <img src='../src/Magyar_Kétfarkú_Kutyapárt_logó.svg'
            style={{height: '100px', width:'100px', marginRight: '60px', marginLeft:'-120px'}}>
            </img>

             {post.title.rendered}
          </h1>
        </div>
        <div className="post-content">
          <img src={post._embedded["wp:featuredmedia"][0].source_url}/>

        </div>

        <div className="post-content" dangerouslySetInnerHTML={{__html:post.content.rendered}}>

        </div>
      </div>
    );
  }
}
