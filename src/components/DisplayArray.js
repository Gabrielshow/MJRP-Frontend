import React from 'react';
import './DisplayArray.css'; // Import CSS file for styling

const DisplayArray = ({ array }) => {
    return (
        <div className="grid-container">
            {array.map((row, rowIndex) => (
                <div className="grid-row" key={rowIndex}>
                    {row.map((value, colIndex) => (
                        <div className="grid-item" key={colIndex}>
                            {value}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default DisplayArray;
