import React, { useState } from 'react';
import "./Subscriptions.css";

const Subscriptions = () => {
  const [formData, setFormData] = useState({
    Netflix: '',
    Spotify: '',
    Gym: '',
  });

  const [customFields, setCustomFields] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCustomFieldChange = (index, e) => {
    const { name, value } = e.target;
    const newCustomFields = [...customFields];
    newCustomFields[index][name] = value;
    setCustomFields(newCustomFields);
  };

  const handleAddField = () => {
    setCustomFields([...customFields, { label: '', value: '' }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allData = { ...formData, ...customFields.reduce((acc, field) => ({ ...acc, [field.label]: field.value }), {}) };
    console.log('Subscriptions Data', allData);
  };

  const calculateTotal = () => {
    const totalPreset = Object.values(formData).reduce((acc, curr) => acc + parseFloat(curr || 0), 0);
    const totalCustom = customFields.reduce((acc, curr) => acc + parseFloat(curr.value || 0), 0);
    return totalPreset + totalCustom;
  };

  return (
    <div className="subscriptions">
      <h2>Your Subscriptions</h2>
      <form onSubmit={handleSubmit}>
        <div className="inputContainer">
          <label>
            Netflix:
            <input
              type="number"
              name="Netflix"
              value={formData.Netflix}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="inputContainer">
          <label>
            Spotify:
            <input
              type="number"
              name="Spotify"
              value={formData.Spotify}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="inputContainer">
          <label>
            Gym:
            <input
              type="number"
              name="Gym"
              value={formData.Gym}
              onChange={handleChange}
            />
          </label>
        </div>
        {customFields.map((field, index) => (
          <div key={index} className="inputContainer">
            <input
              type="text"
              name="label"
              placeholder="Subscription name"
              value={field.label}
              onChange={(e) => handleCustomFieldChange(index, e)}
            />
            <input
              type="number"
              name="value"
              placeholder="Cost"
              value={field.value}
              onChange={(e) => handleCustomFieldChange(index, e)}
            />
          </div>
        ))}
        <button type="button" onClick={handleAddField}>+ Add Subscription</button>
        <button type="submit">Submit</button>
        <hr />
        <div className="total">
          <h3>Total: {calculateTotal()}</h3>
        </div>
      </form>
    </div>
  );
};

export default Subscriptions;
