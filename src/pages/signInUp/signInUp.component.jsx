import React from 'react';

import SignIn from '../../components/signin/sign-in.component';
import SignUp from '../../components/signup/sign-up.component';

import './signInUp.styles.scss';

const SignInUp = () => (
    <div className="signInUp">
        <SignIn />
        <SignUp />
    </div> 
)

export default SignInUp;