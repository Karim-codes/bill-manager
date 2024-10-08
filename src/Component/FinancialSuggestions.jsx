import React, { useState } from 'react';

const Finance = ({ onNext }) => {
  const [formData, setFormData] = useState({
    income: '',
    savings: '',
    investments: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNext = () => {
    // Pass the form data to the onNext prop
    onNext(formData);
  };

  return (
    <div className="finance">
      <h2>Your Finance</h2>
      <form>
        <div className="inputContainer">
          <label>
            Income:
            <input
              type="number"
              name="income"
              value={formData.income}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="inputContainer">
          <label>
            Savings:
            <input
              type="number"
              name="savings"
              value={formData.savings}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="inputContainer">
          <label>
            Investments:
            <input
              type="number"
              name="investments"
              value={formData.investments}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="button" onClick={handleNext}>Next</button>
      </form>
    </div>
  );
};

export default Finance;
