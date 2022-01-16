import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomBtn from '../custom-btn/custom-btn.component';
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
                    <FormInput name="email" type="email" value={this.state.email} required label="email" />
                    <FormInput name="password" type="password" value={this.state.email} handleChange={this.handleChange} required label="password" />
                    <CustomBtn type="submit">Sign In</CustomBtn>
                </form>


            </div>
        )
    }
}

export default SignIn;