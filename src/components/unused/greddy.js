import React, { useState } from 'react';
import { motion } from 'framer-motion';

const MultiJointInput = ({ onChange }) => {
 const [s, setS] = useState([['']]); // Initialize with one row and one column

 const handleInputChange = (rowIndex, colIndex, value) => {
    // Check if the input contains a comma
    if (value.includes(',')) {
        // Split the input by comma and parse each part into a number
        const valuesArray = value.split(',').map(val => parseInt(val, 10));
        // Update the state with the new array of numbers
        const newS = [...s];
        newS[rowIndex] = valuesArray;
        setS(newS);
        // Trigger the onChange callback with the updated array of arrays
        onChange(newS);
    } else {
        // If no comma is present, just update the current cell
        const newS = [...s];
        newS[rowIndex][colIndex] = value;
        setS(newS);
    }
 };

 const addRow = () => {
    setS([...s, ['']]); // Add a new row with one column
 };

 const addColumn = (rowIndex) => {
    const newS = [...s];
    newS[rowIndex] = [...newS[rowIndex], '']; // Add a new column to the specified row
    setS(newS);
 };

 const handleSubmit = () => {
    // The state already stores the array of arrays, so no need to format again
    // However, ensure the data is in the correct format before sending to the backend
    const formattedS = s.map(row => row.map(val => parseInt(val, 10)));
    console.log(formattedS); // Example: Send s to the backend
 };

 // Define animation variants for inputs and buttons
 const inputVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
 };

 const buttonVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.95 },
 };

 return (
    <div>
      {s.map((row, rowIndex) => (
        <div key={rowIndex}>
          {row.map((value, colIndex) => (
            <motion.input
              key={colIndex}
              type="text" // Change type to text to allow comma input
              value={value}
              onChange={(e) => handleInputChange(rowIndex, colIndex, e.target.value)}
              variants={inputVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="tap"
            />
          ))}
          <motion.button
            onClick={() => addColumn(rowIndex)}
            variants={buttonVariants}
          >
            Add Column
          </motion.button>
        </div>
      ))}
      <motion.button
        onClick={addRow}
        variants={buttonVariants}
      >
        Add Row
      </motion.button>
      <motion.button
        onClick={handleSubmit}
        variants={buttonVariants}
      >
        Submit
      </motion.button>
    </div>
 );
};

export default MultiJointInput;
