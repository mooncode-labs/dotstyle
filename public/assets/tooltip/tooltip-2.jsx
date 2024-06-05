'use client'
import { useState } from "react"

export default function TooltipBottom({ children, message }) {
    const [showTooltip, setShowTooltip] = useState(false)
    return (
        <div className="relative">
            <button className=""
                onMouseLeave={() => setShowTooltip(false)}
                onMouseEnter={() => setShowTooltip(true)}
                onFocus={() => setShowTooltip(true)}
                onBlur={() => setShowTooltip(false)}
                aria-describedby="tooltipText">
                {children}
            </button>
            <div id="tooltipText"
                className={`bg-indigo-700 dark:bg-indigo-500 p-1 rounded text-xs text-white font-semibold absolute left-0 top-10 transition duration-200 ${showTooltip ? 'translate-y-0 opacity-100 visible' : 'translate-y-2 opacity-0 invisible'}`}>
                {message}
            </div>
        </div>
    )
}