import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../src/components/Header';
import Project from '../src/components/Project';
import Footer from '../src/components/Footer';import './App.css';

function App() {
  return (
    <div>
    <div className="flex-column justify-flex-start min-100-vh">
      <Header />
    </div>
    <div className="flex-column justify-flex-start min-100-vh">
    <div>
      <Project />
    </div>
          
  </div>
    <div>
        <Footer />
      </div>
    </div>
  );
}



export default App;