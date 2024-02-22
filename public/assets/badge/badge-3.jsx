import React, { useState } from 'react';

export default function CloseBadge({ title }) {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div className="flex flex-col gap-2">
            <div className="badgeRounded flex justify-between items-center gap-1">
                <div className="text-sm font-semibold">{title}</div>
                <button onClick={handleClose} className="mt-[2px]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3 h-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
                <span className="sr-only">{title}</span>
            </div>
        </div>
    );
}



