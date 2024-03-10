import React, { useState } from 'react';
import './Main.css';
import Field from './Field';

const Main = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [fields, setFields] = useState([
    { name: 'Holding Cost', value: '' },
    { name: 'Minor Cost', value: '' },
    { name: 'Setup Cost', value: '' },
    { name: 'Demand', value: '' },
  ]);

  const handleRun = async () => {
    try {
      const fieldValues = fields.map(field => field.value);
      const response = await fetch('http://127.0.0.1:5000/calculate', {
        method: 'POST',
        
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ parameters: fieldValues })
      });
      const data = await response.json();
      console.log(data); // Handle response from the server
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const handleFieldChange = (index, value) => {
    const updatedFields = [...fields];
    updatedFields[index].value = value;
    setFields(updatedFields);
  }

  return (
    <div className="main">
      <h1>Enter the values of the necessary parameters</h1>
      {fields.map((field, index) => (
        <Field
          key={field.name}
          Text={field.name}
          value={field.value}
          onChange={(e) => handleFieldChange(index, e.target.value)}
        />
      ))}
      <button
        className={`button ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleRun}
      >
        Run
      </button>
    </div>
  )
}

export default Main;
