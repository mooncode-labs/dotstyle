export default function DangerButton({label, onClick, disabled}) {
    return (
        <button
            className="btnDanger"
            aria-label="Click to perform an action"
            onClick={onClick}
            disabled={disabled}
        >
            <span>{label}</span>
        </button>
    );
}

