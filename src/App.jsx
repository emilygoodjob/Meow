import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Card from './Components/Card';
import img1 from './assets/img1.png';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';
import img4 from './assets/img4.jpg';
import './App.css'

function App() {

  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = scrollContainerRef.current;
      const center = scrollContainer.getBoundingClientRect().width / 2;

      Array.from(scrollContainer.children).forEach(card => {
        const cardCenter = card.getBoundingClientRect().left + card.getBoundingClientRect().width / 2;
        const distanceFromCenter = Math.abs(center - cardCenter);
        const scale = Math.max(1 - distanceFromCenter / center, 0.7); // Scales down to 50%
        card.style.transform = `scale(${scale})`;
      });
    };

    const container = scrollContainerRef.current;
    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Navbar></Navbar>

      {/* roboot: create post */}

      {/* input images from local */}
      {/* <div classNameName="mb-3">
        <label for="formFileMultiple" classNameName="form-label">Multiple files input example</label>
        <input classNameName="form-control" type="file" id="formFileMultiple" multiple></input>
      </div> */}

      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <div className="horizontal-scroll" ref={scrollContainerRef}>
              <Card 
                imgSrc={img4}
                title="You Are My meow meow"
                text="Illustrator Jaznaka paints cute cats and all the sweet things in life."
                lastUpdated="Last updated 45 mins ago"
              />
              <Card 
                imgSrc={img2}
                title="You Are My meow meow"
                text="Illustrator Jaznaka paints cute cats and all the sweet things in life."
                lastUpdated="Last updated 45 mins ago"
              />
              <Card 
                imgSrc={img3}
                title="You Are My meow meow"
                text="Illustrator Jaznaka paints cute cats and all the sweet things in life."
                lastUpdated="Last updated 45 mins ago"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
