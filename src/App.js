import './App.css';
import React from 'react';
import './index.css';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import Features from './Features';
import Services from './Services';


class App extends React.Component{


  render(){
    
    return(
      <React.Fragment>
        <Navbar />
        <HeroSection />
        <Features />
        <Services />

      </React.Fragment>
    )
  }

}


export default App;
