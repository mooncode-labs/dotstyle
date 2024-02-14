export default function LinkButton ({ label, url, disabled }) {
    const handleClick = () => {
        if (url) {
            window.open(url, "_blank"); // Open in a new tab
            // Or use window.location.href = url; to open in the same tab
        }
        else {
            console.log("No URL provided");
        }
    };
    return (
        <div className="flex flex-col gap-2">
            <button
                className="text5 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Click to access link"
                onClick={handleClick}
                disabled={disabled}>
                <span className="hover:underline">{label}</span>
            </button>

            <button
                className="btnSecondary"
                aria-label="Click to access link"
                onClick={handleClick}
                disabled={disabled}>
                <span className="hover:underline">{label}</span>
            </button>
        </div>
    );
};
