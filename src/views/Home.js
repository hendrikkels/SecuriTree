import React from 'react';
import {Container, Jumbotron, Card, Nav } from 'react-bootstrap/';
import cookies from '../cookiestore';

class Home extends React.Component {

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
          <h1>Home page</h1>
          {cookies.get("session")}
        </Jumbotron>
        <Card>
          <Card.Header>
            What would you like to do?
            </Card.Header>
          <Card.Body>
            <Nav className="flex-column">
              <Nav.Link href="/hierarchy">View security door entry hierarchy</Nav.Link>
              <Nav.Link href="/doors">Manage Doors</Nav.Link>
              <Nav.Link href="/logout">Logout</Nav.Link>
            </Nav>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default Home;