'use client'
import React, { useState } from 'react';

export default function DatePicker({ selected, onChange }) {
    const [date, setDate] = useState(selected ? selected : '');

    const handleDateChange = (event) => {
        setDate(event.target.value);
        if (onChange) {
            onChange(event.target.value);
        }
    };

    return (
        <div className=''>
            <input
                className="inputMain w-60"
                type="date"
                value={date}
                onChange={handleDateChange}
                aria-label="Date Picker"
            />
        </div>
    );
}