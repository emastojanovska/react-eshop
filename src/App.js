import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckOutPage from './pages/checkout/checkout.component'
import Header from './components/header/header.component';
import SingInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect'; 
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

class App extends React.Component{

  componentDidMount(){
    const { checkUserSession } = this.props;
    checkUserSession()
  }
  render(){
    const {currentUser} = this.props;
    return (
      <div>
        <Header></Header>
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route exact path='/checkout' component={CheckOutPage}></Route>
          <Route path='/shop' component={ShopPage}></Route>
          <Route exact path='/signin' render={() => currentUser ? 
          (<Redirect to='/'/>) : (<SingInAndSignUpPage/>)}></Route>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
