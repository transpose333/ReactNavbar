import Navbar from './Navbar';
import BlackWhite from './pages/BlackWhite';
import Home from './pages/Home';
import Color from './pages/Color';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [showNavbar, setShowNavbar] = useState(true);

  return (
    <>
      {showNavbar && <Navbar />}
      <div className="container">
        <Routes>
          <Route path="/" element={<Home setShowNavbar={setShowNavbar} />} />
          {/* If you want to hide navbar on Blackwhite page then pass the setShowNabar as props */}
          <Route
            path="/BlackWhite"
            element={<BlackWhite setShowNavbar={setShowNavbar} />}
          />
          <Route path="/Color" element={<Color />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
