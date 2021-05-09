import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import ListItemComponent from './Items/ListItemComponent';
import AddItemcomponent from './Items/AddItemComponent';
import NavBar from './nav-bar/NavBar';
import Footer from './nav-bar/FooterBar';
import UpdateItemComponent from './Items/UpdateItemComponent';

function App() {
  return (
    <div>
      <Router>
        <NavBar/>
        <div className="container">
          <Switch>
            <Route path = "/" exact component = {ListItemComponent}></Route>
            <Route path = "/items" component = {ListItemComponent}></Route>
            <Route path = "/additem" component = {AddItemcomponent}></Route>
            <Route path = "/updateitem/:id" component ={UpdateItemComponent}></Route>
            </Switch>
            </div>
            <Footer/>
        </Router>
    </div>
  );
}

export default App;