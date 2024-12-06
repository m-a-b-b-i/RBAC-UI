// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import UserList from './components/UserList';
import RoleList from './components/RoleList';
import Permissions from './components/Permissions';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/users" component={UserList} />
          <Route path="/roles" component={RoleList} />
          <Route path="/permissions" component={Permissions} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
