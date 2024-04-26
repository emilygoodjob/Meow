import React, { useState } from 'react';
import heart from '../assets/heart.png';

function Card({ imgSrc, title, text, lastUpdated, style, upvotes, onClick, onUpvote}) {
    // Initialize upvotes based on the index
    const [upvotesCount, setUpvotesCount] = useState(upvotes);

    const handleUpvote = () => {
        setUpvotesCount(prevUpvotes => prevUpvotes + 1);
        onUpvote();
    };

    return (
        <div className="card fixed-size-card" style={style} onClick={onClick}>
            {imgSrc && (
                <img src={imgSrc} className="card-img-top" alt={title} />
            )}
            {!imgSrc && (
                <div className="image-placeholder">Image Not Available</div>
            )}

            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                {/* <p className="card-text">{text}</p> */}
                <p className="card-text">
                    <small className="text-muted">{lastUpdated}</small>
                </p>
                {/* Position the button on the bottom right corner */}
                <div style={{ position: 'absolute', bottom: '0', right: '0', margin: '10px' }}>
                    {/* Upvote button with heart image */}
                    <button className="btn" onClick={(e) => { e.stopPropagation(); handleUpvote(); }}>
                        <img src={heart} alt="Heart" style={{ width: '20px', marginRight: '5px' }} />
                        Upvote ({upvotesCount})
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;
