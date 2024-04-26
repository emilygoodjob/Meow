import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.css';

function CreatePost({ onClose }) {
  const [post, setPost] = useState({
    title: '',
    imageUrl: '',
    content: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (post.title) {
      console.log('Post created:', post);
      setPost({ title: '', content: '', imageUrl: '' }); // Reset form after submission
      onClose(); // Close the modal after creating a post
    } else {
      alert('Title is required.'); // Simple validation feedback
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Create New Post</h5>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={onClose} // Custom close handler
          ></button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="modal-body">
            <div className="form-floating mb-3">
              <input
                type="text"
                name="title"
                value={post.title}
                onChange={handleChange}
                className="form-control"
                id="titleInput"
                placeholder="Enter post title"
                required
              />
              <label htmlFor="titleInput">Post Title</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="text"
                name="imageUrl"
                value={post.imageUrl}
                onChange={handleChange}
                className="form-control"
                id="imageUrlInput"
                placeholder="Enter image URL"
              />
              <label htmlFor="imageUrlInput">Image URL (Optional)</label>
            </div>
            <div className="form-floating">
              <textarea
                name="content"
                value={post.content}
                onChange={handleChange}
                className="form-control"
                id="contentInput"
                placeholder="Enter content"
                style={{ height: '150px' }}
              />
              <label htmlFor="contentInput">Content (Optional)</label>
            </div>
          </div>
          <div className="modal-footer">
            <button type="submit" className="btn btn-info">Create Post</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreatePost;
