import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Navigation from './components/Navigation';
import Signup from './components/SignupForm/index';
import Login from './components/LoginForm/index';
import Beers from './pages/Beers';
import Header from './components/Header';
import Footer from './components/Footer';
import Favourites from './pages/Favourites';

function App() {
  return (
    <Router>
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />
        <div className="nav-container">
          <Navigation />
        </div>
        <div className="container">
          <Routes>
            <Route exact path="/home" element={<Home />}>
            </Route>
            <Route exact path="/login" element={<Login />}>
            </Route>
            <Route exact path="/signup" element={<Signup />}>
            </Route>
            <Route exact path="/beers" element={<Beers />}>
            </Route>
            <Route exact path="/favourites" element={<Favourites />}>
            </Route>
          </Routes>
        </div>
        <Footer />
      </div>

    </Router>
  );
}

export default App;
