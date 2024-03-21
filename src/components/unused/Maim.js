import React, { useState } from 'react';
import './Main.css';
import Field from './Field';
import MultiJointInput from './MultiJointInput';
// import Gotit from './Gotit';

const Maim = () => {
 const [isHovered, setIsHovered] = useState(false);
 const [result, setResult] = useState(null);
 const [fields, setFields] = useState([
    { name: 'Holding Cost', value: [] },
    { name: 'Minor Cost', value: '' },
    { name: 'Setup Cost', value: '' },
    { name: 'Demand', value: '' },
 ]);

 const handleRun = async () => {
    try {
      const fieldValues = fields.map(field => field.name === 'Holding Cost' ? field.value.join(',') : field.value);
      const response = await fetch('http://127.0.0.1:5000/calculate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ parameters: fieldValues })
      });
      const data = await response.json();
      setResult(data.result);
      console.log(data); // Handle response from the server
    } catch (error) {
      console.error('Error:', error);
    }
 }

 const handleFieldChange = (index, value) => {
 const updatedFields = [...fields];
 updatedFields[index].value = value; // Directly assign the array to the field's value
 setFields(updatedFields);
 };

 return (
    <div className="main">
      {result && (
        <div>
          <h2>Result</h2>
          <p>Optimal cycle time T_p: {result["Optimal cycle time T_p"]}</p>
          <p>Optimal order quantity Q: {result["Optimal order quantity Q"]}</p>
          <p>Total relevant cost C: {result["Total relevant cost C"]}</p>
        </div>
      )}
      <h1>Enter the values of the necessary parameters</h1>
      {fields.map((field, index) => (
        field.name === 'Holding Cost' ? (
          <MultiJointInput
            key={field.name}
            onChange={(newValue) => handleFieldChange(index, newValue)}
          />
        ) : (
          <Field
            key={field.name}
            Text={field.name}
            value={field.value}
            onChange={(newValue) => handleFieldChange(index, newValue)}
          />
        )
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

export default Maim;
