import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Jix = ({ onChange }) => {
    const [s, setS] = useState([
        ['Buyer ID', 'Description', 'Item X', 'Item Y', 'Item Z'],
        ['Buyer A', '', '1000', '500', '800'],
        ['Buyer B', '', '800', '700', '600'],
        ['Buyer C', '', '1200', '600', '900']
    ]);

    const handleInputChange = (rowIndex, colIndex, value) => {
        const newS = [...s];
        newS[rowIndex][colIndex] = value; // Update the value directly
        setS(newS);
        // Trigger the onChange callback with the updated array of arrays
        onChange(newS);
    };

    const addRow = () => {
        const newRow = ['New Buyer ID', '', '', '', '']; // New row template
        setS([...s, newRow]);
    };

    const addColumn = () => {
        const newS = s.map(row => [...row, '']); // Add a new column to each row
        setS(newS);
    };

    const deleteRow = (rowIndex) => {
        if (s.length > 1) {
            const newS = [...s];
            newS.splice(rowIndex, 1); // Remove the row at the specified index
            setS(newS);
        }
    };

    const deleteColumn = (colIndex) => {
        if (s[0].length > 1) {
            const newS = s.map(row => row.filter((_, index) => index !== colIndex)); // Remove the column at the specified index
            setS(newS);
        }
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
                                style={{marginRight: 10}}
                            />
                        ))}
                        {rowIndex !== 0 && (
                            <motion.button
                                onClick={() => deleteRow(rowIndex)}
                                variants={buttonVariants}
                                style={{marginLeft: 10}}
                            >
                                Delete Buyer
                            </motion.button>
                        )}
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
                onClick={addColumn}
                variants={buttonVariants}
            >
                Add Item
            </motion.button>
            <motion.button
                onClick={handleSubmit}
                variants={buttonVariants}
            >
                Submit
            </motion.button>
            <motion.button
                onClick={() => deleteColumn(s[0].length - 1)} // Delete the last column
                variants={buttonVariants}
            >
                Delete Item
            </motion.button>
        </div>
    );
};
    
export default Jix;
