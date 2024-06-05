export default function Table2() {
    return (

        <div className='flex'>
            <table className="w-full">
                <thead className={`textBody`}>
                    <tr>
                        <th scope="col" className="py-2 px-3 sm:py-3 sm:px-6">Name</th>
                        <th scope="col" className="py-2 px-3 sm:py-3 sm:px-6">Invoice ID</th>
                        <th scope="col" className="py-2 px-3 sm:py-3 sm:px-6 hidden sm:block">Amount</th>
                        <th scope="col" className="py-2 px-3 sm:py-3 sm:px-6">Method</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className={`textBody border-t border-neutral-200`}>
                        <td className="py-2 px-3 sm:py-4 sm:px-6">dotstyle</td>
                        <td className="py-2 px-3 sm:py-4 sm:px-6">09984234</td>
                        <td className="py-2 px-3 sm:py-4 sm:px-6 hidden sm:block">Paypal</td>
                        <td className="py-2 px-3 sm:py-4 sm:px-6">$4,500.00</td>
                    </tr>
                    <tr className={`textBody border-t border-neutral-200`}>
                        <td className="py-2 px-3 sm:py-4 sm:px-6">Jonothan Joe</td>
                        <td className="py-2 px-3 sm:py-4 sm:px-6">64176417</td>
                        <td className="py-2 px-3 sm:py-4 sm:px-6 hidden sm:block">Credit Card</td>
                        <td className="py-2 px-3 sm:py-4 sm:px-6">$3,150.00</td>
                    </tr>
                    <tr className={`textBody border-t border-neutral-200`}>
                        <td className="py-2 px-3 sm:py-4 sm:px-6">James Brown</td>
                        <td className="py-2 px-3 sm:py-4 sm:px-6">74389182</td>
                        <td className="py-2 px-3 sm:py-4 sm:px-6 hidden sm:block">Paypal</td>
                        <td className="py-2 px-3 sm:py-4 sm:px-6">$7,820.00</td>
                    </tr>
                    <tr className={`textBody border-t border-neutral-200`}>
                        <td className="py-2 px-3 sm:py-4 sm:px-6">Bruce Wayne</td>
                        <td className="py-2 px-3 sm:py-4 sm:px-6">74928393</td>
                        <td className="py-2 px-3 sm:py-4 sm:px-6 hidden sm:block">Bank Transfer</td>
                        <td className="py-2 px-3 sm:py-4 sm:px-6">$184,422.00</td>
                    </tr>
                    <tr className={`text5 border-t border-neutral-200 bg-zinc-100 dark:bg-zinc-800 font-semibold`}>
                        <td className="py-2 px-3 sm:py-4 sm:px-6">Total</td>
                        <td className="py-2 px-3 sm:py-4 sm:px-6"></td>
                        <td className="py-2 px-3 sm:py-4 sm:px-6 hidden sm:block"></td>
                        <td className="py-2 px-3 sm:py-4 sm:px-6">$200,000.00</td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}