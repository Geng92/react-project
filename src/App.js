import React from "react"
import {Switch, Route} from "react-router-dom";
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import CharacterPage from './CharacterPage';

function App() {
  
  return (
    <div >
    <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/CharacterPage">
          <CharacterPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
