import React from 'react';

export default function Loader3({ title }) {
  return (
    <div className="flex items-center space-x-2" role="status" aria-label="Loading..." aria-live="polite">
      <div>
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
          strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg"
          className="animate-spin w-4 h-4 stroke-gray-800 dark:stroke-gray-200" aria-hidden="true">
          <path
            d="M12 3v3m6.366-.366-2.12 2.12M21 12h-3m.366 6.366-2.12-2.12M12 21v-3m-6.366.366 2.12-2.12M3 12h3m-.366-6.366 2.12 2.12">
          </path>
        </svg>
      </div>
      <span className="text-sm font-semibold text-gray-800 dark:text-gray-200" aria-hidden="true">
        {title}
      </span>
    </div>
  );
}
