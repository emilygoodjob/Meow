import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import logo from './assets/logo-no-background.svg';

import './App.css'

function App() {

  return (
    <div>
      {/* Navigation */}
      <Navbar></Navbar>

      {/* roboot: create post */}

      {/* input images from local */}
      {/* <div classNameName="mb-3">
        <label for="formFileMultiple" classNameName="form-label">Multiple files input example</label>
        <input classNameName="form-control" type="file" id="formFileMultiple" multiple></input>
      </div> */}

      <Footer></Footer>
    </div>
  )
}

export default App
