import React from 'react';
import './App.css';
import Header from '../src/components/Header';
import Navigation from '../src/components/Navigation';
import Project from '../src/components/Project';
import Footer from '../src/components/Footer';import './App.css';

function App() {
  return (
    <div className="flex-column justify-flex-start min-100-vh">
      <Header />
      <Navigation />
        <div className="container">
            <Project />
        </div>
      <Footer />
    </div>
  );
}



export default App;