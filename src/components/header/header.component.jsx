import React from 'react';
import { createStructuredSelector } from 'reselect'; 
import {ReactComponent as Logo} from '../../assets/crown.svg'
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles'
import { signOutStart } from '../../redux/user/user.actions'

const Header = ( {currentUser, hidden, signOutStart} ) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo></Logo>
         </LogoContainer>
         <OptionsContainer>
            <OptionLink to='/'> HOME </OptionLink>
            <OptionLink to='/shop'> SHOP </OptionLink>
            <OptionLink to='/shop'> CONTACT </OptionLink>
            { currentUser ? 
                <OptionLink as='div' onClick={signOutStart}> SIGN OUT </OptionLink>
                :
                <OptionLink to='/signin'> SIGN IN </OptionLink>
                
             }
           { currentUser ? <CartIcon/> : null }
         </OptionsContainer>
         { !hidden && currentUser ? ( <CartDropdown></CartDropdown>) : null}
        
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser ,
    hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})


export default connect(mapStateToProps, mapDispatchToProps)(Header);