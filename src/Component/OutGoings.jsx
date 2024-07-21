import React, { useState } from 'react';
import "./OutGoings.css"; // Import the CSS file for styling

const OutGoings = () => {
  const [formData, setFormData] = useState({
    Groceries: '',
    Transportation: '',
    Entertainment: '',
    DiningOut: '',
    Healthcare: '',
    Education: '',
    Clothing: '',
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
    console.log('Outgoings Data', formData);
  };

  const calculateTotal = () => {
    const { Groceries, Transportation, Entertainment, DiningOut, Healthcare, Education, Subscriptions, Clothing, Other } = formData;
    return (
      parseFloat(Groceries || 0) +
      parseFloat(Transportation || 0) +
      parseFloat(Entertainment || 0) +
      parseFloat(DiningOut || 0) +
      parseFloat(Healthcare || 0) +
      parseFloat(Education || 0) +
      parseFloat(Clothing || 0) +
      parseFloat(Other || 0)
    );
  };

  return (
    <div className="outGoings">
      <h2>Your Outgoings</h2>
      <form onSubmit={handleSubmit}>
        {['Groceries', 'Transportation', 'Entertainment', 'DiningOut', 'Healthcare', 'Education', 'Clothing', 'Other'].map(field => (
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

export default OutGoings;
