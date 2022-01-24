import React from 'react';
import "./styles.css";

const WrapUpTimeOverWarning = () => {

    // const { notificationContext: { taskSid, name } } = props;
    // const seconds = parseInt(process.env.REACT_APP_TIMEOUT)/1000;

    return (
        <div><span className="strong">Your have crossed your wrap up time. Please remember to wrap up and complete your task!</span></div>
    )
}

export default WrapUpTimeOverWarning;
