const ActionButton = ({ label, onClick, disabled }) => {
    return (
        <div className="flex flex-col gap-2">
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
                            d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                    </svg>
                </span>
                <span>Login With Email</span>{/*Replace text with {label}*/}
            </button>

            <button
                className="btnPrimary w-fit"
                disabled={disabled}
                onClick={onClick}
                aria-label="Send Message" 
                aria-live="polite">
                <span>{label}</span>
                <span className="relative only:-mx-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="m3 3 3 9-3 9 19-9Z"/><path d="M6 12h16"/></svg>
                </span>
            </button>
        </div>
    );
};

export default ActionButton;
