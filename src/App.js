//import logo from './logo.svg';
import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import ListItemComponent from './Components/ListItemComponent';
import AddItemcomponent from './Components/AddItemComponent'

function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <div className = "container">
          <Switch>
            <Route path = "/" exact component = {ListItemComponent}></Route>
            <Route path = "/items" component = {ListItemComponent}></Route>
            <Route path = "/additem" component = {AddItemcomponent}></Route>
          </Switch>
        </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
