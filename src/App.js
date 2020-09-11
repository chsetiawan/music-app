import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import logo from './logo.svg';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import DrumPage from './pages/drumpage/drumpage.component';
import GuitarPage from './pages/guitarpage/guitarpage.component';

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/drum" component={DrumPage} />
          <Route exact path="/guitar" component={GuitarPage} />
        </Switch>
      </div>
    )
  }
}

export default App;
