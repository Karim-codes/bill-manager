import React, { useState } from 'react';
import "./Finance.css"; // Import the CSS file for styling

const Finance = () => {
  const [formData, setFormData] = useState({
    Salary: '',
    Savings: '',
    Investments: '',
    Debts: '',
    OtherIncome: '',
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
    console.log('Finance Data', formData);
  };

  const calculateTotal = () => {
    const { Salary, Savings, Investments, Debts, OtherIncome } = formData;
    return (
      parseFloat(Salary || 0) +
      parseFloat(Savings || 0) +
      parseFloat(Investments || 0) -
      parseFloat(Debts || 0) +
      parseFloat(OtherIncome || 0)
    );
  };

  return (
    <div className="finance">
      <h2>Your Finance</h2>
      <form onSubmit={handleSubmit}>
        <div className="inputContainer">
          <label>
            Salary:
            <input
              type="number"
              name="Salary"
              value={formData.Salary}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="inputContainer">
          <label>
            Savings:
            <input
              type="number"
              name="Savings"
              value={formData.Savings}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="inputContainer">
          <label>
            Investments:
            <input
              type="number"
              name="Investments"
              value={formData.Investments}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="inputContainer">
          <label>
            Debts:
            <input
              type="number"
              name="Debts"
              value={formData.Debts}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="inputContainer">
          <label>
            Other Income:
            <input
              type="number"
              name="OtherIncome"
              value={formData.OtherIncome}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit">Submit</button>
        <hr />
        <div className="total">
          <h3>Total: {calculateTotal()}</h3>
        </div>
      </form>
    </div>
  );
};

export default Finance;
