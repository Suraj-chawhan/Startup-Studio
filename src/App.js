import React from 'react';

import { Route, Routes } from 'react-router-dom';
import About from './Component/About';
import Apply from './Component/Apply';
import Navbar from './Component/Navbar';
import Subscribe from './Component/Subscribe';
  import Home from './Component/Home';
function App() {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/subscribe" element={<Subscribe/>} />
      </Routes>
       </div>
  );
}

export default App;
