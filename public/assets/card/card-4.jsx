export default function BlockCard({ title, children }) {
    return (
        <div className="shadow-[4px_4px_0_0_rgba(0,0,0,1)] dark:shadow-[4px_4px_0_0_rgba(255,255,255,0.7)] max-w-sm bg-white dark:bg-slate-900 rounded-sm p-4 duration-200 border-black border">
            <span className="text4">
                {title}
            </span>
            <p className="textBody">
                {children}
            </p>
        </div>
    )
}