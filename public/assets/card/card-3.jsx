export default function Card({ title, children }) {
    return (
        <div className="cardDefault w-72">
            <span className="text4">
                {title}
            </span>

            <p className="textMuted">
                {children}
            </p>

            <div className="flex flex-col gap-4 mt-5">
                <button className="btnSecondary">
                    Reject
                </button>
                <button className="btnPrimary">
                    Confirm
                </button>
            </div>
        </div>
    )
}