import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Field = ({ Text, index, onChange  }) => {
    const [error, setError] = useState('');
    const [value, setValue] = useState('');

  const handleChange = (e) => {
    const newValue = e.target.value;
    if (!isNaN(newValue)) {
        setValue(newValue);
        setError(''); // Clear any previous error message
      } else {
        setError(`${Text} must be a number`);
      }
    };
    // setValue(newValue);
    // setFields(fields.map((field, i) => i === index ? { ...field, value: newValue } : field));

  const handleFocus = (e) => {
    e.target.style.outline = "none";
  }

  return (
    <>
      <motion.label
        htmlFor={`input-field-${index}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <span style={{ marginBottom: 5 }}>{Text}</span>
        <motion.input
          id={`input-field-${index}`}
          type="text"
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
          style={{marginBottom: 5 }}
        />
      </motion.label>
      {error && <p className="error">{error}</p>}
    </>
  )
}

export default Field;