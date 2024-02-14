import DocsSection from '@/components/structure/DocsSection';
import MainWithNav from "@/components/structure/MainWithNav";
import Image from "next/image";
import ImageWrapper from "@/components/utilities/ImageWrapper";
import DotSnippet from "@/components/utilities/DotSnippet";

const links = [
    { href: '#how-does-it-work?', title: 'How does it work?' },
    { href: '#global-styles', title: 'Global Styles' },
    { href: '#usage', title: 'Usage' },
    { href: '#helpful-features', title: 'Helpful Features' },
];

export const metadata  = {
    title: 'Design System',
    description: 'Learn how to use our Design system tool to create your own design system. It is easy to learn and use, even if you have little experience with Tailwind CSS.',
}

export default async function Page() {
    return (
        <MainWithNav navAnchors={links}>
            <DocsSection>
                <h2 className='siteText2 mb-2'>Design Systems</h2>
                <h3 className='siteText3'>Create your own custom design system to help build faster and visualise your design live.</h3>
            </DocsSection>

            <DocsSection title={'How does it work?'}>
                <div className={'flex md:flex-row flex-col gap-2'}>
                    <div className={'md:w-2/3 space-y-2'}>
                        <p className='font-mono'>1. Left Pane</p>
                        <p>You have your component classnames on the left.</p>
                        <p>The fist entry is the base class, this is where you include styles you want all the
                            variants to inherit.</p>
                        <p>For example, any styles placed in btn will be added to btnPrimary, btnOutline and btnSeconary.
                            This is great place to put constant styles, such as your focus, disabled, and container styles.</p>
                    </div>

                    <ImageWrapper>
                        <Image src={'/static/designsystem/left-pane.png'} alt={'left-pane-1'} width={400}
                               height={300}/>
                    </ImageWrapper>
                </div>
                <div className={' space-y-2'}>
                    <p className='font-mono'>2. Customizing</p>
                    <p>Clicking each class will open up individual utility classes used within it. You can choose
                        to type in classes or use the selectors. Selectors are a great if you do not know the syntax of
                        Tailwind too well. However, they do not provide every Tailwind class, nor allow arbitrary classes.
                    </p>
                    <p>It should be noted, a text box categrory name is completely irrelevant, since all text boxes are merged during
                        creation of the final copyable CSS. So it does not matter for example if you place a border class inside a text box
                        labelled color! You can put everthing in a single text box if you really want!</p>
                    <p className='font-mono'>3. Adding and Removing</p>
                    <p>You can add or remove variants with the + and - icons. You must have at minimum 1 variant with the base (you can just delete it after copying if you are not using it).</p>
                    <p className='font-mono'>4. Prefixing</p>
                    <p>The top navbar has a toggle to turn off prefixing. This removes all prefixes from the final CSS.
                        Be careful as classnames can get confusing if you have not named them well!
                    </p>
                    <p>We recongize that you may have a classname notation you are already following, therefore we provide this option to allow naming of classes to your rules.
                        Hyphens and underscores are allowed. Numbers are too, if you place one at the start however it will be prefixed with an 'n' since CSS rules do not permit classes to begin with a number.</p>

                </div>
            </DocsSection>

            <DocsSection title={'Global Styles'}>
                <p>Expanding the right pane displays the global styles. Here you can choose to set any styles you may want to reuse.
                    For example, a background color or a certain border radius.
                    Similair to the left pane, you can type these global styles.
                    To apply them, use the globe icon dropowns under each of the categories in the left pane to apply that global style.</p>
                <p> Global styles are a great way to ensure consistency when making your design system. You global styles will be saved with that particular design system only.</p>
            </DocsSection>

            <DocsSection title={'Usage'}>
                <p className='font-mono'>1. Copying</p>
                <p>Once you are happy with your design system, hit the copy CSS button on the top nav.</p>
                <p>This will format your design into Tailwind @apply rules with every base class and all your custom class names.
                    Inherited classes are automatically added into the @apply statement.</p>
                <p className='font-mono'>2. Using a Class</p>
                <p>Adding our classes to your elements is very straightforward. For example, to apply a button variant: <DotSnippet>className = 'btnPrimary'</DotSnippet>.</p>
                <p>Adding simply <DotSnippet>className = 'btn'</DotSnippet> will give you your unstyled btn. This opens up
                    possibilities to style on the go, like you would with regular inline Tailwind. Furthermore, you
                    do not have to worry about overrides and such complications, as only your barebone styling would
                    exist in this class.</p>
                <p>For example, you may have a single instance of a button which still requires
                    the base classes present in all your other buttons (like focus or disabled stylings) but don't what to create a whole class name for it:</p>
                <p><DotSnippet>className = 'btn bg-[#feedf2] border-2 border-emerald-800'</DotSnippet></p>
            </DocsSection>

            <DocsSection title={'Helpful Features'}>
                <p className='font-mono'>1. Hover over a component to view how you would write it out in JSX.</p>
                <p className='font-mono'>2. Designs are autosaved every 30 seconds.</p>
                <p className='font-mono'>3. View all your designs by clicking My Designs on the left of the top navbar.</p>
            </DocsSection>
        </MainWithNav>
    )
}