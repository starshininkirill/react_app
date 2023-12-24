import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

import Mainpage from './pages/Mainpage';
import Singlepage from './pages/Singlepage';
import Header from './components/Header';



function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Routes>
          <Route path='/user/:id' element={<Singlepage />} />
          <Route path='/' element={<Mainpage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
