import { useState } from "react"

export default function Tooltip({ children, message }) {
    const [showTooltip, setShowTooltip] = useState(false)
    
    return (
        <div className="relative">
            <button className="btnPrimary"
                onMouseLeave={() => setShowTooltip(false)}
                onMouseEnter={() => setShowTooltip(true)}
                onFocus={() => setShowTooltip(true)}
                onBlur={() => setShowTooltip(false)}
                aria-describedby="tooltipText">
                {children}
            </button>
            <div id="tooltipText"
                className={`cardUtil textLabel absolute right-0 -top-10 ${showTooltip ? 'translate-y-0 opacity-100 visible' : 'translate-y-2 opacity-0 invisible'}`}>
                {message}
            </div>
        </div>
    )
}