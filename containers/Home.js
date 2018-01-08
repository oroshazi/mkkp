import React              from 'react';
import { Link }           from 'react-router-dom';

import Slider             from '../components/Slider';

import DataStore          from '../flux/stores/DataStore';


const divstyle = [{
  display: 'inline-block',
  width: '49%'
}]

export default class Home extends React.Component{

  handleMouseOver(){
    //TODO - + bind.this increase img size
  }

  render(){
    console.log('last three posts: ', DataStore.getLastThreePosts()[0]);
    console.log(DataStore.getPageBySlug('home'));
    var htitle = DataStore.getPageBySlug('home').title.rendered;
    var hcontent = DataStore.getPageBySlug('home').content.rendered;
    return(
      <div>
        <div className='slider' >
          <Slider/>
        </div>
         <div style={{marginTop:'200px'}} dangerouslySetInnerHTML={{ __html: hcontent}}>
        </div>

        <div className='left' style={divstyle} >
          <Link to={'/partyprogram'}>
            <img
             style={{maxWidth:'100%'}}
             src={'../src/ResizedImage560305-Promise-logo-Blue.png'}
             onMouseOver= {this.handleMouseOver()}
            />
          </Link>
          </div>

        <div className='right' style={divstyle} > tekintse meg a kidolgozott politikai programunkat </div>

      </div>


    );
  }
}
