import React from "react";
import { Switch, Route } from "react-router-dom";
import ProgramsContainer from './components/ProgramsContainer/ProgramsContainer';
import Navigation from "./components/NavigationBar/NavigationBar";
import ProgramsDetails from "./components/ProgramsDetails/ProgramsDetails";
import Home from "./components/Home/Home";
import 'react-bootstrap/dist/react-bootstrap.min.js';
import ProfilesContainer from "./components/ProfilesContainer/ProfilesContainer";

function App() {
  return (
    <main className="app">
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/profiles">
          <ProfilesContainer />
        </Route>
        <Route exact path="/programs">
          <ProgramsContainer />
        </Route>
        <Route exact path="/programs/:id">
          <ProgramsDetails />
        </Route>
        {/* keep the "*" path at the end */}
        <Route path="*">
          <h1>404 Not Found :c</h1>
        </Route>
      </Switch>
    </main>
  );
}

export default App;
