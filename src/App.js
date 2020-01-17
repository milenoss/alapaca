import React from 'react';
import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom'
import ShopPage from './components/pages/shop/shop.component'
import HomePage from './components/pages/homepage.component'
import Header from './components/header/header.component'
import SignInAndSignUpPage from './components/pages/sign-in-and-sign-up-page/sign-in-and-sign-up.component'
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import {connect} from 'react-redux'
import {setCurrentUser} from './redux/user/user.action'


class App extends React.Component{
  

  unsubscribeFromAuth = null 


  //open subscription between firebase and our app.
  //so we don't have to keep fetching data.
  //our user will always be logged in regardless
  //so we declare un-subscription and add it to the auth. 
  //then we will need to add it to componentWillUnmoutn.
  // async function so we are calling createUserProfileDocument from firebase file. 
  //data stored in firebase utils now storing data in state to be able to use it.
  
  
  componentDidMount(){ 
    const {setCurrentUser} = this.props
  
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=> { 
      if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapShot => { 
        setCurrentUser({
            id: snapShot.id, 
            ...snapShot.data()
        })

      })
    } else {
      setCurrentUser({userAuth})
      //no user then set it to null
    }
      
    })
     
  }
  componentWillUnmount() { 
    this.unsubscribeFromAuth();
  }



  render () {
  return (
    <div>
    <Header/>
    <Switch>
     <Route exact path='/' component = {HomePage}/>
     <Route exact path='/shop' component ={ShopPage}/>
     <Route exact path= '/signin' render= {() =>
       this.props.currentUser ? 
       (<Redirect to='/'/> )
       : (<SignInAndSignUpPage/>)
     }
     />
     </Switch>
    </div>
    );
  }
}

const mapStateToProps = ({user}) => ({ 
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
