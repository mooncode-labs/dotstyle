export default function OutlineButton({label, onClick, disabled}) {
    return (
        <button
            className="btnOutline"
            aria-label="Click to perform an action"
            onClick={onClick}
            disabled={disabled}
        >
            <span>{label}</span>
        </button>
    );
}

