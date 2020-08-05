import React from 'react';
import './card.css';

const Card = (props) =>(
    <div className="card">
                <div className="card-header">
                    <h1 style={{margin:"0"}}>{props.header}</h1>
                </div>
                <div className="card-body">
                    {props.children}
                </div>
            </div>
)

export default Card;