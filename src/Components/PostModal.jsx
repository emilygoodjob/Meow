import React, { useState, useEffect } from 'react';
import '../App.css';
import heart from '../assets/heart.png';

function PostModal({ post, onClose }) {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [upvotesCount, setUpvotesCount] = useState(post.upvotes);

    const handleAddComment = () => {
        if (newComment.trim() !== '') {
            const timestamp = new Date().toLocaleString();
            const updatedComments = [...comments, { timestamp, text: newComment }];
            setComments(updatedComments);
            setNewComment('');
        }
    };

    const handleUpvote = () => {
        setUpvotesCount(prevCount => prevCount + 1);
        post.upvotes += 1;
    };

    // Update upvotesCount when upvotes prop changes
    useEffect(() => {
        setUpvotesCount(post.upvotes);
    }, [post.upvotes]);


    return (
        <div className="modal-container">
            <div className="modal-background" onClick={onClose}></div>
            <div className="modal-content">
                <button className="close-btn" onClick={onClose}>X</button>
                <div className="post-details">
                    <div className="post-image-container">
                        <img src={post.imgSrc} alt={post.title} className="post-image" />
                        {/* Upvote button with heart image */}
                        <div className="upvote-container">
                            <button className="btn upvote-btn" onClick={handleUpvote}>
                                <img src={heart} alt="Heart" className="heart-icon" style={{ width: '20px', marginRight: '5px' }} />
                                {upvotesCount}
                            </button>
                        </div>
                    </div>
                    <div className="post-info">
                        <h3>Title: {post.title}</h3>
                        <h6 className='post-text'>Description: {post.text}</h6>

                        {/* Display existing comments */}
                        <div className="comments-container">
                            {comments.map((comment, index) => (
                                <figure key={index} className="text-left">
                                    <blockquote className="blockquote">
                                        <p>{comment.text}</p>
                                    </blockquote>
                                    <figcaption className="blockquote-footer">{comment.timestamp}</figcaption>
                                </figure>
                            ))}
                        </div>

                        {/* Textarea for adding new comments */}
                        <div className="form-floating">
                            <textarea
                                className="form-control comment-box"
                                placeholder="Leave a comment here"
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                            ></textarea>
                            <label htmlFor="floatingTextarea2">Comments</label>
                        </div>

                        {/* Button to add new comment */}
                        <button
                            type="button"
                            className="btn btn-info add-comment-btn"
                            onClick={handleAddComment}
                        >
                            Add Comment
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostModal;
