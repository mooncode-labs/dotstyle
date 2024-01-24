'use client'
import React, { useState, useRef, useEffect } from 'react';

export default function Toast({ title, message, children, type, duration, position }) {
    // Enable useEffect to trigger toast automatically, and remove show toast button
    // useEffect(() => {
    //     toggleToast();
    // }, []);

    const [showToast, setShowToast] = useState(false);
    const timerRef = useRef(null);
    duration = duration || 3000;

    const toggleToast = () => {
        if (showToast) {
            setShowToast(false);
            clearTimeout(timerRef.current);
        } else {
            setShowToast(true);
            clearTimeout(timerRef.current);
            timerRef.current = setTimeout(() => {
                setShowToast(false);
            }, duration);
        }
    };

    const getPositionClass = () => {
        switch (position) {
            case 'left':
                return 'left-0';
            case 'right':
                return 'right-0 ';
            default:
                return 'sm:left-1/2 sm:-translate-x-1/2 left-0';
        }
    };

    const getAnimClass = () => {
        switch (position) {
            case 'left':
                return 'sm:-translate-x-8 translate-x-0';
            case 'right':
                return 'sm:translate-x-8 translate-x-0';
            default:
                return 'sm:-translate-y-8';
        }
    };

    const getToastTypeClass = () => {
        switch (type) {
            case 'success':
                return '!bg-green-300 dark:!bg-green-500';
            case 'error':
                return '!bg-red-300 dark:!bg-red-600';
            default:
                return '';
        }
    };

    return (
        <div>
            {/* Remove button and enable useEffect */}
            <button className={`btnPrimary`} onClick={toggleToast}>
                {position}
            </button>

            {/* Toast, change bottom-0 to top-0 to show toasts at top */}
            <div
                className={`fixed bottom-0 w-full min-h-[4rem] sm:max-w-sm cardDefault ${getPositionClass()} ${getToastTypeClass()} sm:ml-4 sm:mr-4 mb-4 z-50 transform ${showToast ? 'opacity-100 scale-95 sm:scale-100' : `${getAnimClass()} opacity-0 scale-90`}`}
                aria-live="assertive" // 'polite' for less important messages
                aria-atomic="true"
                role="alert"
            >
                {/* Toast Action Button */}
                <div className='flex justify-between items-end'>
                    <div className='flex flex-col justify-center items-start'>
                        <strong className="text5">{title}</strong>
                        <p className="textBody">{message}</p>
                        {children}
                    </div>
                    <button className="btnPrimary" onClick={toggleToast}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};