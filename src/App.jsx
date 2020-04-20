import React from 'react';
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from './pages/HomePage'
import Contacts from './pages/ContactPage'
import ContactDetails from './pages/ContactDetailsPage'
import ContactEditPage from './pages/ContactEditPage'
import StatisticPage from './pages/StatisticPage'

import NavBar from './cmps/NavBar.jsx';

function App() {
  return (
    <div className="App">

      <Router >
        <NavBar />
        <main>
          <Switch>
            <Route path="/" exact component={HomePage} />
            {/* <Route path="/home" exact component={HomePage} /> */}
            <Route path='/Contact/Edit' exact component={ContactEditPage} />
            <Route path='/Contact/Edit/:_id' exact component={ContactEditPage} />
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
