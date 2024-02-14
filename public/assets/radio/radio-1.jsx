'use client'
import React, { useState } from "react"

export default function RadioCircle({ label, options, disabled }) {
  const [selectedOption, setSelectedOption] = useState(null)

  if (!options || options.length === 0) {
    options = ["No", "Values"]
    disabled = true
  }

  const onValueChange = e => {
    setSelectedOption(e.target.value)
  }

  return (
    <>
      <fieldset className="flex flex-col gap-2  text-sm">
        <legend className={`text4 mb-2`}>{label}</legend>
        {options.map((option, index) => (
          <div className="relative flex items-center" key={index}>
            <input
              disabled={disabled}
              className="w-4 h-4 transition-colors bg-white dark:bg-neutral-800 border-2 rounded-full appearance-none cursor-pointer peer border-neutral-500 checked:border-neutral-500 checked:bg-neutral-500 checked:hover:border-neutral-600 checked:hover:bg-neutral-600 focus:outline-none checked:focus:border-neutral-800 checked:focus:bg-neutral-800 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-neutral-100 disabled:bg-neutral-50"
              type="radio"
              value={option}
              id={option}
              name="drone"
              onChange={onValueChange}
            />
            <label
              className="pl-2 cursor-pointer text-neutral-800 dark:text-neutral-200 peer-disabled:cursor-not-allowed peer-disabled:text-neutral-400"
              htmlFor={option}
            >
              {option}
            </label>
            <svg
              className="absolute left-0 w-4 h-4 transition-all duration-300 scale-50 opacity-0 pointer-events-none fill-white peer-checked:scale-100 peer-checked:opacity-100 peer-disabled:cursor-not-allowed"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-labelledby="title-1 description-1"
              role="graphics-symbol"
            >
              <title id="title-1">Circle Shape</title>
              <desc id="description-1">
                Circle shape to indicate whether the radio input is checked or
                not.
              </desc>
              <circle cx="8" cy="8" r="4"/>
            </svg>
          </div>
        ))
        }
      </fieldset>
    </>
  )
}
