import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Components/layout/Navbar";
import Dashboard from "./Components/dashboard/dashboard";
import ProjectSummary from "./Components/projects/ProjectSummary";
import SignIn from "./Components/auth/SignIn";
import SignUp from "./Components/auth/SignUp";
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard}></Route>
            <Route path="/project/:id" component={ProjectSummary}></Route>
            <Route path="/signin" component={SignIn}></Route>
            <Route path="/signup" component={SignUp}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
