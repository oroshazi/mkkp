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
import   FontAwesome 			from 'react-fontawesome';


//TODO: refactoring needed
//TODO: featured image for candidates
//TODO: onclick event fires modal


const textBoxStyle = {
  fontSize: '20px',
  display: 'flex',
  alignItems: 'center',
//  justifyContent: 'center',
}

const rowStyle = {
	margin: '5px',
  backgroundColor: '#813772',
  color: 'white',
	// backgroundColor: 'red'
}

const middleTextStyle = {
  fontSize: '20px',
  display: 'flex',
  alignItems: 'center',
}


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
                 <div>
                   <style>
                     {
                       `
                         .candidate-${ i }:hover {
                             background-color: #813772;
                             border: 3px solid #062F4F;
                         }

                       `
                     }
                   </style>
                 <Container
                   className={ `candidate-${ i }` }
                   key={ `candidate-${ i }` }
                   style={{}}>
                   <Row id={ `container-row-${ i }` } style={rowStyle} >
                     <Col xs="3" style={{height:'100px'}}>
                        <FontAwesome style={{display: 'flex',justifyContent: 'center',}} name='user' size='5x'/>
                      </Col>
                     <Col style={textBoxStyle}>
                       <div className= "profilDetails" ref = "profilDetails" >
                          <Row >
                             <Col >
                             <h3> {this.props.cProps[i].candidate.toString()} </h3>
                             </Col>
                           </Row>
                           <Row>
                             <Col>
                             <h5><i> {this.props.cProps[i].city.toString()} </i></h5>
                             </Col>
                           </Row>
                           <Row>
                             <Col>
                               <p><i> {this.props.cProps[i].constituency.toString()} </i></p>
                             </Col>
                           </Row>
                       </div>
                      </Col>
                   </Row>
                 </Container>
                 </div>
               )
             );
           }

    return(
      <div style={{ backgroundColor:'#000000', minHeight:'800px'}}>

        <div>
          <h1 style={{backgroundColor:'#062F4F', marginTop: '5px', marginBottom:'5px'}} >  <img src='../src/Magyar_Kétfarkú_Kutyapárt_logó.svg' style={{height: '100px', width:'100px'}}></img> </h1>
        </div>
        <Form>
          <FormGroup>
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
        <div style={{ }}>
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
