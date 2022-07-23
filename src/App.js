import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './components/Home';
import About from './components/About';
import Events from './components/Events';
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>

      <Routes>

      <Route ex path="/" element={<Home/>}></Route>
      <Route ex path="/events" element={<Events/>}></Route>
      <Route ex path="/about" element={<About/>}></Route>

      </Routes>
      {/* <Home/>
      <Events/>
      <About/> */}
      

    </div>
    </Router>
  );
}

export default App;
