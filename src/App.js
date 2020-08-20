import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import MyForm from './components/inputs/Form';
import FormControl from './components/inputs/FormControl';
import { Button } from '@material-ui/core';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Mytable from './pages/Mytable';

 function App() {
  
  return (
    <Switch>
     
      <Route path='/dashboard' component={Dashboard}/>
      <Route path='/table' component={Mytable}/>
      <Route path='/' component={LoginPage}/>
    </Switch>
  );
}

export default App;
