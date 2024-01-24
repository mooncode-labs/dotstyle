'use client'
import { useState } from 'react'

export default function Accordion({
  children,
  title,
  defaultActive,
  disabled
}) {

  const [accordionOpen, setAccordionOpen] = useState(defaultActive ? defaultActive : false)
  const handleAccordionOpen = () => {
    setAccordionOpen(!accordionOpen)
  }

  return (
    <div className="p-2 mx-4 bg-white dark:bg-black max-w-lg">
      <h4>
        <button
          className="flex items-center justify-between w-full text-left font-medium py-1 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={handleAccordionOpen}
          aria-expanded={accordionOpen}
          disabled={disabled}
          aria-disabled={disabled}
        >
          <span>{title}</span>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
            stroke="currentColor"
            className={`w-4 h-4 transition duration-300 top-1 stroke-gray-700 dark:stroke-gray-200 shrink-0 group-open:rotate-180 ${accordionOpen ? 'rotate-180' : ''}`}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </button>
      </h4>
      <div
        role="region"
        className={`grid text-sm text-gray-600 dark:text-gray-400 overflow-hidden transition-all duration-300 ease-in-out ${accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <p className="">
            {children}
          </p>
        </div>
      </div>
    </div>
  )
}