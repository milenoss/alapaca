import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import ShopPage from './components/pages/shop/shop.component'
import HomePage from './components/pages/homepage.component'
import Header from './components/header/header.component'
import SignInAndSignUpPage from './components/pages/sign-in-and-sign-up-page/sign-in-and-sign-up.component'
import {auth, createUserProfileDocument} from './firebase/firebase.utils'

class App extends React.Component{
  constructor() { 
    super () ; 
    this.state = { 

      currentUser: null

    }
  }

  unsubscribeFromAuth = null 


  //open subscription between firebase and our app.
  //so we don't have to keep fetching data.
  //our user will always be logged in regardless
  //so we declare un-subscription and add it to the auth. 
  //then we will need to add it to componentWillUnmoutn.
  // async function so we are calling createUserProfileDocument from firebase file. 
  
  componentDidMount(){ 
   this.unsubscribeFromAuth = auth.onAuthStateChanged(async user=> { 
      createUserProfileDocument(user);

      
    })
     
  }
  componentWillUnmount() { 
    this.unsubscribeFromAuth();
  }



  render () {
  return (
    <div>
    <Header currentUser={this.state.currentUser}/>
    <Switch>
     <Route exact path='/' component = {HomePage}/>
     <Route exact path='/shop' component ={ShopPage}/>
     <Route path= '/signin' component={SignInAndSignUpPage}/>

     </Switch>
    </div>
    );
  }
}

export default App;
