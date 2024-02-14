import MainWithNav from '@/components/structure/MainWithNav';
import DocsSection from '@/components/structure/DocsSection';
import Link from "next/link";
import BreezeAccordion from "@/app/components/BreezeAccordion";

const links = [
    { href: '#how-does-it-work', title: 'How does it work?' },
    { href: '#why-tailwind?', title: 'Why Tailwind?' },
];

export const metadata  = {
    title: 'Introduction',
    description: 'Explore our collection of reusable UI components, build your design system, and create your own components!',
}

export default async function Page() {

    return (
        <MainWithNav navAnchors={links}>
            <DocsSection>
                <h2 className='siteText2 mb-2'>Introduction</h2>
                <h3 className='siteText3'>Explore our collection of reusable UI components, build your own design systems, and create your own components.</h3>
            </DocsSection>

            <DocsSection title={'How does it work'}>
                <p className='textP'>One of the issues with building components can be the design process itself.
                    Designing from scratch, staying consistent and making sure the design is accessible can be tough.
                    Furthermore, the translation of design systems to code, as well as creating custom components following a design pattern can be confusing.
                    These are the issue we aim to solve.</p>
                <p>In short, this app currently has 3 features:</p>
                <div className="flex flex-col ml-4">
                    <li>React + Tailwind <Link className="text-accent1" href={'/components'}>Component Library</Link></li>
                    <span className="textMute">For example: alerts, modals, toasts...</span>
                    <span className="textMute">You can browse our components from the left nav and copy their code to add them to your app. You can also ask AI for edits prior to copying.</span>
                </div>
                <div className="flex flex-col ml-4">
                    <li>Create <Link className="text-accent1" href={'/components'}>Design Systems</Link> with basic components</li>
                    <span className="textMute">Design systems contain input, buttons, cards, text variants, icons and badges and divs. Create your own styles and convert them into easy to use and familiar CSS classes.</span>
                </div>
                <div className="flex flex-col ml-4">
                    <li>Component <Link className="text-accent1" href={'/components'}>Builder</Link></li>
                    <span className="textMute">Type code, use AI chat, or upload an image to create custom components in our build tool.</span>
                    <span className="textMute">The code can then be copied into your app. The build tool will also render any custom classes you have made in your design system.</span>
                </div>

                <p>Our component library is free to use. However, we encourage you to create your own components using our CSS classes, your own CSS classes, or the builder.</p>

            </DocsSection>

            <DocsSection title={'Why Tailwind?'}>
                <p className='textP'>Tailwind CSS is a utility-first CSS framework designed to streamline and simplify the process of styling web applications. Tailwind CSS simplifies styling by providing a set of pre-defined utility classes that directly apply styles to HTML elements. Another bonus is the rather tiny CSS build size.</p>
                <p>While some may find it restrictive, the pre-defined classlist nature of Tailwind actually encourages a more consistent style throughout your app, rather that falling into the trap of having extremely specifc or one-case CSS values that may occur with traditional CSS styling. It also permits quick implementation of mobile responsiveness, dark mode, and pseudo states.</p>
                <p>Always remember, a great website is one that is consistent throughout, easy for your users to view and navigate, and one which is accessible to all types of users. Tailwind helps you achieve this.</p>
            </DocsSection>

            <DocsSection title={'FAQ'}>
                <div className='flex flex-col gap-2'>
                    <BreezeAccordion title='Which frameworks can I use this for?' id={1}>
                        Our premade components are created with React,
                        but our design systems are pure Tailwind @apply styles, so it is not locked to any framework.
                        The Build tool, while written in react syntax, has the options to copy the code as React, HTML with your classnames, or HTML with raw Tailwind.
                    </BreezeAccordion>
                    <BreezeAccordion title='Is there any licensing or royalties to use this in my project?' id={2}>
                        Nope! All our components, premium Blocks, AI generated components, and Themes are free to use in personal or commercial projects.
                    </BreezeAccordion>
                    <BreezeAccordion title='Do the components support TypeScript?' id={3}>
                        As of now, all our premade components are written in JavaScript. We may add TypeScript versions in the future, given enough demand or support from the community.
                        Saying this, conversion to TypeScript should be fairly easy, as our components are not complex.
                    </BreezeAccordion>
                    <BreezeAccordion title='Will it clash with my CSS?' id={4}>
                        No! Unless you have a class with the same name, our styles will not clash with your CSS. If they do, consider adding a prefix to our classes. Please be careful
                        when adding more classes on top of our classes, as you may have duplicated styles.
                    </BreezeAccordion>
                </div>
            </DocsSection>
        </MainWithNav>
    )
}