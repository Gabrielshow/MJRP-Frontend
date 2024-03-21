import React, { useState } from 'react';
import './Main.css';
import Field from './Field';
// import ArrayInput from './ArrayInput';
import Gotit from './Gotit';
import MultiJointInput from './MultiJointInput';

const Main = () => {
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
  // Directly assign the array to the field's value
  const updatedFields = [...fields];
  if (updatedFields[index].name === 'Holding Cost') {
     updatedFields[index].value = value; // value is already an array
  } else {
     updatedFields[index].value = value; // For other fields, assign the value directly
  }
  setFields(updatedFields);
 };

 const holdingCostField = fields.find(field => field.name === 'Holding Cost');
 console.log("Holding Cost:", holdingCostField.value);

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
          <Gotit
            text="Holding cost"
            key={field.name}
            value={holdingCostField.value.join(',')}
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

export default Main;
