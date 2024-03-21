import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Simple = ({ onChange }) => {
    const [s, setS] = useState([['']]); // Initialize with one row and one column

    const handleInputChange = (rowIndex, colIndex, value) => {
        // Check if the input is a valid number
        if (!isNaN(value)) {
            const newValue = parseFloat(value); // Convert input value to number
            const newS = [...s];
            newS[rowIndex][colIndex] = [newValue]; // Store value in a one-element array
            setS(newS);
            // Trigger the onChange callback with the updated array of arrays
            onChange(newS);
        }
    };

    const addRow = () => {
        setS([...s, new Array(s[0].length).fill([''])]); // Add a new row with same number of columns
    };

    const addColumn = () => {
        const newS = s.map(row => [...row, ['']]); // Add a new column to each row
        setS(newS);
    };

    const handleSubmit = () => {
        // Ensure the data is in the correct format before sending to the backend
        console.log(s); // Example: Send s to the backend
    };

    const handleFocus = (e) => {
        e.target.style.outline = "none";
    }

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
            <AnimatePresence>
            <span>Minor Setup Cost:</span> 
                {s.map((row, rowIndex) => (
                    <div key={rowIndex}>
                        {/* Add span with the text */}
                        {row.map((value, colIndex) => (
                            <motion.input
                                key={colIndex}
                                type="text"
                                value={value[0] || ''}
                                onChange={(e) => handleInputChange(rowIndex, colIndex, e.target.value)}
                                variants={inputVariants}
                                initial="hidden"
                                animate="visible"
                                whileHover="hover"
                                whileTap="tap"
                                onFocus={handleFocus}
                            />
                        ))}
                        <motion.button
                            onClick={addColumn}
                            variants={buttonVariants}
                        >
                            Add Item
                        </motion.button>
                    </div>
                ))}
            </AnimatePresence>
            <motion.button
                onClick={addRow}
                variants={buttonVariants}
            >
                Add Buyer
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
    
export default Simple