import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SingInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect'; 
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';


class App extends React.Component{

  constructor(){
    super();
    this.state = {
      currentUser: null
    }
  }

  //Whenever we call the onAuthStateChanged() or onSnapshot() methods from our auth library 
  //or referenceObject, we get back a function that lets us unsubscribe from the listener
  //we just instantiated. 
  unsubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if(userAuth){

        // we take the user object from auth library, then we pass it to createUserProfileDocument 
        // function that extracts the values from the object and store it into the database

        const userRefs = await createUserProfileDocument(userAuth);  

        //to see if any data is updated so we can change the state inside the application

        userRefs.onSnapshot(snapShot => {          
          setCurrentUser({ 
            id: snapShot.id,
            ...snapShot.data()
          })            
        });        
      }
      //if userAuth is null then we change the state in our application also
      setCurrentUser(userAuth);
     
    })
  }

  componentWillUnmount(){
    //Calling the unsubscribe function when the component is about to unmount is the best way 
    //to make sure we don't get any memory leaks in our application related to listeners still 
    //being open even if the component that cares about the listener is no longer on the page.
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header></Header>
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route exact path='/shop' component={ShopPage}></Route>
          <Route exact path='/signin' render={() => this.props.currentUser ? 
          (<Redirect to='/'/>) : (<SingInAndSignUpPage/>)}></Route>
        </Switch>
      </div>
    );
  }

}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser

})
const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
