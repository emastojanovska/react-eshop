import './App.css';
import {Switch, Route} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SingInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import React from 'react';

class App extends React.Component{

  constructor(){
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if(userAuth){

        // we take the user object from auth library, then we pass it to createUserProfileDocument 
        // function that extract the values from the object and store it to the database

        const userRefs = await createUserProfileDocument(userAuth);  

        //to see if any data is updated so we can change the state inside the application

        userRefs.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        });        
      }
      //if userAuth is null then we change the state in our application also
      this.setState({ currentUser: userAuth });
     
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header currentUser = {this.state.currentUser}></Header>
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route exact path='/shop' component={ShopPage}></Route>
          <Route exact path='/signin' component={SingInAndSignUpPage}></Route>
        </Switch>
      </div>
    );
  }

}

export default App;
