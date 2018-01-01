import React     from     'react';

import HuMap     from     '../components/HuMap';
import CProfil   from     '../components/CProfil'



export default class Candidates extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      datafromchild: "helo"
    };
  }
  myCallback = (dataFromChild) => {
        this.setState({ datafromchild: dataFromChild });
    }

  render(){
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
