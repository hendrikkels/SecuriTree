import React, { Component } from 'react';
import { Container, Form, Button, Card, Jumbotron } from 'react-bootstrap';
import cookies from "../cookiestore";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      session: ""
    };
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  // authenticate() {
  //   for (var index in allUsers) {
  //     console.log(allUsers[index]);
  //     if (username === allUsers[index].username) {
  //       console.log("user found");
  //       if (password === allUsers[index].password) {
  //         console.log("login successful");
  //       }
  //     }
  //   }
  // }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }


  handleSubmit = event => {
    event.preventDefault();

    let query = "http://localhost:5000/registered_users?username=".concat(this.state.username).concat("&password=").concat(this.state.password)
    console.log(query);
    fetch(query)
      .then(response => response.json())
      .catch(error => console.error('Error:', error))
      .then(response => {
        console.log('Success:', response);
        console.log(response.length);
        if (response.length === 0) {
          alert("Incorrect credentials, please try again");
        }
        else {
          this.state.session = response;
          cookies.set("session", response[0].username);
          this.props.history.push('/');
        }
      });

    // fetch("registered_users.json", {
    //         headers : { 
    //           'Content-Type': 'application/json',
    //           'Accept': 'application/json'
    //          }
    //       })
    //       .then(function(response) {
    //         return response.json();
    //       })
    //       .then(function(data) {
    //         console.log(data);
    //         for (var index in data.registered_users) {
    //           if (data[index].username === this.state.username) {
    //             console.log("User found")
    //             if (data[index].password === this.state.password) {
    //               console.log("Login successful")
    //             }
    //           }
    //         }
    //       });

    // fetch(`/api/login/${this.state.email};${this.state.password}`)
    // .then(response => response.text())
    // .then((text) => {
    //   if (text === ""){
    //     alert("Email/Password incorrect, please try again");
    //   } else {
    //     // this.state.session = text;
    //     // cookies.set("session", text);
    //   }
    // })
    // .catch(err => {
    //   console.log(err);
    // });
  }


  render() {
    return (
      <Container>
      <br />
      <Jumbotron>
        <h1>Login</h1>
      </Jumbotron>
      <Card>
        <Card.Header>Please enter login information</Card.Header>
        <Card.Body>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group size="lg" controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                autoFocus
                required
                minLength="6"
                type="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                required
                minLength="6"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button block size="lg" type="submit" disabled={!this.validateForm()}>
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
    );
  }

}


// function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   let allUsers = []

//   function validateForm() {
//     return username.length > 5 && password.length > 5;
//   }

//   let authenticate = function() {
//     for (var index in allUsers) {
//       console.log(allUsers[index]);
//       if (username === allUsers[index].username) {
//         console.log("user found");
//         if (password === allUsers[index].password) {
//           console.log("login successful");
//         }
//       }
//     }
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//     console.log(username);

//     fetch("registered_users.json", {
//       headers : { 
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//        }
//     })
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(data) {
//       console.log(data);
//       allUsers = data.registered_users;
//       authenticate();
//     });
//   }

//   return (
//     <Container>
//       <br />
//       <Jumbotron>
//         <h1>Login</h1>
//       </Jumbotron>
//       <Card>
//         <Card.Header>Please enter login information</Card.Header>
//         <Card.Body>
//           <Form onSubmit={handleSubmit}>
//             <Form.Group size="lg" controlId="email">
//               <Form.Label>Username</Form.Label>
//               <Form.Control
//                 autoFocus
//                 required
//                 minLength="6"
//                 type="username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//               />
//             </Form.Group>
//             <Form.Group size="lg" controlId="password">
//               <Form.Label>Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 required
//                 minLength="6"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </Form.Group>
//             <Button block size="lg" type="submit" disabled={!validateForm()}>
//               Login
//             </Button>
//           </Form>
//         </Card.Body>
//       </Card>
//     </Container>
//   );
// }

// export default Login;
