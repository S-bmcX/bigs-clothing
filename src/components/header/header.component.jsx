import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';
import {ReactComponent as Logo} from '../../assets/crown.svg';
// TO UNDERSTAND WHY THE ABOVE WAS DONE, READ HERE -> https://facebook.github.io/create-react-app/docs/adding-images-fonts-and-files
// short version: imports file destination as a react component as opposed to its source content. This is unique for SVG w/ React
import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
    <div className="header">
        <Link to="/" className='logo-container'>
            <Logo className='logo' />
        </Link>
        <div className="options">
            <Link className='option' to='/shop'>Shop</Link>
            <Link className='option' to='/contact'>Contact</Link>
            <Link className='option' to='/about'>About Us</Link>
            {/* <Link className='option' to='/signin'>Sign In</Link> */}
            {/* the below in {} is a dynamic signIn and signOut button feature */}
            {
                currentUser ?
                (<div className='option' onClick={() => auth.signOut()}>Sign Out</div>)
                :
                (<Link className='option' to='/signin'>Sign In</Link>)
            }
            <CartIcon />
        </div>
        {
            hidden ? null : <CartDropdown />
            // this allows cart window visible/hidden function
        }
    </div>
);


// USING createStructuredSelector in the below removes need for STATE calls/pairing
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

// const mapStateToProps = (state) => ({
//     currentUser: selectCurrentUser(state),
//     hidden: selectCartHidden(state)
// });

export default connect(mapStateToProps)(Header);