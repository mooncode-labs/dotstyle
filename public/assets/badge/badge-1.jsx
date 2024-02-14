export default function Badge({ title, status }) {
    let color;

    if (status === 'success') {
        color = 'bg-emerald-500'
    } else if (status === 'warning') {
        color = 'bg-amber-500'
    } else if (status === 'error') {
        color = 'bg-red-500'
    } else if (status === 'info') {
        color = 'bg-blue-500'
    } else {
        color = 'bg-gray-500'
    }

    return (
        <div role="badge" className="badgeRounded w-fit">
            <div className="flex flow-row">
                <div className='flex justify-center items-center'>
                    <span className={`p-1 rounded-full ${color}`}>
                        <span className="sr-only">{title}</span>
                    </span>
                </div>
                <div className="text-sm font-semibold ml-1">
                    {title}
                </div>
            </div>
        </div>
    )
}