import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Card from './Components/Card';
import CreatePost from './Components/CreatePost';
import img4 from './assets/img4.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';
import './App.css';

function App() {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  // Control modal visibility
  const [showModal, setShowModal] = useState(false);
  const [votes, setUpvotes] = useState([106, 559, 248]);

  // Initialize the state with the original three posts
  const [cards, setCards] = useState([
    {
      imgSrc: img4,
      title: "You Are My Meow Meow",
      text: "Illustrator Jaznaka paints cute cats and all the sweet things in life.",
      lastUpdated: "Last updated 45 mins ago",
      upvotes: 106,
    },
    {
      imgSrc: img2,
      title: "You Are My Meow Meow",
      text: "Illustrator Jaznaka paints cute cats and all the sweet things in life.",
      lastUpdated: "Last updated 45 mins ago",
      upvotes: 559,
    },
    {
      imgSrc: img3,
      title: "You Are My Meow Meow",
      text: "Illustrator Jaznaka paints cute cats and all the sweet things in life.",
      lastUpdated: "Last updated 45 mins ago",
      upvotes: 248,
    },
  ]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };  

  const addPost = (newPost) => {
    const now = new Date();
    const formattedDate = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;

    const newCard = {
        // Use an empty string if no image URL is provided
        imgSrc: newPost.imageUrl || '',
        title: newPost.title,
        text: newPost.content || '',
        lastUpdated: `Last updated ${formattedDate}`,
        upvotes: 0, // Initialize upvotes count to 0
    };

    // Add the new card to the existing list
    setCards((prevCards) => [...prevCards, newCard]);
    setShowModal(false);
    setShowSuccessAlert(true);
    setUpvotes((votes) => [...votes, newCard.upvotes]);

    // Automatically hide alert after 3 seconds
    setTimeout(() => {
        setShowSuccessAlert(false);
    }, 3000);
};


  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" className="d-none">
      <symbol id="check-circle-fill" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
      </symbol>
      </svg>

      <Navbar showModal={showModal} toggleModal={toggleModal} />

      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <div className="horizontal-scroll">
              {cards.map((card, index) => (
                <Card
                  key={index}
                  imgSrc={card.imgSrc}
                  title={card.title}
                  text={card.text}
                  lastUpdated={card.lastUpdated}
                  index={index}
                  upvotes={card.upvotes}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />

      {/* Control modal visibility */}
      {showModal && (
        <>
          <div className="backdrop"></div>
          <div className="modal show d-block" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
            <CreatePost addPost={addPost} onClose={() => setShowModal(false)} />
            </div>
          </div>
        </>
      )}

      {showSuccessAlert && (
        <div className="alert alert-success success-alert d-flex align-items-center" role="alert">
          <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:">
            <use xlinkHref="#check-circle-fill" /> 
          </svg>
          <div>
            Successfully created post!
          </div>
        </div>
      )}
    </div>
  );
}

export default App;