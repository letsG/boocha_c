import React from 'react';

import './style.css'

import {Link} from 'react-router-dom'

const Card = (props) => {
    return (
        <div className="card">
            <h5>{props.data.name}</h5>
            <span>{props.data.description}</span>
            <div className="progress-bar"><div className="progress" style={{width:`${props.index * 20 + '%'}`}}> </div></div>
            <p>{props.data.goal}</p>
            <Link to={`/project${props.index}`}>
                Подробнее
            </Link>
        </div>
    )
};
export default Card;