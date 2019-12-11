import React from 'react';
import Navbar from './views/Navbar/Navbar';
import Footer from "./views/Footer/Footer";
import './App.scss';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>

      <main>
        <p>main</p>
      
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
