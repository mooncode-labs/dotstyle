export default function SkeletonCard() {
    return (
        <div className="cardDefault">
            <div className="w-60 sm:h-40 h-28 bg-neutral-200 dark:bg-neutral-800 animate-pulse"></div>
            <div className="mt-8 h-32 w-full space-y-3">
            <div className="w-20 h-6 bg-neutral-200 dark:bg-neutral-800 rounded-full animate-pulse"></div>
            <div className="w-full h-3 bg-neutral-200 dark:bg-neutral-800 rounded-full animate-pulse"></div>
            <div className="w-full h-3 bg-neutral-200 dark:bg-neutral-800 rounded-full animate-pulse"></div>
            <div className="w-1/2 h-3 bg-neutral-200 dark:bg-neutral-800 rounded-full animate-pulse"></div>
            </div>
        </div>
    )
}