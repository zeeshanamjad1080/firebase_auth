import React from 'react';
import './App.css';
import * as firebase from 'firebase';
import { firebaseConfig } from './config';
import Home from './components/home';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Login from './components/login';
import Signup from './components/signup';
import { Module } from 'module';


firebase.initializeApp(firebaseConfig);


function App() {
  return (
    <Router>
      <div className="App">
        <Home />
      </div>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signin">
          <Signup />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

// service firebase.storage {
//   match /b/{bucket}/o {
//     match /{allPaths=**} {
//       allow read, write: if request.auth != null;
//     }
//   }
// }
