import React              from 'react';
import { Container,
         Row,
         Col }            from 'reactstrap';

//TODO: create a list of the candidates.
//TODO: refactoring needed
//TODO: create a container for candidates
//TODO: search func

export default class CList extends React.Component {

  render(){

    return(
      <div>
        <Container>
          <Row >
            <Col>
              <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for names.." title="Type in a name"/>
              <ul id="myUL">
                <li><a href="#">Adele</a></li>
                <li><a href="#">Agnes</a></li>

                <li><a href="#">Billy</a></li>
                <li><a href="#">Bob</a></li>

                <li><a href="#">Calvin</a></li>
                <li><a href="#">Christina</a></li>
                <li><a href="#">Cindy</a></li>
              </ul>
            </Col>

          </Row>
        </Container>

      </div>
    );

  }



}
