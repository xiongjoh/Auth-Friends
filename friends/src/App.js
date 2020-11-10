import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Header from './components/Header'
import LoginForm from './components/LoginForm'

import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <Router>
      <div className="App">
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      </div>
      <Switch>
        <Route exact path='/login' render={() => {
          return (
            <LoginForm setIsLoggedIn={setIsLoggedIn}/>
          )
        }} />
      </Switch>
    </Router>
  );
}

export default App;
