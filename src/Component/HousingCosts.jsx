import React, { useState } from 'react';

const HousingCosts = ({ initialValues, onSubmit, onNext }) => {
  const [rent, setRent] = useState(initialValues.rent || '');
  const [utilities, setUtilities] = useState(initialValues.utilities || '');
  const [water, setWater] = useState(initialValues.water || '');
  const [internet, setInternet] = useState(initialValues.internet || '');
  const [councilTax, setCouncilTax] = useState(initialValues.councilTax || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      rent: parseFloat(rent),
      utilities: parseFloat(utilities),
      water: parseFloat(water),
      internet: parseFloat(internet),
      councilTax: parseFloat(councilTax),
    };
    onSubmit(data); // Pass the data back to ManageBills
    onNext(); // Move to the next component
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Rent:</label>
      <input
        type="number"
        value={rent}
        onChange={(e) => setRent(e.target.value)}
      />
      <label>Utilities:</label>
      <input
        type="number"
        value={utilities}
        onChange={(e) => setUtilities(e.target.value)}
      />
      <label>Water:</label>
      <input
        type="number"
        value={water}
        onChange={(e) => setWater(e.target.value)}
      />
      <label>Internet:</label>
      <input
        type="number"
        value={internet}
        onChange={(e) => setInternet(e.target.value)}
      />
      <label>Council Tax:</label>
      <input
        type="number"
        value={councilTax}
        onChange={(e) => setCouncilTax(e.target.value)}
      />
      <button type="submit">Next</button>
    </form>
  );
};

export default HousingCosts;
