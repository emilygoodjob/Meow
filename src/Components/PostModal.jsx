import React from 'react';
import '../App.css';

function PostModal({ post, onClose }) {
    return (
        <div className="modal-container">
            <div className="modal-background" onClick={onClose}></div>
            <div className="modal-content">
                <button className="close-btn" onClick={onClose}>X</button>
                <div className="post-details">
                    <div className="post-image-container">
                        <img src={post.imgSrc} alt={post.title} className="post-image" />
                        <p className='upvote'>Upvotes: {post.upvotes}</p>
                    </div>
                    <div className="post-info">
                        <h3>Title: {post.title}</h3>
                        <h6 className='post-text'>Description: {post.text}</h6>

                        <div className="comment-container">
                            <div className="form-floating">
                                <textarea className="form-control comment-box" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
                                <label htmlFor="floatingTextarea2">Comments</label>
                            </div>
                            <button type="button" className="btn btn-info add-comment-btn">Add Comment</button>
                        </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default PostModal;
