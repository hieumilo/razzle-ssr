import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Test from './pages/Test';
import './App.css';
import UserRoute from "./routes/UserRoute";
import GuestRoute from "./routes/GuestRoute";

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/test" component={Test} />
    <UserRoute exact path="/private" component={Home} />
  </Switch>
);

export default App;
