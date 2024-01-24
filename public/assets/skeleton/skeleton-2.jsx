export default function SkeletonText() {
    return (
        <div className="mt-8 h-32 w-60 space-y-3">
            <div className="w-20 h-6 bg-neutral-200 dark:bg-neutral-800 rounded-full animate-pulse"></div>
            <div className="w-full h-3 bg-neutral-200 dark:bg-neutral-800 rounded-full animate-pulse"></div>
            <div className="w-full h-3 bg-neutral-200 dark:bg-neutral-800 rounded-full animate-pulse"></div>
            <div className="w-1/2 h-3 bg-neutral-200 dark:bg-neutral-800 rounded-full animate-pulse"></div>
        </div>
    )
}