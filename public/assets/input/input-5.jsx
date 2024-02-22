"use client"
import React, { useState } from 'react';

const ClearableInput = ({placeholder, onChange, disabled}) => {
    const [value, setValue] = useState('');

    const clearInput = () => {
        setValue('');
    };

    const handleChange = (event) => {
        setValue(event.target.value);
        // Call the onChange prop
        if (onChange) {
            onChange(event.target.value);
        }
    };

    return (
        <div className="relative">
            <input
                type="text"
                value={value}
                onChange={handleChange}
                className="inputMain !pr-6"
                placeholder={placeholder}
                disabled={disabled}
            />
            {value && (
                <button
                    onClick={clearInput}
                    className="absolute right-2 top-1 text-gray-500 hover:text-gray-700"
                >
                    &#10005;
                </button>
            )}
        </div>
    );
};

export default ClearableInput;
