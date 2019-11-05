import React from "react";
import { Router, Route, Link, BrowserRouter, Switch } from "react-router-dom";
import { Dashboard } from "./Dashboard";
import Navbar from "./Nav";

import { history } from "./_Helpers/history";
import { authenticationService } from "./Service/authenticationService";
import { PrivateRoute } from "./Components/PrivateRoute";
import { LoginPage } from "./Components/Auth/Login";
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  componentDidMount() {
    authenticationService.currentUser.subscribe(x =>
      this.setState({ currentUser: x })
    );
  }

  logout() {
    authenticationService.logout();
    history.push("/Login");
  }

  render() {
    const { currentUser } = this.state;
    return (
      <Router history={history}>
        <div>
          <Navbar />
          {currentUser && (
            <div className="App">
              <a onClick={this.logout} className="btn btn-lg danger">
                Logout
              </a>
            </div>
          )}
          <div className="App">
            <PrivateRoute exact path="/" component={Dashboard} />
            <Route path="/Login" component={LoginPage} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
