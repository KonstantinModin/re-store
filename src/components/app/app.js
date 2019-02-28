import React, { Component } from 'react';
import Spinner from '../spinner';
import ErrorBoundry from '../error-boundry';
import './app.css';
import ErrorButton from '../error-button';
import { Route, Link, Switch } from 'react-router-dom';
import { HomePage, CartPage} from '../pages';


const App = () => {   
    
    return (
        <main role="main" className="container">
            <ErrorBoundry>
                <HomePage />
                <Switch>
                    <Route path="/blog" render={ () => <h1>Blog</h1>}/>
                    <Route path="/about" render={ () => <h1>About</h1>}/>
                    <Route path="/shop" render={ () => <h1>Shop</h1>}/>    
                </Switch>
            </ErrorBoundry>
        </main>
    );    
};
export default App; 