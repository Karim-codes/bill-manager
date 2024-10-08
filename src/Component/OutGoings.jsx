import React, { useState, useEffect } from 'react';

const OutGoings = ({ initialValues = {}, onSubmit, onNext }) => {
  const [personalCare, setPersonalCare] = useState(initialValues.personalCare || '');
  const [transport, setTransport] = useState(initialValues.transport || '');
  const [food, setFood] = useState(initialValues.food || '');

  useEffect(() => {
    setPersonalCare(initialValues.personalCare || '');
    setTransport(initialValues.transport || '');
    setFood(initialValues.food || '');
  }, [initialValues]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ personalCare, transport, food });
    if (onNext) onNext(); // Move to the next form
  };

  return (
    <div>
      <h2>Outgoings</h2>
      <form onSubmit={handleSubmit}>
        <div className="inputContainer">
          <label>Personal Care:</label>
          <input
            type="number"
            value={personalCare}
            onChange={(e) => setPersonalCare(e.target.value)}
          />
        </div>
        <div className="inputContainer">
          <label>Transport:</label>
          <input
            type="number"
            value={transport}
            onChange={(e) => setTransport(e.target.value)}
          />
        </div>
        <div className="inputContainer">
          <label>Food:</label>
          <input
            type="number"
            value={food}
            onChange={(e) => setFood(e.target.value)}
          />
        </div>
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default OutGoings;
