import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'

import HomePage from './components/pages/homepage.component'

const HatsPage = () => ( 
  <div>
  <h1>HatsPage</h1>
  </div>
); 

function App() {
  return (
    <div>
    <Switch>
     <Route exact path='/' component = {HomePage}/>
     <Route exact path='/hats' component ={HatsPage}/>
     </Switch>
    </div>
  );
}

export default App;
