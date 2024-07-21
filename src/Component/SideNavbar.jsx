import React from 'react';
import "./SideNavbar.css";

const SideNavbar = ({ setActiveComponent }) => {
  return (
    <div>
      <div className="btnNavs">
        <button onClick={() => setActiveComponent('HousingCosts')}>Housing Costs</button>
        <button onClick={() => setActiveComponent('OutGoings')}>Outgoings</button>
        <button onClick={() => setActiveComponent('Finance')}> Finance</button>
        <button onClick={() => setActiveComponent('Subscription')}>Subscriptions</button>

        
      </div>
    </div>
  );
};

export default SideNavbar;

