import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import { Header } from './Components/Header/Header';
import ToDoList from './Views/ToDoList';
import LoginForm from './Views/LoginForm';
import Page404 from './Views/Page404'
import './App.css';
import {getCookie} from "./utility";


function redirectIfNotLogged() {
  if(document.location.href!=='http://'+document.location.host+'/login' && !getCookie('user_id')) {
    document.location.href = "/login"
  }
}

const App = () => {

  redirectIfNotLogged();

  return (
    <div className="App">
      <Router>
          <Header/>

          <Switch>
            <Route path="/" exact>
              <ToDoList/>
            </Route>
            <Route path="/login">
              <LoginForm/>
            </Route>
            <Route>
              <Page404/>
            </Route>
          </Switch>
      </Router>
    </div>
  );
};

export default App;
