import React, { useEffect, useState } from 'react';
import "./FinancialSuggestions.css";

const FinancialSuggestions = ({ formData }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculateTotal = () => {
      const totalIncome = parseFloat(formData.Salary || 0) + parseFloat(formData.OtherIncome || 0);
      const totalExpenses = [
        parseFloat(formData.Rent || 0),
        parseFloat(formData.CouncilTax || 0),
        
        parseFloat(formData.Other || 0)
      ].reduce((acc, curr) => acc + curr, 0);
      
      const netIncome = totalIncome - totalExpenses;
      setTotal(netIncome);

      // Generate suggestions
      const newSuggestions = [];
      if (totalExpenses > totalIncome) {
        newSuggestions.push('Your expenses exceed your income. Consider reducing discretionary spending.');
      }
      if (parseFloat(formData.Savings || 0) < 0.1 * totalIncome) {
        newSuggestions.push('Consider increasing your savings to at least 10% of your income.');
      }
      if (parseFloat(formData.Debts || 0) > totalIncome * 0.5) {
        newSuggestions.push('Your debt is quite high compared to your income. Look into debt reduction strategies.');
      }

      setSuggestions(newSuggestions);
    };

    calculateTotal();
  }, [formData]);

  return (
    <div className="financialSuggestions">
      <h2>Financial Overview</h2>
      <div className="total">
        <h3>Total Net Income: ${total.toFixed(2)}</h3>
      </div>
      <h3>Suggestions:</h3>
      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index}>{suggestion}</li>
        ))}
      </ul>
    </div>
  );
};

export default FinancialSuggestions;
