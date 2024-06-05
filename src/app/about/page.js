import MainWithNav from '@/components/structure/MainWithNav';
import DocsSection from '@/components/structure/DocsSection';
import { undoIcon } from '@/utils/svgStore';
import React from "react";
import Link from "next/link";

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
                <p className='textP'>DotStyle uses purely Tailwind CSS for all its UI. Our icons are from Heroicons, LucidReact and FontAwesome.</p>
            </DocsSection>

            <DocsSection title={'1. Typography'}>
                <div className='flex flex-col gap-4 p-4 rounded-lg outline-1 outline-gray-500 outline-dashed'>
                    <span className='siteText2'>Headings</span>
                    <span className='textTitle'>Titles</span>
                    <span className='siteText3'>Heading Info</span>
                    <span className='siteText4 !m-0'>Sub-Heading 1</span>
                    <span className='siteText5'>Sub-Headings 2</span>
                    <span className='siteText6'>Small</span>
                    <span className='textP'>Body</span>
                    <span className='textMute'>Muted</span>
                </div>
            </DocsSection>

            <DocsSection title={'2. Card'}>
                <div className='flex flex-col gap-4 p-4 rounded-lg outline-1 outline-gray-500 outline-dashed'>
                    <div className='card-default'>
                        <span className='siteText5'>1. Popup Card</span> <br/>
                        The Moon's surface is covered with craters, mountains, and flat plains called 'maria', which are basaltic rock from ancient volcanic eruptions.
                    </div>
                    <div className='dotBorder border-2 p-4 rounded-lg'>
                        <span className='siteText5'>2. Wrapper Card</span> <br/>
                        The Moon's surface is covered with craters, mountains, and flat plains called 'maria', which are basaltic rock from ancient volcanic eruptions.
                    </div>
                    <div className='card-util'>
                        <span className='siteText5'>3. Utility Card</span> <br/>
                        The Moon's surface is covered with craters, mountains, and flat plains called 'maria', which are basaltic rock from ancient volcanic eruptions.
                    </div>
                </div>
            </DocsSection>

            <DocsSection title={'3. Colors'}>
                <div className='flex flex-col gap-2 p-4 rounded-lg outline-1 outline-gray-500 outline-dashed'>
                    <div className='gap-4 grid grid-cols-3 max-w-sm'>
                        <div className='flex items-start h-8 w-16'>
                            <span className='siteText5 !text-sm'>Primary</span>
                        </div>
                        <div className='flex gap-2 justify-end'>
                            <div className='flex flex-col items-end'>
                                <span className='text-xs font-semibold font-mono'>L:</span>
                                <span className='textMute !text-xs'>bg-black</span>
                            </div>
                            <span className='w-8 h-8 bg-black border border-black rounded'></span>
                        </div>
                        <div className='flex gap-2 justify-end'>
                            <div className='flex flex-col items-end'>
                                <span className='text-xs font-semibold font-mono'>D:</span>
                                <span className='textMute !text-xs'>bg-white</span>
                            </div>
                            <span className='w-8 h-8 bg-white border border-black rounded'></span>
                        </div>
                    </div>

                    <div className='gap-4 grid grid-cols-3 max-w-sm'>
                        <div className='flex items-start h-8 w-16'>
                            <span className='siteText5 !text-sm'>Accent</span>
                        </div>
                        <div className='flex gap-2 justify-end'>
                            <div className='flex flex-col items-end'>
                                <span className='text-xs font-semibold font-mono'>L:</span>
                                <span className='textMute !text-xs'>#35e686</span>
                            </div>
                            <span className='w-8 h-8 bg-accent1 border border-black rounded'></span>
                        </div>
                        <div className='flex gap-2 justify-end'>
                            <div className='flex flex-col items-end'>
                                <span className='text-xs font-semibold font-mono'>D:</span>
                                <span className='textMute !text-xs'>#35e686</span>
                            </div>
                            <span className='w-8 h-8 bg-accent1 border border-black rounded'></span>
                        </div>
                    </div>
                    <div className='gap-4 grid grid-cols-3 max-w-sm'>
                        <div className='flex items-start h-8 w-16'>
                            <span className='siteText5 !text-sm'>Header</span>
                        </div>
                        <div className='flex gap-2 justify-end'>
                            <div className='flex flex-col items-end'>
                                <span className='text-xs font-semibold font-mono'>L:</span>
                                <span className='textMute !text-xs'>#e4e8ea</span>
                            </div>
                            <span className='w-8 h-8 bg-[#e4e8ea] border border-black rounded'></span>
                        </div>
                        <div className='flex gap-2 justify-end'>
                            <div className='flex flex-col items-end'>
                                <span className='text-xs font-semibold font-mono'>D:</span>
                                <span className='textMute !text-xs'>bg-black</span>
                            </div>
                            <span className='w-8 h-8 bg-black border border-black rounded'></span>
                        </div>
                    </div>
                </div>
            </DocsSection>

            <DocsSection title={'4. Buttons'}>
                <div className='flex md:flex-row flex-col gap-4 p-4 rounded-lg outline-1 outline-gray-500 outline-dashed'>
                    <div className='flex gap-2'>
                        <button className='btn-primary'>Primary</button>
                        <button className='btn-secondary'>Secondary</button>
                        <button
                            className={`btn-primary h-8 w-8 !p-0`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"/>
                            </svg>
                        </button>
                        <button className={'btnPrimary !bg-gray-800 !p-1 !h-8 !w-8 !text-accent1'}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2}
                                 stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"/>
                            </svg>
                        </button>
                    </div>
                    <div className='flex gap-2'>
                        <button className={`btn-primary !bg-red-400`}>
                            Save
                        </button>
                        <button className={`btn-primary !bg-accent1`}>
                            Saved
                        </button>
                    </div>


                </div>
            </DocsSection>

            <DocsSection title={'5. Icons'}>
                <div className='flex gap-4 p-4 rounded-lg outline-1 outline-gray-500 outline-dashed'>
                    <button className='w-8 h-8 flex items-center justify-center rounded-full border-2 border-black dark:border-white'>{undoIcon}</button>
                </div>
            </DocsSection>

            <DocsSection title={'6. Inputs'}>
                <div className='flex gap-4 p-4 rounded-lg outline-1 outline-gray-500 outline-dashed'>
                    <input type="text" className='siteInput' placeholder='Default Input'/>
                </div>
            </DocsSection>
            <DocsSection title={'7. Badge'}>
                <div className='flex gap-4 p-4 rounded-lg outline-1 outline-gray-500 outline-dashed items-center'>
                    <div className="text-xs bg-[#63f7a7] font-medium rounded-full p-1 border-black border text-black h-5 w-fit flex items-center justify-center">
                        v1.0
                    </div>
                    <span className='rounded px-1 h-fit bg-emerald-300 text-black text-xs'>v1.0</span>
                </div>
            </DocsSection>
        </MainWithNav>
    )
}