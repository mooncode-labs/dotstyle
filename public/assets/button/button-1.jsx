export default function Button({ label, onClick, disabled }) {
    return (
        <div className="flex flex-col items-center gap-2">
            <span className='text-sm mt-2'>Primary</span>
            <button
                className="btnPrimary"
                aria-label="Click to perform an action"
                onClick={onClick}
                disabled={disabled}
            >
                <span>{label}</span>
            </button>

            <span className='text-sm mt-2'>Secondary</span>
            <button
                className="btnSecondary"
                aria-label="Click to perform an action"
                onClick={onClick}
                disabled={disabled}
            >
                <span>{label}</span>
            </button>

            <span className='text-sm mt-2'>Outline</span>
            <button
                className="btnOutline"
                aria-label="Click to perform an action"
                onClick={onClick}
                disabled={disabled}
            >
                <span>{label}</span>
            </button>

            <span className='text-sm mt-2'>Danger</span>
            <button
                className="btnPrimary !bg-red-500"
                aria-label="Click to perform an action"
                onClick={onClick}
                disabled={disabled}
            >
                <span>{label}</span>
            </button>
        </div>
    );
}

