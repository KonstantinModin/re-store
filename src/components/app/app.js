import React, { Component } from 'react';
import Spinner from '../spinner';
import ErrorBoundry from '../error-boundry';
import './app.css';
import ErrorButton from '../error-button';
import { Route } from 'react-router-dom';


const App = () => {   
    
    return (
        <div classNameName="app">
            <ErrorBoundry>
                    
                <h1>Whats app.js!!!</h1>
                <Spinner name="John"/>
                <ErrorButton />
                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-primary"> 
                        <div className="collapse navbar-collapse" id="navbarColor01">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="/">Home</a>
                                </li>
                                <li className="nav-item active">
                                    <a className="nav-link" href="/blog">Blog</a>
                                </li>
                                <li className="nav-item active">
                                    <a className="nav-link" href="/about">About</a>
                                </li>
                                <li className="nav-item active">
                                    <a className="nav-link" href="/shop">Shop</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>


                <Route path="/blog" render={ () => <h1>Blog</h1>}/>
                <Route path="/about" render={ () => <h1>About</h1>}/>
                <Route path="/shop" render={ () => <h1>Shop</h1>}/>    
            </ErrorBoundry>
        </div>
    );    
};
export default App; 