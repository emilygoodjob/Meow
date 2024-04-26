import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './Components/Navbar';
import './App.css'

function App() {
  const [color, setColor] = useState('#563d7c'); // Default color

  const handleChange = (event) => {
      setColor(event.target.value);
  };


  return (
    <div>
      <Navbar></Navbar>

      {/* input images from local */}
      {/* <div class="mb-3">
        <label for="formFileMultiple" class="form-label">Multiple files input example</label>
        <input class="form-control" type="file" id="formFileMultiple" multiple></input>
      </div> */}
    </div>
  )
}

export default App
