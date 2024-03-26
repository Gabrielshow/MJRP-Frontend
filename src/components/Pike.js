import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Pike = ({ Text, index, onChange }) => {
    const [error, setError] = useState('');
    const [value, setValue] = useState([]);

    const handleChange = (e) => {
        const newValue = e.target.value;
        const parsedValues = newValue.split(',').map(val => val.trim());
        setValue(parsedValues);
        if (parsedValues.every(val => !isNaN(val) || val === '')) {
            onChange(parsedValues.filter(val => val !== ''));
            setError('');
        } else {
            setError(`${Text} must contain only numbers separated by commas`);
        }
    };

    const handleFocus = (e) => {
        e.target.style.outline = "none";
    };

    const handleKeyDown = (e) => {
        // Check if backspace or delete key is pressed
        if (e.keyCode === 8 || e.keyCode === 46) {
            const newValue = e.target.value;
            const caretPosition = e.target.selectionStart;
            if (caretPosition === 0) {
                // Remove the last value if the caret is at the beginning
                const parsedValues = newValue.split(',').map(val => val.trim());
                parsedValues.pop();
                setValue(parsedValues);
                onChange(parsedValues.filter(val => val !== ''));
            }
        }
    };

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
                    value={value.join(', ')}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onKeyDown={handleKeyDown}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    style={{ marginBottom: 5 }}
                />
            </motion.label>
            {error && <p className="error">{error}</p>}
        </>
    );
};

export default Pike;
