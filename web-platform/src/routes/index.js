/**
 * @Author: Daniel Carlson <DanCarl857>
 * @Date:   2017-11-10T03:52:46+01:00
 * @Project: PL Meetup Application
 * @Last modified by:   DanCarl857
 * @Last modified time: 2017-11-10T04:50:36+01:00
 */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Home from '../components/Home';
import Login from '../components/Login';
import Signup from '../components/Signup';

export default () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </Router>
  )
};
