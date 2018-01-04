import React              from 'react';

import DataStore          from '../flux/stores/DataStore';

export default class Home extends React.Component{

  render(){
    console.log(DataStore.getPageBySlug('home'));
    var htitle = DataStore.getPageBySlug('home').title.rendered;
    var hcontent = DataStore.getPageBySlug('home').content.rendered.replace(/(<([^>]+)>)/ig,"");;
    return(
        <div style={{marginTop:'200px'}}>
          <h1>{DataStore.getPageBySlug('home').title.rendered}</h1>
          {hcontent}
        </div>

    );
  }
}
