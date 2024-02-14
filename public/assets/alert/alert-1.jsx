"use client"
import React, { useState } from 'react';

export default function AlertComponent({ title, message }) {
    const [isVisible, setIsVisible] = useState(true);

    const dismissAlert = () => {
        setIsVisible(false);
    };

    return (
        <div
            role="alert"
            className={`cardDefault h-fit w-full max-w-sm relative ${isVisible ? 'translate-y-0 opacity-100 visible' : '-translate-y-2 opacity-0 invisible'}`}
            aria-live="assertive"
        >
            <div className="flex gap-2 items-start">
                <span className="text-emerald-400" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-5 w-5 mt-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </span>

                <div className="flex-1 pb-1 mr-10">
                    <strong className="text5">
                        {title}
                    </strong>

                    <p className="textBody">
                        {message}
                    </p>
                </div>
                <button
                    onClick={dismissAlert}
                    className="absolute top-5 right-4 text-gray-500 transition hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-500"
                    aria-label="Dismiss alert"
                >
                    <span className="sr-only">Dismiss alert</span>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                        stroke="currentColor"
                        className="w-4 h-4 transition duration-300 top-1 stroke-gray-700 dark:stroke-gray-200 shrink-0 rotate-180"
                        aria-hidden="true"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
