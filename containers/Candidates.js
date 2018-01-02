import React     from     'react';

import HuMap     from     '../components/HuMap';
import CProfil   from     '../components/CProfil'
import DataStore from '../flux/stores/DataStore.js'



export default class Candidates extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      datafromchild: "helo",
      posts: []
    };
  }
  myCallback = (dataFromChild) => {
        this.setState({ datafromchild: dataFromChild });
    }

    componentDidMount(){
      let dataURL = "http://local.wordpress.test/wp-json/wp/v2/posts";
      fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        this.setState(
          posts: res
        )})
      }

  render(){

    console.log('poszt: ', this.state.posts );
    let allPages = DataStore.getAll();

    console.log('Data store tőlem: ', DataStore);
    console.log('all pages: ', DataStore.getAllPosts());

    console.log("információ a gyerektől: ", this.state.datafromchild);
    return(

      <div style={{display:'flex', flexDirection: 'row'}} >
        <HuMap callbackFromParent={this.myCallback}/>
        <CProfil callbackFromPrent={this.state.datafromchild}/>
      </div>

    );
        //rowC{display:flex; flex-direction:row;}
  }
}
