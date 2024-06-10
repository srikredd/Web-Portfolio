// Importing necessary libraries and styles
import React from 'react';
import './App.css';

// Importing components
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Portfolio />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;