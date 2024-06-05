export default function SimpleCard({ title, children }) {
    return (
        <div className="cardDefault max-w-sm">
            <div className="flex flex-col">
                <h2 className="text4">{title}</h2>
                <div className="textMuted mt-2">
                    {children}
                </div>
            </div>
        </div>
    )
}