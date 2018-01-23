import React              from 'react';
import DataStore          from '../flux/stores/DataStore';



export default class Posts extends React.Component {
  constructor(props){
    super(props);

  }


  render() {
    console.log(this.props.match.params.slug);
    var slug = this.props.match.params.slug;
    var  post = DataStore.getPostBySlug(slug)
    console.log(post);
    return(
      <div>
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
              max-width: 700px;
              margin-left: auto;
              margin-right: auto;
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
        <h1 className= "post-title" >{post.title.rendered}</h1>
        <div className="post-content" dangerouslySetInnerHTML={{__html:post.content.rendered}}>

        </div>
      </div>
    );
  }
}
