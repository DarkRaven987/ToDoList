import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import { Header } from './Components/Header/Header';
import ToDoList from './Views/ToDoList';
import LoginForm from './Views/LoginForm';
import Page404 from './Views/Page404'
import './App.css';

const App = () => {

  return (
    <div className="App">
      <Router>
        <div>
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
        </div>
      </Router>
    </div>
  );
};

export default App;
