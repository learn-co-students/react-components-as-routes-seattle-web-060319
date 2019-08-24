import React from 'react';
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import NavBar from './components/NavBar'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom'

ReactDOM.render((
  <Router>
    <React.Fragment>
      <NavBar />
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login}/>
    </React.Fragment>
  </Router>),
  document.getElementById('root')
);
