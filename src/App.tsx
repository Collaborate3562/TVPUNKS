import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import  Home from './pages/home';
import  NewPage from './pages/new';
import Minting from './pages/minting';
// import "aos/dist/aos.css";
// import AOS from 'aos';

const App = () => {
  /****** Animation effect ******/
  // useEffect(() => {
  //   AOS.init({
  //     duration: 500
  //   });
  // }, []);

  // const handleScroll = () => {
  //   AOS.refresh({
  //     duration: 500
  //   });
  // }
  
  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll)
  //   return () => window.removeEventListener('scroll', handleScroll)
  // }, [handleScroll])

  return (
    <Router>
      <Route path="/" exact component={NewPage} />
      <Route path="/new" exact component={Home} />
      <Route path="/minting" exact component={Minting} />
    </Router>
  );
};

export default App;
