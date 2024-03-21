import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hope = ({ onChange }) => {
    const [s, setS] = useState([['']]); // Initialize with one row and one column

    const handleInputChange = (rowIndex, colIndex, value) => {
        const newS = [...s];
        // Split the input by comma and store as array
        newS[rowIndex][colIndex] = value.split(',').map(val => val.trim());
        setS(newS);
        // Trigger the onChange callback with the updated array of arrays
        onChange(newS);
    };

    const addRow = () => {
        setS([...s, new Array(s[0].length).fill('')]); // Add a new row with same number of columns
    };

    const addColumn = () => {
        const newS = s.map(row => [...row, '']); // Add a new column to each row
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
                {s.map((row, rowIndex) => (
                    <div key={rowIndex}>
                        {row.map((value, colIndex) => (
                            <motion.input
                                key={colIndex}
                                type="text"
                                value={value}
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
                            Add Column
                        </motion.button>
                    </div>
                ))}
            </AnimatePresence>
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

export default Hope;
