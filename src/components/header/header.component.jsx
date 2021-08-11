import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

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
           <CartIcon/>
         </div>
         { hidden ? null : ( <CartDropdown></CartDropdown>) }
        
    </div>
);
//destructuring from state
const MapStateToProps = ({user: {currentUser}, cart: {hidden}}) =>({
    currentUser,
    hidden
});
export default connect(MapStateToProps)(Header);