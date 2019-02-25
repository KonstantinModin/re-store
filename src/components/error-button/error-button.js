import React, { Component } from 'react';
import './error-button.css';

export default class ErrorButton extends Component {
    state = {
        error: false
    };

    buttonClick = () => {
        this.setState({
            error: true
        });        
    };

    render() {
        if (this.state.error) {
            this.foo.bar = 0;
        }

        return (
            <button className="btn btn-danger" onClick={this.buttonClick}>Throw Error</button>
        )
    };
};