export default function PrimaryButton({label, onClick, disabled}) {
    return (
        <button
            className="btnPrimary"
            aria-label="Click to perform an action"
            onClick={onClick}
            disabled={disabled}
        >
            <span>{label}</span>
        </button>
    );
}

