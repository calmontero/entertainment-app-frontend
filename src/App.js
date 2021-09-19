import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import ProgramsContainer from './components/ProgramsContainer/ProgramsContainer';
import Navigation from "./components/NavigationBar/NavigationBar";
import ProgramsDetails from "./components/ProgramsDetails/ProgramsDetails";
import Home from "./components/Home/Home";
import 'react-bootstrap/dist/react-bootstrap.min.js';
import ProfilesContainer from "./components/ProfilesContainer/ProfilesContainer";

function App() {
  const [profiles, setProfiles] = useState([]);

  //Get list of profiles
  useEffect(() => {
    fetch("/users/1/profiles")
      .then((res) => res.json())
      .then((profilesData) => {
        setProfiles(profilesData);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
      });
}, []);

  return (
    <main className="app">
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/profiles">
          <ProfilesContainer profileData={profiles} />
        </Route>
        <Route exact path="/programs">
          <ProgramsContainer />
        </Route>
        <Route exact path="/programs/:id">
          <ProgramsDetails profileData={profiles} />
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
