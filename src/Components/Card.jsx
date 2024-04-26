import React from 'react';

function Card({ imgSrc, title, text, lastUpdated, style }) {
    return (
        <div className="card fixed-size-card" style={style}>
        <img src={imgSrc} className="card-img-top" alt={title} />
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}</p>
            <p className="card-text">
            <small className="text-muted">{lastUpdated}</small>
            </p>
        </div>
        </div>
    );
}  


export default Card;
