import React from 'react';

const DisplayArray = ({ array }) => {
    return (
        <div>
            {array.map((row, rowIndex) => (
                <div key={rowIndex}>
                    {row.map((value, colIndex) => (
                        <span key={colIndex}>{JSON.stringify(value)}</span>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default DisplayArray;
