export default function SimpleBadge({ title }) {
    return (
        <div className="flex flex-col gap-2">
            <div className="badgeRounded">
                <span className="text-sm font-semibold">{title}</span>
                <span className="sr-only">{title}</span>
            </div>
        </div>
    )
}






