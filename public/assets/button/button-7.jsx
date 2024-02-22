export default function BtnUtility({ label, svg, note, onClick, disabled }) {
    return (
        <button
            className="text-sm dark:bg-zinc-800 bg-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-700 p-[6px] rounded flex items-center justify-between gap-2 w-full duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent"
            onClick={onClick}
            disabled={disabled}
            aria-label={label}
            aria-disabled={disabled}
        >
            <div className='flex items-center w-full'>
                {svg &&
                    <div aria-hidden="true">
                        {svg}
                    </div>}
                <div className="flex justify-between w-full">
                    {label &&
                        <div className={`text-left ${svg ? 'ml-2' : ''}`}>
                            {label}
                        </div>}
                    {note &&
                        <div className='ml-auto text-xs items-center flex text-gray-500'>
                            {note}
                        </div>
                    }
                </div>
            </div>
        </button>
    );
}

