import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import ProgramsContainer from './components/ProgramsContainer/ProgramsContainer';
import Navigation from "./components/NavigationBar/NavigationBar";
import ProgramsDetails from "./components/ProgramsDetails/ProgramsDetails";
import Home from "./components/Home/Home";
import 'react-bootstrap/dist/react-bootstrap.min.js';
import ProfilesContainer from "./components/ProfilesContainer/ProfilesContainer";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import { BASE_URL } from "./constraints/index";

function App() {
  const [profiles, setProfiles] = useState([]);
  const [user, setUser] = useState(null);
  console.log(BASE_URL);

  //Get list of profiles
  useEffect(() => {
    fetch(BASE_URL + "/users/1/profiles", {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*'
       }
    })
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

  useEffect(() => {
    fetch(BASE_URL + "/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleLogin(user) {
    setUser(user);
  }

  function handleLogout() {
    setUser(null);
  }

  function handleAddProfile(addedProfile) {
    setProfiles((profiles) => [...profiles, addedProfile]);
  }

  function handleDeleteProfile(onDeletedProfile) {
    const profilesFilter = profiles.filter((p) => p.id !== onDeletedProfile);
    setProfiles(profilesFilter);
  }

  return (
    <main className="app" >
      <Navigation onLogout={handleLogout} />
      <Header user={user} />
      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route exact path="/login">
          <Login onLogin={handleLogin} />
        </Route>
        <Route exact path="/profiles">
          <ProfilesContainer profileData={profiles} onAddProfile={handleAddProfile} onDeletedProfile={handleDeleteProfile} />
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
