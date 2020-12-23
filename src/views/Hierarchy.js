import React from 'react';
import { Container, Jumbotron, Card, Button, Accordion } from 'react-bootstrap/';
import cookies from '../cookiestore';

// let tree = constructTree;

// const constructTree = async () => {
//   let query = "http://localhost:5000/areas?parent_area_id=0";
//   const response = await fetch(query);
//   const json = await response.json();
//   const data = json[0];
//   console.log(data);
//   for (var index in data.child_area_ids) {
//     data.child_area_ids[index] = await constructSubTree(data.child_area_ids[index]);
//   }
//   console.log(data);
//   return(data);
// }

// const constructSubTree = async (node) => {
//   let query = "http://localhost:5000/areas?id=".concat(node);
//   const response = await fetch(query);
//   const json = await response.json();
//   const data = json[0];
//   console.log(data);
//   for (var index in data.child_area_ids) {
//     data.child_area_ids[index] = await constructSubTree(data.child_area_ids[index]);
//   }
//   return(data);
// }

class Hierarchy extends React.Component {

  constructor(props) {
    super(props);
    this.state = { tree: [] };
  }


  async componentDidMount() {
    let query = "http://localhost:5000/areas?parent_area_id=0";
    const response = await fetch(query);
    const json = await response.json();
    const data = json[0];
    data.doors = await this.getDoors(data.id);
    this.getRules();
    for (var index in data.child_area_ids) {
      data.child_area_ids[index] = await this.oeloeloe(data.child_area_ids[index]);
    }
    console.log(data);
    this.setState({ tree: data });
    return (data);
  }

  async oeloeloe(node) {
    let query = "http://localhost:5000/areas?id=".concat(node);
    const response = await fetch(query);
    const json = await response.json();
    const data = json[0];
    data.doors = await this.getDoors(data.id);
    // console.log(data);
    for (var index in data.child_area_ids) {
      data.child_area_ids[index] = await this.oeloeloe(data.child_area_ids[index]);
    }
    return (data);
  }

  async getDoors(node) {
    let query = "http://localhost:5000/doors?parent_area=".concat(node);
    // console.log(query);
    const response = await fetch(query);
    const json = await response.json();
    var data = json;
    // console.log(data);
    return data;
  }

  async getRules(node) {
    let query = "http://localhost:5000/access_rules/";
    // console.log(query);
    const response = await fetch(query);
    const json = await response.json();
    var data = json;
    console.log(data);
    // return data;
  }

  printTree(tree) {
    // console.log(tree.name);
    // console.log(tree.child_area_ids)
    for (let index in tree.child_area_ids) {
      // console.log(tree.child_area_ids[index]);
      // console.log(tree.child_area_ids[index].name)
      this.printTree(tree.child_area_ids[index]);
    }
    if (typeof tree.child_area_ids === 'undefined' || tree === []) {
      console.log('poes'); 
      return(null);
    }
    else {
      return (
      <Accordion>
        <Accordion.Toggle as={Button} className="p-0" variant="link" eventKey="0">
          {tree.name}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body className="py-0 pr-0">
            [Doors] {tree.doors.map((door, i) => {
              let door_string = door.name;
              // console.log(door.status);
              if (door.status === "open") {
                door_string = door_string + " (UNLOCKED)";
              }
              else {
                door_string = door_string + " (LOCKED)";
              }
              return(door_string + ", ");
            })}
            <br/>
            [Access Rules]
            {tree.child_area_ids.map((child_area_id, i) => {
              // console.log("totie", child_area_id);
              return(this.printTree(child_area_id));
            })}
          </Card.Body>
        </Accordion.Collapse>
      </Accordion>
    );}
  }

  render() {
    return (
      <Container>
        <br />
        <Jumbotron>
          <h1>Security door entry hierarchy</h1>
          {cookies.get("session")}
        </Jumbotron>
        <Card className="border-0 bg-light">
          <Card.Body>
            { this.printTree(this.state.tree) }
          </Card.Body>
        </Card>
        <br/>
      </Container>
    );
  }
}

export default Hierarchy;