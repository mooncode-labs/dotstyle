import React, { useState } from 'react'

export default function SwitchWithSubmit({ label, disabled, checked, onChange }) {
  const [isChecked, setIsChecked] = useState(checked ? checked : false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }
  const handleSubmit = () => {
    onChange(isChecked.toString())
    // change the onChange callback suited to your app
  }

  return (
    <div className='flex flex-col gap-2'>
      <span className='text4'>Select Options</span>
      <span className='textMuted'>Please choose your option</span>
      <label className='relative inline-flex cursor-pointer select-none items-center'>
        <input
          type='checkbox'
          name='autoSaver'
          disabled={disabled}
          className='sr-only'
          checked={isChecked}
          onChange={handleCheckboxChange}
          aria-checked={isChecked}
          role="switch"
        />
        <span
          className={`mr-3 flex h-[21px] w-[38px] items-center rounded-full p-1 duration-200 ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${isChecked ? 'bg-black dark:bg-white' : 'bg-gray-200 dark:bg-neutral-700'
            }`}
          aria-hidden="true"
        >
          <span
            className={`h-[14px] w-[14px] rounded-full bg-white dark:bg-neutral-800 duration-200 ${isChecked ? 'translate-x-4' : ''
              } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            aria-hidden="true"
          ></span>
        </span>
        <span className={`text5 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
          {label}
        </span>
      </label>
      <button className='btnPrimary mt-2 w-fit' onClick={handleSubmit}>Submit</button>
    </div>
  )
}