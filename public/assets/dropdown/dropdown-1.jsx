'use client'
import { useState } from 'react';

export default function DropdownSimple({ options, onChange }) {
    const [selectedOption, setSelectedOption] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    if (!options || options.length === 0) {
        options = ['No options available'];
    }

    const handleOptionClick = (option) => {
        onChange(option);
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div className="relative text-left">
                <button
                    className="btnPrimary w-40"
                    aria-haspopup="true"
                    aria-expanded={isOpen}  // Reflect open state
                    id="dropdown-toggle-button"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className='whitespace-nowrap overflow-ellipsis overflow-hidden'>{selectedOption ? selectedOption : 'Select an option'}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-4 transition duration-300 top-1 dark:stroke-black stroke-gray-300 shrink-0 group-open:rotate-180">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </button>


            <div
                className={`origin-top-right absolute left-0 mt-1 w-40 cardUtil z-40
     ${isOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-2 opacity-0 invisible'}`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="dropdown-toggle-button"
            >
                {options.map((option, index) => (
                    <button key={index} className={'text-sm text-black dark:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800 p-[6px] rounded flex items-center justify-between gap-2 w-full duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent'}
                        onClick={() => handleOptionClick(option)}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
};
