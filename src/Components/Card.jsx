import React, { useState } from 'react';
import heart from '../assets/heart.png';

function Card({ imgSrc, title, text, lastUpdated, style }) {
    // Initialize upvotes state with default value of 0
    const [upvotes, setUpvotes] = useState(0);

    const handleUpvote = () => {
        setUpvotes(prevUpvotes => prevUpvotes + 1);
    };

    return (
        <div className="card fixed-size-card" style={style}>
            <img src={imgSrc} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                {/* <p className="card-text">{text}</p> */}
                <p className="card-text">
                    <small className="text-muted">{lastUpdated}</small>
                </p>
                {/* Position the button on the bottom right corner */}
                <div style={{ position: 'absolute', bottom: '0', right: '0', margin: '10px' }}>
                    {/* Upvote button with heart image */}
                    <button className="btn" onClick={handleUpvote}>
                        <img src={heart} alt="Heart" style={{ width: '20px', marginRight: '5px' }} />
                        Upvote ({upvotes})
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;
