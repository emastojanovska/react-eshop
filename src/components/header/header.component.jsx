import React from 'react';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect'; 
import {ReactComponent as Logo} from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import './header.styles.scss';

const Header = ( {currentUser, hidden} ) => (
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo'></Logo>
         </Link>
         <div className='options'>
            <Link to='/' className='option'> HOME </Link>
            <Link to='/shop' className='option'> SHOP </Link>
            <Link to='/shop' className='option'> CONTACT </Link>
            { currentUser ? 
                <div className='option' onClick={()=> auth.signOut()}> SIGN OUT </div>
                :
                <Link className='option' to='/signin'> SIGN IN </Link>
                
             }
           { currentUser ? <CartIcon/> : null}
         </div>
         { !hidden && currentUser ? ( <CartDropdown></CartDropdown>) : null}
        
    </div>
);
//destructuring from state
//createStructuredSelector is passing the state to everyone
const MapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser ,
    hidden: selectCartHidden
});

//const mapStateToProps = state => ({
//    currentUser: state.user.currentUser
//})
export default connect(MapStateToProps)(Header);