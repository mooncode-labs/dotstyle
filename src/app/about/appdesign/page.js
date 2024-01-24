import MainWithNav from '@/components/structure/MainWithNav';
import DocsSection from '@/components/structure/DocsSection';
import { undoIcon } from '@/utils/svgStore';

const links = [
    { href: '#how-does-it-work', title: 'How does it work?' },
    { href: '#setup', title: 'Setup' },
    { href: '#why-tailwind?', title: 'Why Tailwind?' },
];

export const metadata = {
    title: 'Dotstyle Design',
    description: 'View the design system for dotstyle.',
}

export default async function Page() {

    return (
        <MainWithNav navAnchors={links}>
            <DocsSection>
                <h2 className='siteText2 mb-2'>Our Design System</h2>
                <h3 className='siteText3'>Check out our design system. 🪂</h3>
                <p className='textP'>dotstyle uses purely Tailwind CSS for all its UI. We use the darkMode: 'class' method. Our icons are from Heroicons, LucidReact and FontAwesome.</p>
            </DocsSection>

            <DocsSection title={'1. Typography'}>
                <div className='flex flex-col gap-4 p-2 outline-1 outline-gray-500 outline-dashed'>
                    <span className='siteText2'>Headings</span>
                    <span className='textTitle'>Modal Titles</span>
                    <span className='siteText3'>Heading Info</span>
                    <span className='siteText4 !m-0'>Sub-Heading 1</span>
                    <span className='siteText5'>Sub-Headings 2</span>
                    <span className='siteText6'>Small</span>
                    <span className='textP'>Body</span>
                    <span className='textMute'>Muted</span>
                </div>
            </DocsSection>

            <DocsSection title={'2. Card'}>
                <div className='flex flex-col gap-4 p-2 outline-1 outline-gray-500 outline-dashed'>
                    <div className='card-default'>
                        <span className='siteText5'>1. Default Card</span> <br />
                        It had been 12 years since I had seen him, and the first thing he says is 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
                    </div>
                    <div className='card-util'>
                        <span className='siteText5'>2. Utility Card</span> <br />
                        It had been 12 years since I had seen him, and the first thing he says is 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
                    </div>
                </div>
            </DocsSection>

            <DocsSection title={'3. Border'}>
                <div className='flex gap-4 p-2 outline-1 outline-gray-500 outline-dashed'>
                    <div className='max-w-xs borderBreeze rounded p-2 siteText6'>
                        1. Primary <br />
                        It had been 12 years since I had seen him, and the first thing he says is 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
                    </div>
                    <div className='max-w-xs border borderBreezeSecondary rounded p-2 siteText6'>
                        2. Secondary <br />
                        Its all about the journey, not the destination. The journey is Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                    </div>
                </div>
            </DocsSection>

            <DocsSection title={'4. Colors'}>
                <div className='flex flex-col gap-2 p-2 outline-1 outline-gray-500 outline-dashed'>
                    <div className='flex gap-4 items-center'>
                        <div className='flex items-start h-8 w-16'>
                            <span className='siteText5 !text-sm'>Primary</span>
                        </div>
                        <div className='flex gap-2 items-start'>
                            <div className='flex flex-col items-end'>
                                <span className='text-xs font-semibold font-mono'>L:</span>
                                <span className='textMute !text-xs'>bg-black</span>
                            </div>
                            <span className='w-8 h-8 bg-black border border-black rounded'></span>
                        </div>
                        <div className='flex gap-2 items-start'>
                            <div className='flex flex-col items-end'>
                                <span className='text-xs font-semibold font-mono'>D:</span>
                                <span className='textMute !text-xs'>bg-white</span>
                            </div>
                            <span className='w-8 h-8 bg-white border border-black rounded'></span>
                        </div>
                    </div>

                    <div className='flex gap-4 items-center'>
                        <div className='flex items-start h-8 w-16'>
                            <span className='siteText5 !text-sm'>Badge</span>
                        </div>
                        <div className='flex gap-2 items-start'>
                            <div className='flex flex-col items-end'>
                                <span className='text-xs font-semibold font-mono'>L:</span>
                                <span className='textMute !text-xs'>bg-black</span>
                            </div>
                            <span className='w-8 h-8 bg-emerald-200 border border-black rounded'></span>
                        </div>
                        <div className='flex gap-2 items-start'>
                            <div className='flex flex-col items-end'>
                                <span className='text-xs font-semibold font-mono'>D:</span>
                                <span className='textMute !text-xs'>bg-white</span>
                            </div>
                            <span className='w-8 h-8 bg-white border border-black rounded'></span>
                        </div>
                    </div>
                </div>
            </DocsSection>

            <DocsSection title={'5. Buttons'}>
                <div className='flex gap-4 p-2 outline-1 outline-gray-500 outline-dashed'>
                    <button className='btn-primary'>Primary</button>
                    <button className='btn-secondary'>Secondary</button>
                    <button className='btn-secondary'>Saved</button>
                    <button className='btn-secondary'>Unsaved</button>
                </div>
            </DocsSection>

            <DocsSection title={'6. Icons'}>
                <div className='flex gap-4 p-2 outline-1 outline-gray-500 outline-dashed'>
                    <button className='dotIcon'>{undoIcon}</button>
                </div>
            </DocsSection>
        </MainWithNav>
    )
}