import React, { useState } from 'react';
import "./ManageBills.css";
import SideNavbar from '../../Component/SideNavbar';
import HousingCosts from '../../Component/HousingCosts';
import OutGoings from '../../Component/OutGoings';
import Finance from '../../Component/Finance';
import Subscriptions from '../../Component/Subscriptions';

const ManageBills = () => {
  const [activeComponent, setActiveComponent] = useState('HousingCosts');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'HousingCosts':
        return <HousingCosts />;
      case 'OutGoings':
        return <OutGoings />;
      case 'Finance':
        return <Finance />;
      case 'Subscription':
        return <Subscriptions />;
      default:
        return <HousingCosts />;
    }
  };

  return (
    <div className='main'>
      <div className="grid-container">
        <div className="grid-item">
          <SideNavbar setActiveComponent={setActiveComponent} />
        </div>
        <div className="grid-item">
          {renderComponent()}
        </div>
      </div>
    </div>
  );
};

export default ManageBills;
