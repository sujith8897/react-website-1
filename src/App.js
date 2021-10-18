import './App.css';
import React from 'react';
import './index.css';
import Navbar from './Navbar';


class App extends React.Component{
  render(){

      const offset = window.scrollY;
      console.log(offset,"called");
    
    return(
      <div>
        <Navbar />
        
      </div>
    )
  }

}


export default App;
