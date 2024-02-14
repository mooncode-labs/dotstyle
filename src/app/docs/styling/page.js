// noinspection HtmlUnknownAttribute

import BreezeCode from '@/components/structure/BreezeCode';
import DocsSection from '@/components/structure/DocsSection';
import MainWithNav from "@/components/structure/MainWithNav";
import DotSnippet from "@/components/utilities/DotSnippet";

const links = [
    { href: '#how-to-design', title: 'How to design' },
    { href: '#animations', title: 'Animations' }
];

export const metadata  = {
    title: 'Styling',
    description: 'Learn how to design your components with our design system using Tailwind CSS.',
}

const sampleStyling2 =
    `<div className='cardDefault space-y-4'>
    <div className="text3">Add User</div>
    <div className="textMuted">Add a new user to your team</div>
    <div className="mt-2">
        <span className="textLabel">Name</span>
        <input className="inputMain w-full" type="text" placeholder="Name"/>
    </div>
    <div>
        <span className="textLabel">Email</span>
        <input className="inputMain w-full" type="text" placeholder="Email"/>
    </div>
    <div className="flex justify-between mt-4">
        <button className="btnSecondary">Cancel</button>
        <button className="btnPrimary">Add</button>
    </div>
</div>
`;

export default async function Page() {
    return (
        <MainWithNav navAnchors={links}>
            <DocsSection>
                <h2 className='siteText2 mb-2'>Styling Tips</h2>
                <h3 className='siteText3'>Some more styling tips.</h3>
            </DocsSection>

            <DocsSection title={'How to design'}>
                <p>Let's make a simple card to add a user. We can generate the UI quite easily and quickly with our classes and Tailwind:</p>
                <div className="flex lg:flex-row flex-col justify-between gap-2">
                    <div className='md:w-[60%]'>
                        <BreezeCode>{sampleStyling2}</BreezeCode>

                    </div>
                    <div className="md:w-[40%] max-w-sm">
                        <div className='cardDefault space-y-4'>
                            <div className="text3">Add User</div>
                            <div className="textMuted">Add a new user to your team</div>
                            <div className="mt-2">
                                <span className="textLabel">Name</span>
                                <input type="text"
                                       placeholder="Name"
                                       className="inputMain w-full" />
                            </div>
                            <div>
                                <span className="textLabel">Email</span>
                                <input className="inputMain w-full"
                                       type="text"
                                       placeholder="Email"/>
                            </div>
                            <div className="flex justify-between mt-4">
                                <button className="btnSecondary">Cancel</button>
                                <button className="btnPrimary">Add</button>
                            </div>
                        </div>
                    </div>
                </div>
                <p>As you can see with this approach, code is easier to follow without the clutter of large Tailwind classes.
                    Furthermore, reusing CSS classes without re-typing saves so much time, with no risk of missing something.
                    Likewise, making a change to your class in your CSS file in just 1 location will update styles throughout your whole app.</p>
            </DocsSection>

            <DocsSection title={'Animations'}>
                <p>Our classes use animations, however they can be turned off by removing the transition and duration tailwind classes from the classnames.</p>
                <p>When rendering animations based on states, some folks may not know it is fairly easy to do with React and Tailwind.</p>
                <p>For example, to show a tooltip based on a react useState <DotSnippet>showTooltip</DotSnippet>:</p>
                <BreezeCode>{`\`\${showTooltip ? 'translate-y-0 opacity-100 visible' : 'translate-y-2 opacity-0 invisible'}\``}</BreezeCode>
                <p>You can see that each of translate, opacity and visibility have a state during the true and false conditions. This can be accompanied with animation utilities, for example <DotSnippet>duration-200</DotSnippet> and <DotSnippet>transition-all</DotSnippet> to complete the animation:</p>
                <BreezeCode>{`className = {\`\${showTooltip ? 'translate-y-0 opacity-100 visible' : 'translate-y-2 opacity-0 invisible'} duration-200 transition-all\`}`}</BreezeCode>
                <p>All our premade components which have animations have these classes already, and so do our sample design systems (usually present inside the container textbox) so feel free to use them!</p>
            </DocsSection>
        </MainWithNav>
    )
}