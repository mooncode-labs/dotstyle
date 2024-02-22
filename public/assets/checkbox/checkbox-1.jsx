'use client'
import React, {useState} from "react"

export default function Checkbox({label, checked, disabled, onChange}) {
    const [isChecked, setIsChecked] = useState(checked ? checked : false)

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked)
        onChange(!isChecked)
    }
    return (
        <div className="relative flex gap-2 items-center">
            <input
                className="peer h-4 w-4 cursor-pointer appearance-none rounded border-2 border-zinc-800 bg-white dark:bg-zinc-700 transition-colors checked:bg-zinc-800 dark:checked:bg-zinc-100 checked:focus:border-blue-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                type="checkbox"
                role="checkbox"
                checked={isChecked}
                aria-checked={isChecked}
                disabled={disabled}
                aria-disabled={disabled}
                onChange={handleCheckboxChange}
            />
            {label && (
                <>
                    <button
                        className="textMuted cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-50 max-w-xs"
                        disabled={disabled}
                        onClick={handleCheckboxChange}
                        aria-labelledby="custom-checkbox-label"
                    >
                        {label}
                    </button>
                    <label id="custom-checkbox-label" className="sr-only">
                        {label}
                    </label>
                </>
            )
            }
            <svg
                className="pointer-events-none absolute left-0 top-[2px] h-4 w-4 scale-50 fill-white dark:fill-black dark:stroke-black stroke-white opacity-0 transition-all duration-300 peer-checked:scale-100 peer-checked:opacity-100 peer-disabled:cursor-not-allowed"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                aria-labelledby="title-1"
            >
                <title id="title-1">Check mark icon</title>
                <desc>Indicates the checkbox is checked</desc>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.8116 5.17568C12.9322 5.2882 13 5.44079 13 5.5999C13 5.759 12.9322 5.91159 12.8116 6.02412L7.66416 10.8243C7.5435 10.9368 7.37987 11 7.20925 11C7.03864 11 6.87501 10.9368 6.75435 10.8243L4.18062 8.42422C4.06341 8.31105 3.99856 8.15948 4.00002 8.00216C4.00149 7.84483 4.06916 7.69434 4.18846 7.58309C4.30775 7.47184 4.46913 7.40874 4.63784 7.40737C4.80655 7.406 4.96908 7.46648 5.09043 7.57578L7.20925 9.55167L11.9018 5.17568C12.0225 5.06319 12.1861 5 12.3567 5C12.5273 5 12.691 5.06319 12.8116 5.17568Z"
                />
            </svg>
        </div>
    )
}