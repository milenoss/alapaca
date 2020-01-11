import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import ShopPage from './components/pages/shop/shop.component'
import HomePage from './components/pages/homepage.component'
import Header from './components/header/header.component'
import SignInAndSignUpPage from './components/pages/sign-in-and-sign-up-page/sign-in-and-sign-up.component'

function App() {
  return (
    <div>
    <Header/>
    <Switch>
     <Route exact path='/' component = {HomePage}/>
     <Route exact path='/shop' component ={ShopPage}/>
     <Route path= '/signin' component={SignInAndSignUpPage}/>

     </Switch>
    </div>
  );
}

export default App;
