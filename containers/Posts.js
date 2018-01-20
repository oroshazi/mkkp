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
        <h1>{post.title.rendered}</h1>
        <div dangerouslySetInnerHTML={{__html:post.content.rendered}}>

        </div>
      </div>
    );
  }
}
