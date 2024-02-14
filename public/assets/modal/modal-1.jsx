'use client'
import React, { useState, useEffect } from 'react';

export default function Modal({title, message, children, onAction}) {
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState('https://www.youtube.com/watch?v=dQw4w9WgXcQ');

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const handleSend = () => {
        onAction(value);
        setIsOpen(false);
    };

    // Function to handle the "Escape" key press
    const handleEscapeKey = (event) => {
        if (event.key === 'Escape') {
            closeModal();
        }
    };

    // Function to handle clicks outside the modal
    const handleOutsideClick = (event) => {
        if (event.target.classList.contains('modal-overlay')) {
            closeModal();
        }
    };

    // Function to open the modal
    const openModal = () => {
        setIsOpen(true);
        // Add event listeners for "Escape" key and outside clicks when the modal is opened
        document.addEventListener('keydown', handleEscapeKey);
        document.addEventListener('click', handleOutsideClick);
    };

    // Function to close the modal
    const closeModal = () => {
        setIsOpen(false);
        // Remove event listeners when the modal is closed
        document.removeEventListener('keydown', handleEscapeKey);
        document.removeEventListener('click', handleOutsideClick);
    };

    // Cleanup the event listeners when the component is unmounted
    useEffect(() => {
        return () => {
            document.removeEventListener('keydown', handleEscapeKey);
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    return (
        <div>
            <button className="btnPrimary" onClick={openModal}>Open Modal</button>

            <div className={`modal-overlay fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white dark:bg-black/40 bg-opacity-50 z-50 transition-all duration-200 ease-in-out transform ${isOpen ? ' backdrop-blur-sm opacity-100 visible' : 'backdrop-blur-none opacity-0 invisible'}`}
                role="dialog"
                tabIndex={-1}
                aria-labelledby="modalTitle">
                <div className={`cardDefault sm:max-w-sm w-full max-w-xs transform ${isOpen ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-2 opacity-0 scale-90'}`}>
                    <span className="text4" id="modalTitle">{title}</span>
                    <p className="textMuted my-2">{message}</p>
                    <div className="relative flex items-center gap-2 my-2">
                        <label htmlFor="message" className="sr-only">Enter your message</label>
                        <input
                            type="text"
                            id="message"
                            name="message"
                            value={value}
                            onChange={handleChange}
                            aria-label="Message input"
                            className="inputMain w-full"
                        />
                        <button
                            className="btnPrimary w-9 !h-9 px-0"
                            aria-label="Send"
                            onClick={handleSend}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-4 h-4 transition-all duration-200 ease-in-out transform delay-200 ${isOpen ? 'translate-x-0 opacity-100 visible' : '-translate-x-4 opacity-0 invisible'}`}><path d="m3 3 3 9-3 9 19-9Z" /><path d="M6 12h16" />
                            </svg>
                        </button>
                    </div>
                    {children}
                    <button className="btnPrimary" onClick={closeModal}>Close</button>
                </div>
            </div>
        </div>
    );
}