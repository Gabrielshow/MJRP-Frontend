import React from 'react';
import { motion } from 'framer-motion';

const ArrayInput = ({ text, value, onChange }) => {
 const handleChange = (event) => {
    const inputValue = event.target.value;
    const valuesArray = inputValue.split(',').map(val => parseInt(val, 10));
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
   style={{ display: "flex", flexDirection: "column" }}>

   <span style={{ marginBottom: 5 }}>{text}</span>
   <motion.input
     id="input-field"
     type="text"
     value={value.join(',')}
     onChange={handleChange}
     placeholder="Enter numbers separated by commas"
     variants={inputVariants}
     initial="blur"
     onFocus={handleFocus}
     whileFocus="focus"
     whileHover={{ scale: 1.1 }}
     whileTap={{ scale: 0.9 }}
     style={{marginBottom: 5 }}
   />
   </motion.label>
   </>
 );
};

export default ArrayInput;
