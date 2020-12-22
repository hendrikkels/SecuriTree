import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import cookies from './cookiestore';
import Login from './views/Login';
import Home from './views/Home';

class App extends React.Component {

  render () {
    var isLoggedIn = true;
    if (cookies.get("session") === null || cookies.get("session") === undefined || cookies.get("session") === ""){
      cookies.remove("session");
      isLoggedIn = false;
    }
    console.log(isLoggedIn)
    return (
      <Router>
        { isLoggedIn ? ( 
          <></>
        ):(
          <Redirect to='/login'  />
        ) }
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/logout" component={Logout} />
        </Switch>
      </Router>
    );
  }
}

function Logout() {
  cookies.set("session", "", { path: "/" });
  window.location.replace("/login");
  return null;
}

export default App;
