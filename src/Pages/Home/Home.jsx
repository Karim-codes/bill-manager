import React from 'react';
import "./Home.css";

const Home = () => {
  return (
    <div className='home'>
      <h1>Welcome to Bill Manager</h1>
      <a className="button-link" href="/ManageBills">
        <button>Get Started</button>
      </a>
    </div>
  );
}

export default Home;
