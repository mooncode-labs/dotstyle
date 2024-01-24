import React from 'react';

export default function Loader() {
    return (
        <div className="flex flex-row gap-2" role="status" aria-label="Loading... Please wait.">
            <div className="w-2 h-2 rounded-full bg-gray-800 dark:bg-gray-200 animate-bounce" aria-hidden="true"></div>
            <div className="w-2 h-2 rounded-full bg-gray-800 dark:bg-gray-200 animate-bounce" aria-hidden="true" style={{"animationDelay": "-0.3s"}}></div>
            <div className="w-2 h-2 rounded-full bg-gray-800 dark:bg-gray-200 animate-bounce" aria-hidden="true" style={{"animationDelay": "-0.5s"}}></div>
        </div>
    )
}