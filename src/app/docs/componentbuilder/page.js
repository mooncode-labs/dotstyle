import MainWithNav from '@/components/structure/MainWithNav';
import DocsSection from '@/components/structure/DocsSection';
import ImageWrapper from "@/components/utilities/ImageWrapper";
import Image from "next/image";
import DotSnippet from "@/components/utilities/DotSnippet";
import Link from "next/link";
import React from "react";

const links = [
    { href: '#how-does-it-work', title: 'How does it work?' },
    { href: '#setup', title: 'Setup' },
    { href: '#why-tailwind?', title: 'Why Tailwind?' },
];

export const metadata  = {
    title: 'Component Builder',
    description: 'Learn how to make the best use of our component builder with AI and Tailwind.',
}

export default async function Page() {

    return (
        <MainWithNav navAnchors={links}>
            <DocsSection>
                <h2 className='siteText2 mb-2'>Component Builder</h2>
                <h3 className='siteText3'>Create your own components with images and chat.</h3>
            </DocsSection>

            <DocsSection title={'How does it work?'}>
                <div className={'flex '}>
                    <div className={'space-y-2'}>
                        <p className='font-mono'>1. Sending Messages / Images</p>
                        <p>Type your message in chat, then click send.</p>
                        <button
                            className={`btn-primary h-8 w-8 !p-0`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"/>
                            </svg>
                        </button>
                        <p>To upload an image, first click select image, then press the upload arrow.</p>
                        <div className='flex gap-2'>
                            <button className={'btn-primary !bg-gray-800 !p-1 !h-8 !w-8 !text-accent1'}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2}
                                     stroke="currentColor" className="w-5 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"/>
                                </svg>
                            </button>
                            <button className={'btnPrimary !bg-gray-800 !p-1 !h-8 !w-8 !text-accent1'}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2}
                                     stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"/>
                                </svg>
                            </button>
                        </div>

                        <p>When uploading an image, your whole code will be reset. Image processing functionality is designed to give you a headstart on the UI, and not build upon existing
                            UIs.
                            Therefore, the best workflow is usually to upload an image first, if the starting code is desirable, continue to build it with your own code or chat.</p>
                    </div>
                </div>
                <div className={'space-y-2'}>
                    <p className='font-mono'>2. Using own classes</p>
                    <p>If you are currently working on a design system, you can type the CSS class names you have created into the className for the required element, and
                        the styles will be applied! To 'set' the current active design system, simply pressing the edit code button for it from the
                        <Link className={'text-accent1'} href={'/mydesigns'}> My Designs</Link> page will activate it.
                    </p>
                    <p className='font-mono'>3. Dark mode and responsive design</p>
                    <p>Switch between dark and light mode with the button in our header.</p>
                    <p>To activate mobile and full screen views, press the icons in the buttom right corner of the component preview. You can create responsive designs with Tailwind's
                        breakpoint prefixes. <Link className='text-accent1' href={'https://tailwindcss.com/docs/responsive-design'}>Learn More</Link>.</p>
                </div>
            </DocsSection>

            <DocsSection title={'How to best use chat'}>
                <p>Chat works well when you iterate small and concisely. You can ask it to edit anything, but being clear will give you better results.</p>
                <p>Your questions could be like this:</p>
                <ul className='pl-4 list-disc'>
                    <li>"Create a subcsription modal".</li>
                    <li>"Add dark mode colors to this component"</li>
                    <li>"Make this component responsive"</li>
                    <li>"Change the color of the send button"</li>
                    <li>"Add a black border to this component"</li>
                </ul>
                <p>This app is a component builder, not a website page builder. Asking to create whole page layouts will produce unexpected results,
                    especially given the small window to work with, which may make things cumbersome when having to switch to full screen view all the time.</p>
                <p>If you find that chat has made a mistake, you can always hit ctrl+z to undo.
                </p>
                <p>Furthermore, you will notice no react functionality is allowed (as of yet). Code is purely visual. This is to both allow users of HTML and other frameworks to use this tool,
                and to prevent the confusion that can be created when rendering React, due to its large intricacies.</p>
            </DocsSection>

            <DocsSection title={'DotStyle Blocks'}>
                <p>Blocks can be accessed by clicking Blocks in the top right of the navbar.</p>
                <p>This is a premium feature. It contains many prebuilt UI blocks, complete with responsive design and dark mode colors. They are great for you to get a headstart in your designs.</p>
                <p>Blocks can be edited with code or AI to suit your style. They do not use our CSS class names and are pure Tailwind, providing absolute control over the stylings.</p>
            </DocsSection>

            <DocsSection title={'Helpful Features'}>
                <p className='font-mono'>1. ctrl+z to undo and crtl+y to redo code edits.</p>
                <p className='font-mono'>2. The editor (monaco editor) is very similair to VS code, infact it is what VS code is built upon.
                    You have a lot of the familiar actions like formatting code, refactoring multiple lines, autocomplete etc...</p>
                <p className='font-mono'>3. View all your components by clicking My Components on the left of the top navbar.</p>
                <p className='font-mono'>4. Change font size with the S and L buttons on the top navbar.</p>
            </DocsSection>
        </MainWithNav>
    )
}