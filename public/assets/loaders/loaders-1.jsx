import React from 'react';

export default function Loader1({ title }) {
    return (
        <div aria-live="polite" role="status" className="inline-flex items-center justify-center">
            <button
                className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold tracking-wide text-white dark:text-black transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-gray-800 dark:bg-gray-200"
                aria-label={title + ', loading'}
                disabled
            >
                <span>{title}</span>
                <span className="relative only:-mx-5">
                    <svg
                        className="w-4 h-4 text-white dark:text-black animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                </span>
            </button>
            <span className="sr-only">Loading...</span>
        </div>
    );
};
