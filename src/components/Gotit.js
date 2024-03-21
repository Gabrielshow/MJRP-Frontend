import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Gotit = ({ text, onChange }) => {
 const [inputValue, setInputValue] = useState('');

 const handleChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);

    // Parse the input string into an array of numbers
    const valuesArray = newValue.split(',').map(val => parseInt(val, 10));
    onChange(valuesArray);
 };

 const handleFocus = (e) => {
    e.target.style.outline = "none";
 }

 // Define animation variants
 const inputVariants = {
    focus: { scale: 1.05 },
    blur: { scale: 1 },
 };

 return (
    <>
      <motion.label
        htmlFor="input-field"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <span style={{ marginBottom: 5 }}>{text}</span>
        <motion.input
          id="input-field"
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter numbers separated by commas"
          variants={inputVariants}
          initial="blur"
          onFocus={handleFocus}
          whileFocus="focus"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{ marginBottom: 5 }}
        />
      </motion.label>
    </>
 );
};

export default Gotit;
