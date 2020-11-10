import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import FriendsList from "./components/FriendsList";

import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="App">
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

        <Switch>
          <Route
            exact
            path="/login"
            render={() => {
              return <LoginForm setIsLoggedIn={setIsLoggedIn} />;
            }}
          />
          <PrivateRoute exact path="/friends" component={FriendsList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
