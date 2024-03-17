import React from 'react';
import { motion } from 'framer-motion';

const ArrayInput = ({ value, onChange }) => {
 const handleChange = (event) => {
    const inputValue = event.target.value;
    const valuesArray = inputValue.split(',').map(val => parseInt(val, 10));
    onChange(valuesArray);
 };

 // Define animation variants
 const inputVariants = {
    focus: { scale: 1.05 },
    blur: { scale: 1 },
 };

 return (
    <motion.input
      type="text"
      value={value.join(',')}
      onChange={handleChange}
      placeholder="Enter numbers separated by commas"
      variants={inputVariants}
      initial="blur"
      whileFocus="focus"
    />
 );
};

export default ArrayInput;
