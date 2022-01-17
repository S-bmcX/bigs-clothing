import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomBtn from '../custom-btn/custom-btn.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import './sign-in.styles.scss';

// using class because storing data
class SignIn extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = event => {
        event.preventDefault();

        this.setState({email: '', password: ''});
    }
    handleChange = event => {
        const {value, name} = event.target;

        this.setState({ [name]:value });
    }

    render() {
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and Password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" label="email" value={this.state.email} required />
                    <FormInput name="password" type="password" label="password" value={this.state.email} handleChange={this.handleChange} required />
                    <div className="buttons">
                        <CustomBtn type="submit">Sign In</CustomBtn>
                        <CustomBtn onClick={signInWithGoogle} isGoogleSignIn>
                            Sign in with Google
                        </CustomBtn>
                    </div>
                </form>


            </div>
        )
    }
}

export default SignIn;