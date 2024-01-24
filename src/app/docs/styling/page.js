// noinspection HtmlUnknownAttribute

import BreezeCode from '@/components/structure/BreezeCode';
import DocsSection from '@/components/structure/DocsSection';
import MainWithNav from "@/components/structure/MainWithNav";
import DotSnippet from "@/components/utilities/DotSnippet";

const links = [
    { href: '#how-to-design', title: 'How to design' },
    { href: '#further-styling', title: 'Further Styling' },
    { href: '#animations', title: 'Animations' }
];

export const metadata  = {
    title: 'Styling',
    description: 'Learn how to design your components with our design system using Tailwind CSS.',
}

const sampleStyling1 =
    `<div className="cardDefault">
    <input
        className="input"
        type="text"
        placeholder={"Type something..."}
    />
    <button className="btnPrimary">Primary</button>
</div>
`
const sampleStyling2 =
    `<div className='cardDefault justify-between flex flex-col gap-2'>
    <span className="text3">Add User</span>
    <span className="textMuted">Add a new user to your team</span>
    <div className="mt-2">
        <span className="textLabel">Name</span>
        <input type="text"
               placeholder="Name"
               className="input"/>
    </div>
    <div>
        <span className="textLabel">Email</span>
        <input className="input"
               type="text"
               placeholder="Email"/>
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
                <h2 className='siteText2 mb-2'>Styling</h2>
                <h3 className='siteText3'>Some more styling tips.</h3>
            </DocsSection>

            <DocsSection title={'How to design'}>
                <p>The following is a simple component consisting of our cardDefault class with our input and btnPrimary stylings inside:</p>
                <div className="flex lg:flex-row flex-col justify-between gap-2">
                    <BreezeCode>{sampleStyling1}</BreezeCode>
                    <div className="basis-2/3 max-w-sm">
                        <div className="cardDefault">
                            <input
                                type="text"
                                placeholder={"Type something..."}
                                className="input"
                            />
                            <button className="btnPrimary">Primary</button>
                        </div>
                    </div>

                </div>

                <h4 id='further-styling' className="siteText4">Further Styling</h4>
                <p>Let's make this card look better... We can modify the layout quite easily with our classes and Tailwind:</p>
                <div className="flex lg:flex-row flex-col justify-between gap-2">
                    <BreezeCode>{sampleStyling2}</BreezeCode>
                    <div className="basis-2/3 max-w-sm">
                        <div className='cardDefault justify-between flex flex-col gap-2'>
                            <span className="text3">Add User</span>
                            <span className="textMuted">Add a new user to your team</span>
                            <div className="mt-2">
                                <span className="textLabel">Name</span>
                                <input type="text"
                                       placeholder="Name"
                                       className="input" />
                            </div>
                            <div>
                                <span className="textLabel">Email</span>
                                <input className="input"
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
                <p>As you can see with this approach, code is easier to follow without the clutter of large Tailwind classes. When taking this approach, you ensure uniform design throughout your app, as all cards, buttons, and inputs will look the same. The only thing that changes is their arrangement, which we leave to you.</p>
            </DocsSection>

            <DocsSection title={'Animations'}>
                <p>Our classes use animations, however they can be turned off by removing the transition and duration tailwind classes from the classnames.</p>
                <p>When rendering animations based on states, some folks may not know it is fairly easy to do with React and Tailwind.</p>
                <p>For example, to show a tooltip based on a react useState <DotSnippet>showTooltip</DotSnippet>:</p>
                <BreezeCode>{`\`\${showTooltip ? 'translate-y-0 opacity-100 visible' : 'translate-y-2 opacity-0 invisible'}\``}</BreezeCode>
                <p>You can see that each of translate, opacity and visibility have a state during the true and false conditions. This can be accompanied with animation utilities, for example <DotSnippet>duration-200</DotSnippet> and <DotSnippet>transition-all</DotSnippet> to complete the animation:</p>
                <BreezeCode>{`className = {\`\${showTooltip ? 'translate-y-0 opacity-100 visible' : 'translate-y-2 opacity-0 invisible'} duration-200 transition-all\`}`}</BreezeCode>
                <p>All our premade components which have animations have these classes already, and so do our default designs systems (usually present inside the container) so feel free to use them!</p>
            </DocsSection>
        </MainWithNav>
    )
}