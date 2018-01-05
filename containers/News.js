import React from 'react';

import DataStore from '../flux/stores/DataStore';

import HuMap from '../components/HuMap';

export default class News extends React.Component{

  render(){
    console.log(DataStore.getPageBySlug('news'));
    var htitle = DataStore.getPageBySlug('news').title.rendered;
    var hcontent = DataStore.getPageBySlug('news').content.rendered;
    return(
        <div style={{marginTop:'200px'}} dangerouslySetInnerHTML={{ __html: hcontent}}>

        </div>
    );
  }
}
