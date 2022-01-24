import React from 'react';
import "./styles.css";

const ApproachingWrapUpWarning = () => {

    const seconds = parseInt(process.env.REACT_APP_TIMEOUT)/1000;

    return (
        <div>Your are approaching your wrap up time of <span className="strong">{seconds} seconds !</span></div>
    )
}

export default ApproachingWrapUpWarning;
