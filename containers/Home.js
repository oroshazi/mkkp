import React              from 'react';

import Slider             from '../components/Slider';

import DataStore          from '../flux/stores/DataStore';

export default class Home extends React.Component{

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

      </div>


    );
  }
}
