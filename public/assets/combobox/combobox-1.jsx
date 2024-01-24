import React, { useState, useRef, useEffect } from 'react';

export default function Combobox({ title, onOptionClick }) {
  const [isOpen, setIsOpen] = useState(false)
  const divRef = useRef(null);

  const handleClick = (event) => {
    if (divRef.current && !divRef.current.contains(event.target)) {
      // Clicked outside the div, close it
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []); // Cleanup the event listener when the component unmounts

  const handleButtonClick = (option) => {
    setIsOpen(false);
    onOptionClick(option);
  };

  return (
    <div ref={divRef} className="relative" role="combobox" aria-controls='combobox-list' aria-expanded={isOpen} aria-haspopup="listbox">
      <button className={`btnPrimary`} onClick={() => { setIsOpen(!isOpen) }}>Open</button>

      <div role="listbox" className={`cardUtil py-2 w-44 h-fit absolute top-10 ${isOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-2 opacity-0 invisible'}`}>
        <div className={`text5 ml-1 my-1`}>{title}</div>
        <button
            className={'text-sm hover:bg-neutral-200 dark:hover:bg-neutral-800 p-[6px] rounded flex items-center gap-2 w-full duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent'}
            onClick={() => handleButtonClick('reload')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"/>
          </svg>
          {'Reload'}
        </button>
        <button
            className={'text-sm hover:bg-neutral-200 dark:hover:bg-neutral-800 p-[6px] rounded flex items-center gap-2 w-full duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent'}
            onClick={() => handleButtonClick('redo')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l6-6m0 0l-6-6m6 6H9a6 6 0 000 12h3"/>
          </svg>
          {'Redo'}
        </button>
        <button
            className={'text-sm hover:bg-neutral-200 dark:hover:bg-neutral-800 p-[6px] rounded flex items-center gap-2 w-full duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent'}
            onClick={() => handleButtonClick('copy')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"/>
          </svg>
          {'Copy'}
        </button>
      </div>
    </div>
  )
}