import React, {useEffect} from 'react';
import './App.css';
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./Login";
import {useStateValue} from "./StateProvider";
import {auth} from "./firebase";

function App() {

    const[{}, dispatch] = useStateValue();

    useEffect(() => {
        //will only run once when the app component loads
        auth.onAuthStateChanged(authUser => {
            console.log('The User Is >>>', authUser);

            if(authUser) {
                // user just logged in / the user was logged in
                dispatch({
                    type: 'SET_USER',
                    user: authUser,
                })
            } else {
                // the user is logged out
                dispatch({
                    type: 'SET_USER',
                    user:null,
                })
            }
        })
    }, [])

  return (
      <Router>
    <div className="app">

        <Switch>
        <Route path={"/login"}>
            <Login />
        </Route>

        <Route path={"/checkout"}>
            <Header />
            {/*Header*/}
            <Checkout />
        </Route>

        <Route path={"/"}>
            <Header />
            {/*Header*/}
            {/*Home*/}
            <Home />
        </Route>
        </Switch>

    </div>
      </Router>
  );
}

export default App;
