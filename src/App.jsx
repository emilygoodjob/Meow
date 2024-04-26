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
  // Initialize the state with the original three posts
  const [cards, setCards] = useState([
    {
      imgSrc: img4,
      title: "You Are My Meow Meow",
      text: "Illustrator Jaznaka paints cute cats and all the sweet things in life.",
      lastUpdated: "Last updated 45 mins ago",
    },
    {
      imgSrc: img2,
      title: "You Are My Meow Meow",
      text: "Illustrator Jaznaka paints cute cats and all the sweet things in life.",
      lastUpdated: "Last updated 45 mins ago",
    },
    {
      imgSrc: img3,
      title: "You Are My Meow Meow",
      text: "Illustrator Jaznaka paints cute cats and all the sweet things in life.",
      lastUpdated: "Last updated 45 mins ago",
    },
  ]);

  const [showModal, setShowModal] = useState(false); // Control modal visibility
  const toggleModal = () => {
    setShowModal(!showModal);
  };  

  const addPost = (newPost) => {
    const now = new Date();
    const formattedDate = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;

    const newCard = {
      imgSrc: newPost.imageUrl || '', // Use an empty string if no image URL is provided
      title: newPost.title,
      text: newPost.content || '',
      lastUpdated: `Last updated ${formattedDate}`,
    };

    // Add the new card to the existing list
    setCards((prevCards) => [...prevCards, newCard]);
    setShowModal(false);
  };


  return (
    <div>
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
    </div>
  );
}

export default App;