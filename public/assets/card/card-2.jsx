export default function BlogCard({ title, children, date, imageUrl, imageAlt }) {
    return (
        <article className="overflow-hidden cardUtil max-w-sm">
            <img
                alt={imageAlt}
                src={imageUrl}
                className="sm:h-56 h-24 w-full object-cover"
            />
            <div className="p-4 sm:p-6">
                <time dateTime="2022-10-10" className="text6">
                    {date}
                </time>
                <a href="#">
                    <h3 className="text4">
                        {title}
                    </h3>
                </a>
                <p className="textBody mt-2">
                    {children}
                </p>
            </div>
        </article>
    )
}