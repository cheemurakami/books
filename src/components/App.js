import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BooksList from './BooksList';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <BooksList />
        </Route>
      </Switch>
    </Router>
    )
}

export default App;
