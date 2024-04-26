import React from 'react';
import '../App.css';

function PostModal({ post, onClose }) {
    return (
        <div className="post-modal-container">
            <div className="post-modal">
                <button className="close-btn" onClick={onClose}>X</button>
                <h2>{post.title}</h2>
                <img src={post.imgSrc} alt={post.title} />
                <p>{post.text}</p>
                <div className="comments">
                    {/* Display comments here */}
                </div>
                <textarea placeholder="Add a comment"></textarea>
                <button>Submit</button>
                <div className="upvotes">Upvotes: {post.upvotes}</div>
            </div>
        </div>
    );
}

export default PostModal;
