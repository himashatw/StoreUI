import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import ListItemComponent from './Items/ListItemComponent';
import AddItemcomponent from './Items/AddItemComponent'

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