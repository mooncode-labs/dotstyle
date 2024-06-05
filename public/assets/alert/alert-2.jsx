import React, { useState } from 'react';

export default function AlertAction({ title, message }) {
  const [isVisible, setIsVisible] = useState(true);

  const dismissAlert = () => {
    setIsVisible(false);
  };

  return (
    <div role="alert" aria-live="assertive" className={`cardDefault h-fit w-72 ${isVisible ? 'translate-y-0 opacity-100 visible' : '-translate-y-2 opacity-0 invisible'}`}>
      <div className="flex items-start gap-4">

        <div className="flex-1">
          <strong className="text4">
            {title}
          </strong>

          <p className="mt-1 textBody">
            {message}
          </p>

          <div className="mt-4 flex gap-2">
            <button onClick={dismissAlert}
              className="btnPrimary"
              aria-label="View alert">
              View
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
              </svg>
              <span className="sr-only">View alert</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
