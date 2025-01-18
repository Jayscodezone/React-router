import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar (){
  return (
    <div id="navbar">
      <ul>
        <ol>
          <Link to="/blue">Blue</Link>
        </ol>
        <ol>
          <Link to="/red">Red</Link>
        </ol>
        <ol>
          <Link to="/purple">Purple</Link>
        </ol>
        <ol>
          <Link to="/">Home</Link>
        </ol>
        <ol>
          <Link to="/contact">Contact</Link>
        </ol>
        <ol>
          <Link to="/about">About</Link>
        </ol>
      </ul>
    </div>
  );
}

