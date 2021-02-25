import React from 'react';
import './App.css';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Result from './components/Result/Result';
import {BrowserRouter as Router, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path='/' component={Main} />
        <Route exact path='/result' component={Result} />
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
