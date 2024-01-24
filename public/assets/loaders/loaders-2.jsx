import React from 'react';

export default function LoadingSpinner() {
  return (
    <div className="flex gap-4" aria-live="polite">
      <div className="relative only:-mx-5" role="status" aria-label="Loading">
        <svg className="w-6 h-6 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75 text-gray-800 dark:text-gray-200" fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
          </path>
        </svg>
      </div>

      <div role="status" aria-label="Loading">
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"
          strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg"
          className="animate-spin w-6 h-6 stroke-gray-500 dark:stroke-gray-200" aria-hidden="true">
          <path
            d="M12 3v3m6.366-.366-2.12 2.12M21 12h-3m.366 6.366-2.12-2.12M12 21v-3m-6.366.366 2.12-2.12M3 12h3m-.366-6.366 2.12 2.12">
          </path>
        </svg>
      </div>
    </div>
  );
}

