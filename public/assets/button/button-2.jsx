export default function SecondaryButton({label, onClick, disabled}) {
    return (
        <button
            className="btnSecondary"
            aria-label="Click to perform an action"
            onClick={onClick}
            disabled={disabled}
        >
            <span>{label}</span>
        </button>
    );
}

