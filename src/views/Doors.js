import React from 'react';
import { Container, Jumbotron, Card } from 'react-bootstrap/';
import cookies from '../cookiestore';

class Doors extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      surname: ""
    };
  }

  render() {
    return (
      <Container>
        <br />
        <Jumbotron>
          <h1>Manage Doors</h1>
          {cookies.get("session")}
        </Jumbotron>
        <Card>
          <Card.Header>
            What would you like to do?
            </Card.Header>
          <Card.Body>

          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default Doors;