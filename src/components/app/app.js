import React, { Component } from 'react';
import Spinner from '../spinner';
import ErrorBoundry from '../error-boundry';
import './app.css';
import ErrorButton from '../error-button';
import { Route, Link, Switch } from 'react-router-dom';
import { HomePage, CartPage} from '../pages';


const App = () => {   
    
    return (
        <div classNameName="app">
            <ErrorBoundry>
                    
                <h1>Whats app.js!!!</h1>
                <Spinner name="John"/>
                <ErrorButton />
                    <nav className="navbar navbar-expand-lg navbar-dark bg-primary"> 
                        <div className="collapse navbar-collapse" id="navbarColor01">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/blog">Blog</Link>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/about">About</Link>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/shop">Shop</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                <Switch>
                    <Route path="/blog" render={ () => <h1>Blog</h1>}/>
                    <Route path="/about" render={ () => <h1>About</h1>}/>
                    <Route path="/shop" render={ () => <h1>Shop</h1>}/>    
                </Switch>
            </ErrorBoundry>
        </div>
    );    
};
export default App; 