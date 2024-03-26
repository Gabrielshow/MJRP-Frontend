import React, { useState } from 'react';
import './Main.css';
import Pike from './Pike';
import Jix from './jix';
import DisplayArray from './DisplayArray';


const Meek = () => {
      const [isHovered, setIsHovered] = useState(false);
      const [result, setResult] = useState(null);
      const [itemName, setItemName] = useState('');
      const [buyerName, setBuyerName] = useState('');
      // Add more state variables for other string inputs if needed
    
      const [fields, setFields] = useState([
        { name: 'Holding Cost', value: [] },
        { name: 'Major Setup Cost', value: [] },
        { name: 'Minor Setup Cost', value: [] },
        { name: 'Demand', value: [] },
        { name: 'Variable Cost', value: []},
        { name: 'Inventory Carrying Charge', value: []},
        { name: 'Time Multipliers', value: []}
      ]);
    
      const handleRun = async () => {
        try {
          const response = await fetch('http://127.0.0.1:5000/calculate', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ parameters: fields }) // Adjusted to match backend expectation
          });
          const data = await response.json();
          setResult(data); // The result is directly assigned since the backend returns the entire result object
          console.log(data); // Handle response from the server
        } catch (error) {
          console.error('Error:', error);
        }
      }
    
      const handleFieldChange = (index, value) => {
        const updatedFields = [...fields];
        updatedFields[index].value = value;
        setFields(updatedFields);
        console.log(`Field name: ${fields[index].name}, Value: ${value}`);
      };
    
      const handleStringInputChange = (fieldName, value) => {
        if (fieldName === 'itemName') {
          setItemName(value);
        } else if (fieldName === 'buyerName') {
          setBuyerName(value);
        }
        // Add more conditions for other string inputs if needed
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
          {/* String inputs */}
          <div>
            <label>Item Name:</label>
            <input type="text" value={itemName} onChange={(e) => handleStringInputChange('itemName', e.target.value)} />
          </div>
          <div>
            <label>Buyer Name:</label>
            <input type="text" value={buyerName} onChange={(e) => handleStringInputChange('buyerName', e.target.value)} />
          </div>
          {/* Add more string input fields for other string inputs if needed */}
          {/* Numerical inputs */}
          {fields.map((field, index) => (
            field.name === 'Holding Cost' || field.name === 'Demand' ? (
              <Jix
                key={field.name}
                Text={field.name}
                onChange={(newValue) => handleFieldChange(index, newValue)}
              />
            ) : (
              <Pike
                key={field.name}
                Text={field.name}
                value={field.value}
                onChange={(newValue) => handleFieldChange(index, newValue)}
              />
            )
          ))}
          <DisplayArray array={fields[0].value} />
          
          <button
            className={`button ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleRun}
          >
            Run
          </button>
        </div>
      );
    }

export default Meek