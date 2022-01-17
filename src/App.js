import React from "react";
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInUp from './pages/signInUp/signInUp.component';
import {auth} from './firebase/firebase.utils';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  // &&&&&&&&&&&&&&&&&&&&&&&&
  // THE BELOW SECTION HANDLES SIGN-IN SUBSCRIPTION/AUTHENTICATION
  unsubscribeFromAuth = null
  
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});

      console.log(user);
    });
    //THE ABOVE ^^ PORTION ALLOWS USER SIGN-IN & PERSISTENCE UNTIL MANUAL LOG-OUT
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
    // THIS SECTION CLOSES SIGN-IN SUBSCRIPTION - by calling unsubscribeFromAuth 
  }
  // &&&&&&&&&&&&&&&&&&&&&&&&

  render() {
    return (
      <div> 
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
