import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Components/Header';
import Body from './Components/Body';         
import Card from './Components/Card';
import Benefits from './Components/Benefits';
import Aboutus from './Components/Aboutus';
import Footer from './Components/Footer';
import Contactus from './Components/Contactus';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Body />
              <Card />
              <Benefits />
              <Aboutus />
              <Footer />
            </>
          }
        />
        <Route path="/contact" element={<Contactus />} />
      </Routes>
    </Router>
  );
}

export default App;
