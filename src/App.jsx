import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Card from './Components/Card';
import CreatePost from './Components/CreatePost';
import PostModal from './Components/PostModal';
import img4 from './assets/img4.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';
import './App.css';

function App() {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  // Control modal visibility
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [votes, setUpvotes] = useState([106, 559, 248]);
  const [selectedPost, setSelectedPost] = useState(null);
  const nowTime = new Date("2024-04-26T08:02:00");
  const nowDate = nowTime.toLocaleString();
  
  const [cards, setCards] = useState([
    {
      imgSrc: img4,
      title: "You Are My Meow Meow",
      text: "Illustrator Jaznaka paints cute cats and all the sweet things in life.",
      createdAt: new Date("2024-04-26T08:02:00"),
      lastUpdated: `Last updated ${nowTime.toLocaleString()}`, // Use current time for img4
      upvotes: 106,
      comments: []
    },
    {
      imgSrc: img2,
      title: "You Are My Meow Meow",
      text: "Illustrator Jaznaka paints cute cats and all the sweet things in life.",
      lastUpdated: `Last updated ${new Date("2024-04-26T07:00:00").toLocaleString()}`, // Use img2's creation time
      upvotes: 559,
      createdAt: new Date("2024-04-26T07:00:00"),
      comments: []
    },
    {
      imgSrc: img3,
      title: "You Are My Meow Meow",
      text: "Illustrator Jaznaka paints cute cats and all the sweet things in life.",
      lastUpdated: `Last updated ${new Date("2024-04-26T09:00:00").toLocaleString()}`, // Use img3's creation time
      upvotes: 248,
      createdAt: new Date("2024-04-26T09:00:00"),
      comments: []
    },
  ]);

  const toggleModal = () => {
    setShowCreateModal(!showCreateModal);
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
        createdAt: now,
        comments: []
    };

    // Add the new card to the existing list
    setCards((prevCards) => [...prevCards, newCard]);
    setShowCreateModal(false);
    setShowSuccessAlert(true);
    setUpvotes((votes) => [...votes, newCard.upvotes]);

    // Automatically hide alert after 3 seconds
    setTimeout(() => {
        setShowSuccessAlert(false);
    }, 3000);
  };

  const handleCardClick = (card) => {
    setSelectedPost(card);
    setShowModal(true);
  };

  const handleUpvote = (index) => {
    const updatedCards = [...cards];
    updatedCards[index].upvotes += 1;
    setCards(updatedCards);
  };

// Function to sort posts by created time or upvotes count
const sortPosts = (criteria) => {
  let sortedCards = [...cards];

  if (criteria === 'createdTime') {
    sortedCards.sort((a, b) => b.createdAt - a.createdAt);
  } else if (criteria === 'upvoteCount') {
    sortedCards.sort((a, b) => b.upvotes - a.upvotes);
  }

  // Update the upvotes in the sorted array
  setUpvotes(sortedCards.map(card => card.upvotes));

  setCards(sortedCards);
};

  return (
    <div>
      <Navbar showModal={showCreateModal} toggleModal={toggleModal} sortPosts={sortPosts} />
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
                upvotes={card.upvotes}
                onClick={() => handleCardClick(card)}
                onUpvote={() => handleUpvote(index)}
              />
            ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {/* Control modal visibility */}
      {showCreateModal && (
        <>
          <div className="backdrop"></div>
          <div className="modal show d-block" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
            <CreatePost addPost={addPost} onClose={() => setShowCreateModal(false)} />
            </div>
          </div>
        </>
      )}
      {showModal && (
        <PostModal post={selectedPost} onClose={() => setShowModal(false)} />
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
