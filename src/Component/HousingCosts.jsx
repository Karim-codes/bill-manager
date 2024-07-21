import React, { useState } from 'react';
import "./HousingCosts.css"; // Import the CSS file for styling

const HousingCosts = () => {
  const [formData, setFormData] = useState({
    Rent: '',
    CouncilTax: '',
    Gas: '',
    Water: '',
    Electricity: '',
    Internet: '',
    Maintenance: '',
    Insurance: '',
    Other: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Housing cost Data', formData);
  };

  const calculateTotal = () => {
    const { Rent, CouncilTax, Gas, Water, Electricity, Internet, Maintenance, Insurance, Other } = formData;
    return (
      parseFloat(Rent || 0) +
      parseFloat(CouncilTax || 0) +
      parseFloat(Gas || 0) +
      parseFloat(Water || 0) +
      parseFloat(Electricity || 0) +
      parseFloat(Internet || 0) +
      parseFloat(Maintenance || 0) +
      parseFloat(Insurance || 0) +
      parseFloat(Other || 0)
    );
  };

  return (
    <div className="housingCosts">
      <h2>Housing Costs</h2>
      <form onSubmit={handleSubmit}>
        {['Rent', 'CouncilTax', 'Gas', 'Water', 'Electricity', 'Internet', 'Maintenance', 'Insurance', 'Other'].map(field => (
          <div className="inputContainer" key={field}>
            <label>
              {field.replace(/([A-Z])/g, ' $1').trim()}:
              <input
                type="number"
                name={field}
                value={formData[field]}
                onChange={handleChange}
              />
            </label>
          </div>
        ))}
        <button type="submit">Submit</button>
        <hr />
        <div className="total">
          <h3>Total: {calculateTotal()}</h3>
        </div>
      </form>
    </div>
  );
};

export default HousingCosts;
