import './App.css';
import Navbar from './components/Navbar';
import React, { useState } from 'react'
import Main from './components/Main';
import Ls from './components/Ls'

function App() {
  const [portrait, setPortrait] = useState((window.innerHeight>window.innerWidth)?true:false);
  const func = () => {
    setInterval(() => {
      if (window.innerHeight>window.innerWidth) setPortrait(true);
      else setPortrait(false);
    }, 100);
  }
  func();
  return (
    <>
      <Navbar/>
      {(portrait)?<Ls/>:<Main/>}
    </>
  );
}

export default App;
