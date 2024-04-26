import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Card from './Components/Card';
import img1 from './assets/img1.png';
import './App.css'

function App() {

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
            <div className="horizontal-scroll">
              <Card 
                imgSrc={img1}
                title="HOPE, 2023"
                text="Monika Marchewka, a Polish artist and animator born in 1988, graduated from the Krakow Academy of Fine Arts with a major in painting. She is good at depicting a surreal world with a series of hazy and dreamy images such as pearls, tears and haloes."
                lastUpdated="Last updated 3 mins ago"
              />
              <Card 
                imgSrc={img1}
                title="HOPE, 2023"
                text="Monika Marchewka, a Polish artist and animator born in 1988, graduated from the Krakow Academy of Fine Arts with a major in painting. She is good at depicting a surreal world with a series of hazy and dreamy images such as pearls, tears and haloes."
                lastUpdated="Last updated 3 mins ago"
              />
              <Card 
                imgSrc={img1}
                title="HOPE, 2023"
                text="Monika Marchewka, a Polish artist and animator born in 1988, graduated from the Krakow Academy of Fine Arts with a major in painting. She is good at depicting a surreal world with a series of hazy and dreamy images such as pearls, tears and haloes."
                lastUpdated="Last updated 3 mins ago"
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
