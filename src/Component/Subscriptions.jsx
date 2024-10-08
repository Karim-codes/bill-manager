import React, { useState, useEffect } from 'react';

const Subscriptions = ({ initialValues = {}, onSubmit, onNext }) => {
  const [gym, setGym] = useState(initialValues.gym || '');
  const [audible, setAudible] = useState(initialValues.audible || '');
  const [amazonPrime, setAmazonPrime] = useState(initialValues.amazonPrime || '');

  useEffect(() => {
    setGym(initialValues.gym || '');
    setAudible(initialValues.audible || '');
    setAmazonPrime(initialValues.amazonPrime || '');
  }, [initialValues]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ gym, audible, amazonPrime });
    if (onNext) onNext(); // Move to summary
  };

  return (
    <div>
      <h2>Subscriptions</h2>
      <form onSubmit={handleSubmit}>
        <div className="inputContainer">
          <label>Gym:</label>
          <input
            type="number"
            value={gym}
            onChange={(e) => setGym(e.target.value)}
          />
        </div>
        <div className="inputContainer">
          <label>Audible:</label>
          <input
            type="number"
            value={audible}
            onChange={(e) => setAudible(e.target.value)}
          />
        </div>
        <div className="inputContainer">
          <label>Amazon Prime:</label>
          <input
            type="number"
            value={amazonPrime}
            onChange={(e) => setAmazonPrime(e.target.value)}
          />
        </div>
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default Subscriptions;
