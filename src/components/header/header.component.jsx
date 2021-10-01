import React from 'react';
import { createStructuredSelector } from 'reselect'; 
import {ReactComponent as Logo} from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles'

const Header = ( {currentUser, hidden} ) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo></Logo>
         </LogoContainer>
         <OptionsContainer>
            <OptionLink to='/'> HOME </OptionLink>
            <OptionLink to='/shop'> SHOP </OptionLink>
            <OptionLink to='/shop'> CONTACT </OptionLink>
            { currentUser ? 
                <OptionLink as='div' onClick={()=> auth.signOut()}> SIGN OUT </OptionLink>
                :
                <OptionLink to='/signin'> SIGN IN </OptionLink>
                
             }
           { currentUser ? <CartIcon/> : null}
         </OptionsContainer>
         { !hidden && currentUser ? ( <CartDropdown></CartDropdown>) : null}
        
    </HeaderContainer>
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