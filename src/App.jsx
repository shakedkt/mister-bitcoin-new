import React from 'react';
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from './pages/HomePage'
import Contacts from './pages/ContactPage'
import ContactDetails from './pages/ContactDetailsPage'
import EditContactPage from './pages/ContactEditPage'
import StatisticPage from './pages/StatisticPage'
import login from './pages/signupPage'


import NavBar from './cmps/NavBar.jsx';

function App() {
  return (
    <div className="App">

      <Router >
        <NavBar />
        <main>
          <Switch>
            <Route path="/" component={login} />
            <Route path="/home" component={HomePage} />
            <Route path="/Contact/edit/:id?" component={EditContactPage} />
            <Route path="/Contact" component={Contacts} />
            <Route path="/contact/:id" component={ContactDetails} />
            <Route path="/Statistic" component={StatisticPage} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
