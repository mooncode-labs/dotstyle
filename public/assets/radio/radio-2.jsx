import React, { useState } from "react"

export default function RadioCheck({ label, options, disabled, onSubmit }) {
  const [selectedOption, setSelectedOption] = useState(null)

  if (!options || options.length === 0) {
    options = ["No", "Values"]
    disabled = true
  }

  const onValueChange = e => {
    setSelectedOption(e.target.value)
  }
  const handleSubmit = () => {
    onSubmit(selectedOption)
  }

  return (
    <>
      <div className="flex flex-col gap-2  text-sm">
        <legend className={`text4`}>{label}</legend>
        {options.map((option, index) => (
          <div className="relative flex items-center" key={index}>
            <input
              disabled={disabled}
              className="w-4 h-4 transition-colors bg-white dark:bg-neutral-800 border-2 rounded-full appearance-none cursor-pointer peer border-neutral-500 checked:focus:border-neutral-800 focus-visible:border-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-neutral-100 disabled:bg-neutral-50"
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
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="absolute left-[2px] bottom-[3px] w-3 h-3 transition-all duration-300 scale-50 opacity-0 text-black dark:text-white pointer-events-none peer-checked:scale-100 peer-checked:opacity-100 peer-disabled:cursor-not-allowed">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
        ))}
        <button className="btnPrimary w-fit mt-2" onClick={handleSubmit}>Submit</button>
      </div>
    </>
  )
}
