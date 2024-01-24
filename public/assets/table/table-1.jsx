export default function Table() {
    return (
        <div className={`cardUtil flex`}>
            <table className="w-full">
                <thead className={`text5 bg-zinc-100 dark:bg-zinc-800 rounded-sm`}>
                    <tr>
                        <th scope="col" className="py-2 px-3 sm:py-3 sm:px-6">Person</th>
                        <th scope="col" className="py-2 px-3 sm:py-3 sm:px-6">Bank Account</th>
                        <th scope="col" className="py-2 px-3 sm:py-3 sm:px-6">Amount</th>
                        <th scope="col" className="py-2 px-3 sm:py-3 sm:px-6 hidden sm:block">Approved</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className={`textBody border-t border-neutral-200`}>
                        <td className="py-2 px-3 sm:py-4 sm:px-6">dotstyle</td>
                        <td className="py-2 px-3 sm:py-4 sm:px-6">09984234</td>
                        <td className="py-2 px-3 sm:py-4 sm:px-6">$4,500.00</td>
                        <td className="py-2 px-3 sm:py-4 sm:px-6 hidden sm:block">Yes</td>
                    </tr>
                    <tr className={`textBody border-t border-neutral-200`}>
                        <td className="py-2 px-3 sm:py-4 sm:px-6">Jonothan Joe</td>
                        <td className="py-2 px-3 sm:py-4 sm:px-6">64176417</td>
                        <td className="py-2 px-3 sm:py-4 sm:px-6">$3,150.00</td>
                        <td className="py-2 px-3 sm:py-4 sm:px-6 hidden sm:block">No</td>
                    </tr>
                    <tr className={`textBody border-t border-neutral-200`}>
                        <td className="py-2 px-3 sm:py-4 sm:px-6">James Brown</td>
                        <td className="py-2 px-3 sm:py-4 sm:px-6">74389182</td>
                        <td className="py-2 px-3 sm:py-4 sm:px-6">$7,820.00</td>
                        <td className="py-2 px-3 sm:py-4 sm:px-6 hidden sm:block">Yes</td>
                    </tr>
                    <tr className={`textBody border-t border-neutral-200`}>
                        <td className="py-2 px-3 sm:py-4 sm:px-6">Bruce Wayne</td>
                        <td className="py-2 px-3 sm:py-4 sm:px-6">74928393</td>
                        <td className="py-2 px-3 sm:py-4 sm:px-6">$1,230,322.00</td>
                        <td className="py-2 px-3 sm:py-4 sm:px-6 hidden sm:block">Yes</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}