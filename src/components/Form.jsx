import React, { useState } from 'react';
import '../index.css';
const Form = ({ onAddTransaction }) => {
  const [formData, setFormData] = useState({
    date: '',
    description: '',
    category: '',
    amount: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTransaction(formData);
    setFormData({
      date: '',
      description: '',
      category: '',
      amount: '',
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="input-row">
          <div className="input-column">
            <input
              name="date"
              type="date"
              className="input-field"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-column">
            <input
              name="description"
              type="text"
              className="input-field"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="input-row">
          <div className="input-column">
            <input
              name="category"
              type="text"
              className="input-field"
              placeholder="Category"
              value={formData.category}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-column">
            <input
              name="amount"
              type="number"
              className="input-field"
              placeholder="Amount"
              value={formData.amount}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <button type="submit" className="submit-button">Add Transaction</button>
      </form>
    </div>
  );
};

export default Form;
