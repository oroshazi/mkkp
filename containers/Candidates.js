import React     from     'react';

import HuMap     from     '../components/HuMap';
import CProfil   from     '../components/CProfil'
import DataStore from     '../flux/stores/DataStore.js'



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


  render(){

      return(

      <div style={{display:'flex', flexDirection: 'row'}} >
        <HuMap callbackFromParent={this.myCallback}/>
        <CProfil callbackFromPrent={this.state.datafromchild}/>
      </div>

    );
        //rowC{display:flex; flex-direction:row;}
  }
}
