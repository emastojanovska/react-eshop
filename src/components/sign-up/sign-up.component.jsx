import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import '../sign-up/sign-up.styles.scss';
import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/user.actions'


class SignUp extends React.Component{
    constructor(){
        super();
        this.state={
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { signUpStart } = this.props;
        const { displayName, email, password, confirmPassword } = this.state;
        if( password !== confirmPassword ) {
            alert("Password do not match!");
            return;
        }    
        signUpStart(email, password, displayName);
    }

    handleChange = event =>{
        const { name, value } = event.target;
        this.setState( { [name]: value } );
    }

    render(){
        const { displayName, email, password, confirmPassword} = this.state;
        return(
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sin-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                    type='text'
                    name='displayName'
                    value= {displayName}
                    label='Display Name'
                    onChange={this.handleChange}
                    required
                    />
                    <FormInput
                    type='email'
                    name='email'
                    value= {email}
                    label='Email'
                    onChange={this.handleChange}
                    required
                    />
                    <FormInput
                    type='password'
                    name='password'
                    value= {password}
                    label='Password'
                    onChange={this.handleChange}
                    required
                    />
                    <FormInput
                    type='password'
                    name='confirmPassword'
                    value= {confirmPassword}
                    label='Confirm Password'
                    onChange={this.handleChange}
                    required
                    />

                <CustomButton type='submit'> Sign up </CustomButton>                 

                </form>

               
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>({
    signUpStart: (email, password, displayName) => dispatch(signUpStart({email, password, displayName}))
})
export default connect(null, mapDispatchToProps)(SignUp);