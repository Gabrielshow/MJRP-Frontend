import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Field = ({ Text, index, fields, setFields }) => {
    const field = fields[index]
  const [value, setValue] = useState(field.value);

  const handleChange = (e) => {
    const newValue = e.target.value.split(',');
    setValue(newValue);
    setFields(fields.map((field, i) => i === index ? { ...field, value: newValue } : field));
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
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
        />
      </motion.label>
    </>
  )
}

export default Field;