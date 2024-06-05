'use client'
import React, { useState, useEffect } from 'react';

export default function ModalDialog({title, prompt, children}) {
    const [isOpen, setIsOpen] = useState(false);

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
                <div className={`cardDefault w-[20rem] sm:w-[30rem] ${isOpen ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-2 opacity-0 scale-90'}`}>
                    <div className={`flex justify-between mb-2 text4`}
                        id="modalTitle">
                        {title}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-red-500"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><path d="M12 9v4" /><path d="M12 17h.01" /></svg>
                    </div>
                    <p className="text5">{prompt}</p>
                    <p className={`textMuted my-2`}>{children}</p>
                    <button className="btnPrimary" onClick={closeModal}>Confirm</button>
                </div>
            </div>
        </div>
    );
}