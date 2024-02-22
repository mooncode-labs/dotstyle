import AvatarNamed from "@assets/avatar/avatar-2";

export default function Sidebar() {
    const handleClick = () => {
        console.log('clicked')
    }
    return (
        <div className={`p-4 w-60 flex flex-col bg-neutral-50 dark:bg-neutral-900 h-full justify-between overflow-y-scroll`}>
            <div className="flex flex-col gap-2">
                <button className="flex justify-between p-2">
                    <span className="text4">DotStyle</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd"
                              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm7 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                              clipRule="evenodd"/>
                    </svg>
                </button>
                <button
                    className={'text-sm hover:bg-neutral-200 dark:hover:bg-neutral-800 p-[6px] rounded flex items-center gap-2 w-full duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent'}
                    onClick={handleClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd"
                              d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
                              clipRule="evenodd"/>
                    </svg>
                    <span>Dashboard</span>
                </button>
                <button
                    className={'text-sm hover:bg-neutral-200 dark:hover:bg-neutral-800 p-[6px] rounded flex items-center gap-2 w-full duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent'}
                    onClick={handleClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path
                            d="M7 3.5A1.5 1.5 0 018.5 2h3.879a1.5 1.5 0 011.06.44l3.122 3.12A1.5 1.5 0 0117 6.622V12.5a1.5 1.5 0 01-1.5 1.5h-1v-3.379a3 3 0 00-.879-2.121L10.5 5.379A3 3 0 008.379 4.5H7v-1z"/>
                        <path d="M4.5 6A1.5 1.5 0 003 7.5v9A1.5 1.5 0 004.5 18h7a1.5 1.5 0 001.5-1.5v-5.879a1.5 1.5 0 00-.44-1.06L9.44 6.439A1.5 1.5 0 008.378 6H4.5z"/>
                    </svg>
                    <span>Documents</span>
                </button>
                <button
                    className={'text-sm hover:bg-neutral-200 dark:hover:bg-neutral-800 p-[6px] rounded flex items-center gap-2 w-full duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent'}
                    onClick={handleClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd"
                              d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"
                              clipRule="evenodd"/>
                    </svg>
                    <span>Calendar</span>
                </button>
                <button
                    className={'text-sm hover:bg-neutral-200 dark:hover:bg-neutral-800 p-[6px] rounded flex items-center gap-2 w-full duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent'}
                    onClick={handleClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd"
                              d="M2.5 4A1.5 1.5 0 001 5.5V6h18v-.5A1.5 1.5 0 0017.5 4h-15zM19 8.5H1v6A1.5 1.5 0 002.5 16h15a1.5 1.5 0 001.5-1.5v-6zM3 13.25a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zm4.75-.75a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5h-3.5z"
                              clipRule="evenodd"/>
                    </svg>
                    <span>Payments</span>
                </button>
            </div>

            <div className="p-2 flex flex-col gap-3">
                <span className="text-gray-600 dark:text-gray-400 text-xs font-medium">PROJECTS</span>
                <button className={`textLabel text-left`}>Tailwind Components</button>
                <button className={`textLabel text-left`}>Dark Mode</button>
                <button className={`textLabel text-left`}>Redesign</button>
                <button className={`textLabel text-left`}>Quick Setup</button>
                <div className="text-gray-500 mt-4">
                    <AvatarNamed height={'36px'} name={'Lorem Ipsum'}/>
                </div>
            </div>
        </div>
    )
}