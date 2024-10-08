import React, { useState } from 'react';
import HousingCosts from '../../Component/HousingCosts';
import OutGoings from '../../Component/OutGoings';
import Finance from '../../Component/Finance';
import Subscriptions from '../../Component/Subscriptions';
import Summary from '../../Component/Summary';
import './ManageBills.css'

const ManageBills = () => {
  const [activeComponent, setActiveComponent] = useState('HousingCosts');
  const [formData, setFormData] = useState({
    housingCosts: {},
    outgoings: {},
    finance: {},
    subscriptions: {},
  });

  const handleNext = (data) => {
    switch (activeComponent) {
      case 'HousingCosts':
        setFormData((prev) => ({ ...prev, housingCosts: data }));
        setActiveComponent('OutGoings');
        break;
      case 'OutGoings':
        setFormData((prev) => ({ ...prev, outgoings: data }));
        setActiveComponent('Finance');
        break;
      case 'Finance':
        setFormData((prev) => ({ ...prev, finance: data }));
        setActiveComponent('Subscriptions');
        break;
      case 'Subscriptions':
        setFormData((prev) => ({ ...prev, subscriptions: data }));
        setActiveComponent('Summary');
        break;
      default:
        break;
    }
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case 'HousingCosts':
        return (
          <HousingCosts
            initialValues={formData.housingCosts}
            onSubmit={handleNext}
            onNext={() => setActiveComponent('OutGoings')}
          />
        );
      case 'OutGoings':
        return (
          <OutGoings
            initialValues={formData.outgoings}
            onSubmit={handleNext}
            onNext={() => setActiveComponent('Finance')}
          />
        );
      case 'Finance':
        return (
          <Finance
            initialValues={formData.finance}
            onSubmit={handleNext}
            onNext={() => setActiveComponent('Subscriptions')}
          />
        );
      case 'Subscriptions':
        return (
          <Subscriptions
            initialValues={formData.subscriptions}
            onSubmit={handleNext}
            onNext={() => setActiveComponent('Summary')}
          />
        );
      case 'Summary':
        return <Summary formData={formData} onEdit={setActiveComponent} />;
      default:
        return <HousingCosts onSubmit={handleNext} />;
    }
  };

  return (
    <div className="manage-bills">
      <div className="content">
        {renderComponent()}
      </div>
    </div>
  );
};

export default ManageBills;
