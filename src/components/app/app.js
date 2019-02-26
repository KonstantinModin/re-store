import React, { Component } from 'react';
import Spinner from '../spinner';
import ErrorBoundry from '../error-boundry';
import './app.css';
import ErrorButton from '../error-button';
import { withBookstoreService } from '../hoc';

const App = ({ bookstoreService }) => {   
    console.log(bookstoreService.getBooks());
    return (
        <div className="app">
            <ErrorBoundry>
                    
                        <h1>Whats app.js!!!</h1>
                        <Spinner name="John"/>
                        <ErrorButton />
                    
            </ErrorBoundry>
        </div>
    );    
};
export default withBookstoreService(App); 