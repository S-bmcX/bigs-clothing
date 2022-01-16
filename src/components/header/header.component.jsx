import React from 'react';
import { Link } from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/crown.svg';
// TO UNDERSTAND WHY THE ABOVE WAS DONE, READ HERE -> https://facebook.github.io/create-react-app/docs/adding-images-fonts-and-files
// short version: imports file destination as a react component as opposed to its source content. This is unique for SVG w/ React
import './header.styles.scss';

const Header = () => (
    <div className="header">
        <Link to="/" className='logo-container'>
            <Logo className='logo' />
        </Link>
        <div className="options">
            <Link className='option' to='/shop'>Shop</Link>
            <Link className='option' to='/contact'>Contact</Link>
            <Link className='option' to='/about'>About Us</Link>
            <Link className='option' to='/signin'>Sign In</Link>
        </div>
    </div>
)

export default Header;