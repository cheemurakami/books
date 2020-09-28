import React from 'react';
import '../App.css';
import BooksList from './BooksList';
import Book from './Book';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; 


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:id">
          <Book />
        </Route>
        <Route path="/">
          <BooksList />
        </Route>
      </Switch>
    </Router>
    
    )
}

export default App;
