import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Resume from './Resume';
import Contact from './Contact';
import Projects from './Projects';
import ToDo from './todo';
import Memory from './memory';
import Calculator from './Calculator';

function App() {
  return (
    <div>
      <Router>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/todo" element={<ToDo />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/memory_game" element={<Memory />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
