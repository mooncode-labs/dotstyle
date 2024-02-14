'use client'
import { useState } from 'react';

export default function Dropdown({ options, onChange }) {
    const [selectedOption, setSelectedOption] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    if (!options || options.length === 0) {
        options = ['No options available'];
    }
    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    const handleSubmit = () => {
        if (selectedOption) {
            onChange(selectedOption);
        }
    };

    return (
        <div className="relative flex flex-col items-end">
            <div>
                <button
                    className="btnSecondary w-48 !justify-between"
                    id="options-menu-with-submit"
                    aria-haspopup="true"
                    aria-expanded="true"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className='whitespace-nowrap overflow-ellipsis overflow-hidden'>{selectedOption ? selectedOption : 'Select an option'}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-4 transition duration-300 top-1 stroke-gray-500 shrink-0 group-open:rotate-180">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </button>
                <div className="textMuted ml-1">Please select an option</div>
            </div>

            <div
                className={`origin-top-right absolute right-0 top-9 mt-1 w-48 cardUtil ${isOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-2 opacity-0 invisible'}`}
            >
                <div
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu-with-submit"
                >
                    {options.map((option, index) => (
                        <button key={index}
                                className={'text-sm hover:bg-zinc-200 dark:hover:bg-zinc-800 p-[6px] rounded flex items-center justify-between gap-2 w-full duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent'}
                                onClick={() => handleOptionClick(option)}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            </div>
            <button
                aria-label="Submit selected option"
                className="btnPrimary mt-2"
                onClick={handleSubmit}
            >
                Submit
            </button>
        </div>
    );
};
