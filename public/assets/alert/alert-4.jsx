import React, { useState } from 'react';

export default function AlertComponent({ title, message }) {
  const [isVisible, setIsVisible] = useState(true);

  const dismissAlert = () => {
    setIsVisible(false);
  };
  return (
    <div role="alert" aria-live="assertive" className={`cardDefault w-72 ${isVisible ? 'translate-y-0 opacity-100 visible' : '-translate-y-2 opacity-0 invisible'}`}>
      <div className="flex items-start gap-4">

        <div className="flex-1">
          <strong className="block font-semibold text-md text-green-400 mb-1 -mt-1">
            {title}
          </strong>
          <p className="text-sm text-gray-700 dark:text-gray-200">
            {message}
          </p>
        </div>

        <button className="text-green-400 transition hover:text-green-600"
          onClick={dismissAlert} aria-label="Dismiss Success Alert">
          <span className="sr-only">Dismiss Success Alert</span>

          <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  )
}