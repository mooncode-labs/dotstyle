'use client'
import React, { useState } from 'react';

export default function Input({ placeholder, onChange, disabled }) {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);

    // Call the onChange prop if provided
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <div className="relative">
      <label htmlFor="name" className="sr-only">
        Name
      </label>
      <input
        type="text"
        id="name"
        name="name"
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        className="inputMain"
        disabled={disabled}
      />
    </div>
  );
}
