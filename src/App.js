import React from 'react';

import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';
import ToDoList from './Components/ToDoList/ToDoList';
import './App.css';


const App = () => {

    return (
        <div className="App">
          <Header/>

          <ToDoList/>

          <Footer/>
        </div>
    );
};

export default App;
