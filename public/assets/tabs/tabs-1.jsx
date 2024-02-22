'use client'
import { useState } from 'react';

export default function Tab({ tabs }) {
    const [activeTab, setActiveTab] = useState(tabs[0].value);
    const handleTabChange = (value) => {
        setActiveTab(value);
    };
    return (
        <div className="w-full max-w-md">
            <div className="cardUtil !bg-zinc-100 dark:!bg-zinc-900 w-full inline-flex cursor-pointer select-none">
                {tabs.map((tab) => (
                    <button
                        key={tab.value}
                        onClick={() => handleTabChange(tab.value)}
                        className={`flex w-full items-center justify-center rounded-md py-2 px-4 text-sm font-medium cursor-pointer ${
                            activeTab === tab.value
                                ? 'bg-white font-semibold shadow dark:bg-zinc-700 text-black dark:text-white'
                                : 'text-zinc-500'
                        }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            {tabs.map((tab) => (
                <div
                    key={tab.value}
                    className={`cardDefault mt-2 w-full ${
                        activeTab === tab.value ? '' : 'hidden'
                    }`}
                >
                    <p>{tab.content}</p>
                </div>
            ))}
        </div>
    );
}

