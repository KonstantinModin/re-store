import React from 'react';
import Image from './error-image.jpg';
import './error-indicator.css';

const ErrorIndicator = ({ error }) => {
    console.log(error.stack);
    return (
        <div className="ErrorIndicator">
            <h1>Error happend!</h1>
            <img src={Image} alt="OMG"/>
            <h3>We have not really thought that this might happen,</h3>
            <h3> but something went terribly wrong.</h3>
            <p>{error.stack}</p>
        </div>
    );
};

export default ErrorIndicator;