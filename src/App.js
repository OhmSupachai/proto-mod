import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from './Navbar'


function App() {
  return (
    <div class="container-fluid">
      <Navbarx />
    </div>
  )
}

export default App;

function Navbarx() {
  return(
    <div>
      <Navbar />
    </div>
  )
}
