import React, { useState } from 'react';

export default function AlertError({ title, message }) {
  const [isVisible, setIsVisible] = useState(true);

  const dismissAlert = () => {
    setIsVisible(false);
  };
  return (
    <div role="alert" aria-live="assertive" className={`cardDefault w-72 ${isVisible ? 'translate-y-0 opacity-100 visible' : '-translate-y-2 opacity-0 invisible'}`}>
      <div className="flex items-start gap-4">

        <div className="flex-1">
          <strong className="block font-semibold text-md text-red-500 mb-1 -mt-1">
            {title}
          </strong>
          <p className="text-sm text-gray-700 dark:text-gray-200">
            {message}
          </p>
        </div>

        <button className="text-red-400 transition hover:text-red-600" aria-label="Dismiss Error"
        onClick={dismissAlert}>
          <span className="sr-only">Dismiss Error</span>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
            className="w-6 h-6" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>

      </div>
    </div>
  )
}