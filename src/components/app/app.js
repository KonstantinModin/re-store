import React, { Component } from 'react';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator/';
import ErrorBoundry from '../error-boundry';
import './app.css';
import ErrorButton from '../error-button';

export default class App extends Component {
    render() {
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
};