import React from "react";
import { Switch, Route } from "react-router-dom";
import ProgramsContainer from './components/ProgramsContainer/ProgramsContainer';
import NavBar from "./components/NavBar/NavBar";
import ProgramsDetails from "./components/ProgramsDetails/ProgramsDetails";

function App() {
  return (
    <main className="app">
      <NavBar />
      <Switch>
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
