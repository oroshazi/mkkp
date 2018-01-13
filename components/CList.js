import React              from 'react';
import { Container,
         Row,
         Col }            from 'reactstrap';
import { Table }          from 'reactstrap';
import { Button,
         Form,
         FormGroup,
         Label,
         Input,
         FormText }       from 'reactstrap';

//TODO: refactoring needed
//TODO: featured image for candidates
//TODO: onclick event fires modal

export default class CList extends React.Component {
  constructor (props) {
     super(props)
     this.state = {
       searchTerm: ''
     }

     this.searchUpdated = this.searchUpdated.bind(this);
     this.doSearch = this.doSearch.bind(this);
     this.onChange = this.onChange.bind(this);

   }

  render(){
    let pd = document.getElementsByClassName('profilDetails');
    var candidateList = [];
       for(var i=0;i<this.props.cProps.length;i++){
           candidateList.push(
               (
                 <div style={{ marginLeft: 'auto', marginRight: 'auto', marginTop:'20px'}}>
                 <Container className={ `candidate-${ i }` } key={ `candidate-${ i }` } style={{ border: '3px solid rgba(135, 140, 144, 0.83)', height:'120px', width:'500px'}}>
                   <Row >
                     <Col style={{height:'100px'}}>
                       <div className="profileImg"
                            style={{width:'100px', border: '1px', display: 'inline-block'}} >
                         <img
                           src={'../src/4442.png'} style={{width: '100%', height:'auto'}}/>
                       </div>
                       <div className= "profilDetails" ref = "profilDetails" style={{border: '1px', display: 'inline-block', margin: 'auto', verticalAlign:'middle'  }}>
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
      <div>
        <Form>
          <FormGroup>
            <Label for="exampleEmail">placeholder</Label>
            <Input
              className="input-field"
              type="text"
              name="search"
              id="searchfield"
              placeholder="Keresés..."
              onChange={(e) => this.onChange(e)}
            />

          </FormGroup>
        </Form>
        <div style={{ margin: '0 auto'}}>
          {candidateList}
        </div>
    </div>
    );

  }

  onChange (event) {
    this.searchUpdated(event);
  }


  searchUpdated (term) {
    this.setState({searchTerm: term.target.value}, () => {
      this.doSearch();
    });
  }

  doSearch () {
    var length = document.getElementsByClassName('profilDetails').length;
    var item = document.getElementsByClassName('profilDetails');
    var query = this.state.searchTerm
    for (var i = 0; i < length; i++){
        if (item[i].innerText.toUpperCase().indexOf(query.toUpperCase()) > -1){
          document.getElementsByClassName(`candidate-${ i }`)[0].style.display = "block";
        } else {
          document.getElementsByClassName( `candidate-${ i }` )[0].style.display = 'none';
        }
    }
  }

  componentDidMount (){
  }
}
