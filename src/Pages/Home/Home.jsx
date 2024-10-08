// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";

const Home = () => {
  return (
    <div className='home'>
      <h1>Welcome to Bill Manager</h1>
      <Link to="/ManageBills" className="button-link">
        <button aria-label="Get Started">Get Started</button>
      </Link>
    </div>
  );
}

export default Home;
