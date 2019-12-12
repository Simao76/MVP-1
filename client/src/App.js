import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './views/Home/Home';
import Navbar from './views/Navbar/Navbar';
import Footer from './views/Footer/Footer';
import Football from './views/Sports/Football/Football'
import Basketball from './views/Sports/Basketball/Basketball'
import Tennis from './views/Sports/Tennis/Tennis'
import Formula1 from './views/Sports/Formula1/Formula1'
import Fighting from './views/Sports/Fighting/Fighting'
import './App.scss';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>

      <main>
        <Switch>
          <Route path="/football" component={Football} />
           <Route path="/basketball" component={Basketball} />
          <Route path="/tennis" component={Tennis} />
          <Route path="/formula1" component={Formula1} />
          <Route path="/fighting" component={Fighting} /> 
          <Route path="/" component={Home} />        
        </Switch>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
