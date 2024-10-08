import React, { useState, useEffect } from 'react';

const Finance = ({ initialValues = {}, onSubmit, onNext }) => {
  const [income, setIncome] = useState(initialValues.income || '');
  const [savings, setSavings] = useState(initialValues.savings || '');
  const [investments, setInvestments] = useState(initialValues.investments || '');

  useEffect(() => {
    setIncome(initialValues.income || '');
    setSavings(initialValues.savings || '');
    setInvestments(initialValues.investments || '');
  }, [initialValues]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ income, savings, investments }); // Submit form data
    if (onNext) onNext(); // Navigate to the next form
  };

  return (
    <div>
      <h2>Finance</h2>
      <form onSubmit={handleSubmit}>
        <div className="inputContainer">
          <label>Income:</label>
          <input
            type="number"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
          />
        </div>
        <div className="inputContainer">
          <label>Savings:</label>
          <input
            type="number"
            value={savings}
            onChange={(e) => setSavings(e.target.value)}
          />
        </div>
        <div className="inputContainer">
          <label>Investments:</label>
          <input
            type="number"
            value={investments}
            onChange={(e) => setInvestments(e.target.value)}
          />
        </div>
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default Finance;
