'use client'
import React, { useState } from 'react';
import CheckboxSingle from './checkbox-1';

export default function CheckboxMultiple({onSubmit}) {
    const [items, setItems] = useState([
        { id: 'jupiter', label: 'Jupiter', selected: false },
        { id: 'saturn', label: 'Saturn', selected: false },
        { id: 'neptune', label: 'Neptune', selected: false },
        { id: 'mars', label: 'Mars', selected: true },
        { id: 'earth', label: 'Earth', selected: false },
    ]);

    const handleCheckboxChange = (id) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, selected: !item.selected } : item
            )
        );
    }

    const createJSON = () => {
        const selectedItems = items.filter(item => item.selected).map(item => item.id);
        onSubmit(JSON.stringify(selectedItems, null, 2));
        console.log('Selected Items:', JSON.stringify(selectedItems, null, 2));
    };

    return (
        <div className="relative flex flex-col">
            <div className="text4">Multiple checkboxes</div>
            <div className="text5 textMuted">Check the items you would like. Return an array of your choices.</div>
            <div className="pt-4 flex flex-col gap-2">
                {items.map((item, index) => (
                    <CheckboxSingle
                        key={index}
                        id={item.id}
                        label={item.label}
                        checked={item.selected}
                        onChange={()=>handleCheckboxChange(item.id)}
                    />
                ))}
            </div>
            <button className="btnPrimary w-fit mt-4" onClick={createJSON}>Submit</button>
        </div>
    );
}
