import React, { useState } from 'react';
import heart from '../assets/heart.png';

function Card({ imgSrc, title, text, lastUpdated, upvotes }) {
    const [localUpvotes, setLocalUpvotes] = useState(upvotes); // Initialize with passed value
  
    const handleUpvote = () => {
      setLocalUpvotes((prev) => prev + 1); // Increment upvotes
    };
  
    return (
      <div className="card fixed-size-card">
        <img src={imgSrc} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            <small className="text-muted">{lastUpdated}</small>
          </p>
          <div style={{ position: 'absolute', bottom: '0', right: '0', margin: '10px' }}>
            <button className="btn" onClick={handleUpvote}>
              <img src={heart} alt="Heart" style={{ width: '20px', marginRight: '5px' }} />
              Upvote ({localUpvotes}) {/* Display the local upvotes count */}
            </button>
          </div>
        </div>
      </div>
    );
  }  

export default Card;
