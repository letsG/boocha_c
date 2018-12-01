import React from 'react';

import './style.css'

const Card = (props) => {
    return (
        <div className="card">
            <h5>{props.data.name}</h5>
            <span>{props.data.description}</span>
            <div className="progress-bar"> </div>
            <p>{props.data.goal}</p>
        </div>
    )
};
export default Card;