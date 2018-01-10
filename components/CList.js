import React              from 'react';
import { Container,
         Row,
         Col }            from 'reactstrap';
import { Table }          from 'reactstrap';




//TODO: refactoring needed
//TODO: search func

export default class CList extends React.Component {



  render(){
    console.log('this.props.cProps: ', this.props.cProps);

    var candidateList = [];
       for(var i=0;i<this.props.cProps.length;i++){
           candidateList.push(
               (
                 <div style={{ marginLeft: 'auto', marginRight: 'auto', paddingTop:'20px'}}>
                 <Container style={{ border: '3px solid rgba(135, 140, 144, 0.83)', height:'120px', width:'500px'}}>
                   <Row >
                     <Col style={{height:'100px'}}>
                       <div className="profileImg"
                            style={{width:'100px', border: '1px', display: 'inline-block'}} >
                         <img
                           src={'../src/4442.png'} style={{width: '100%', height:'auto'}}/>
                       </div>

                       <div className= "profilDetails" style={{border: '1px', display: 'inline-block', margin: 'auto', verticalAlign:'middle'  }}>
                         <Container className="profileName ">
                           <Row>
                             <Col>
                             <h3> {this.props.cProps[i].candidate.toString()} </h3>
                             </Col>
                           </Row>
                         </Container>
                         <Container className="profileCity ">
                           <Row>
                             <Col>
                             <h5><i> {this.props.cProps[i].city.toString()} </i></h5>
                             </Col>
                           </Row>
                         </Container>
                         <Container className="profileConstituency ">
                           <Row>
                             <Col>
                               <p><i> {this.props.cProps[i].constituency.toString()} </i></p>
                             </Col>
                           </Row>
                         </Container>

                       </div>
                     </Col>

                   </Row>
                 </Container>
                 </div>
               )
           );
       }


    return(
      <div style={{ margin: '0 auto'}}>
        {candidateList}
    </div>
    );

  }



}
