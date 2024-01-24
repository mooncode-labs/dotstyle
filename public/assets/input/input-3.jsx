'use client'
import React, { useState } from 'react';

export default function Input({ label, placeholder, disabled, onChange }) {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
        if (onChange) {
            onChange(event.target.value);
        }
    };

    return (
        <div className='flex flex-col gap-10'>
            <div className="relative">
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                    className="input"
                    type="text"
                    id="email"
                    name="email"
                    value={value}
                    disabled={disabled}
                    placeholder={placeholder}
                    onChange={handleChange}
                />
                <div className={`textMuted ml-1`}>{label}</div>
            </div>
        </div>
    )
}