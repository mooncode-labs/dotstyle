const ActionButton = ({label, onClick, disabled}) => {
    return (
        <button
            className="btnPrimary"
            disabled={disabled}
            onClick={onClick}
            aria-label="Sign in with email"
            aria-live="polite">
                <span className="relative only:-mx-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
                         className="w-4 h-4">
                        <path strokeLinecap="round"
                              d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"/>
                    </svg>
                </span>
            <span>{label}</span>
        </button>
    );
};

export default ActionButton;
