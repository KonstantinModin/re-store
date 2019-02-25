import React from 'react';
import './spinner.css';

const Spinner = ({ name }) => {
    return (
        <div className="lds-css ng-scope">
            <div className="lds-wedges">
                <div>
                    <div>
                        <div></div>
                    </div>
                    <div>
                        <div></div>
                    </div>
                    <div>
                        <div></div>
                    </div>
                        <div>
                            <div></div>
                        </div>
                    </div>
                </div>
        </div>
    );
};
export default Spinner;