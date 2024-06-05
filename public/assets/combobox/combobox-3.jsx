'use client'
import React, { useState, useRef, useEffect } from 'react';
import ComboboxDropdown from "./combobox-2";

export default function ComboboxMultiple({ title, onOptionClick }) {
  const [isOpen, setIsOpen] = useState(false)
  const divRef = useRef(null);

  const handleClick = (event) => {
    if (divRef.current && !divRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const handleButtonClick = (option) => {
    setIsOpen(false);
    onOptionClick(option);
  };

  return (
    <div ref={divRef} className="relative" >
      <button className="btnPrimary" onClick={() => { setIsOpen(!isOpen) }}>Open</button>

      <div className={`cardUtil py-2 w-44 h-fit absolute top-10 ${isOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-2 opacity-0 invisible'}`}>
        <div className="text5 ml-1 my-1">{title}</div>
        <button
            className="text-sm hover:bg-neutral-200 dark:hover:bg-neutral-800 p-[6px] rounded flex items-center gap-2 w-full duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent"
            onClick={() => handleButtonClick('button-1')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"/>
          </svg>
          {'Button 1'}
        </button>
        <button
            className="text-sm hover:bg-neutral-200 dark:hover:bg-neutral-800 p-[6px] rounded flex items-center gap-2 w-full duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent"
            onClick={() => handleButtonClick('button-2')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l6-6m0 0l-6-6m6 6H9a6 6 0 000 12h3"/>
          </svg>
          {'Button 2'}
        </button>
        <ComboboxDropdown label={"More"} onOptionClick={handleButtonClick}/>
        <ComboboxDropdown label={"Settings"} onOptionClick={handleButtonClick}/>
        <button className="text-sm hover:bg-neutral-200 dark:hover:bg-neutral-800 p-[6px] rounded flex items-center gap-2 w-full duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent text-red-500"
                onClick={() => handleButtonClick('delete')}>
          Delete
        </button>
      </div>
    </div>
  )
}