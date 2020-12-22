import React from 'react';
import { Tabs, Tab, Container, Row, Jumbotron, Card, Col, Button, Nav } from 'react-bootstrap/';
import cookies from '../cookiestore';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      surname: ""
    };
  }

  componentWillMount() {
    try {
      fetch(`/api/get_customer/${cookies.get('session')}`)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          this.setState({
            firstname: data[1],
            surname: data[2]
          })
        });
    } catch (e) {
      alert(e.message);
    }
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