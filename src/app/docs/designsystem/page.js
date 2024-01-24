import DocsSection from '@/components/structure/DocsSection';
import MainWithNav from "@/components/structure/MainWithNav";
import Link from "next/link";
import ImageComponent from "@assets/image/image-1";
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
                <h2 className='siteText2 mb-2'>Tailwind Builder</h2>
                <h3 className='siteText3'>Create your own custom design system to help build your components and visualise your design live.</h3>
            </DocsSection>

            <DocsSection title={'How does it work?'}>
                <div className={'flex gap-2'}>
                    <div className={'w-2/3 space-y-2'}>
                        <p>Its pretty simple. You have your basic components on the left pane.</p>
                        <p>The very fist entry for each is the base class, this is where you include styles you want all the
                            variants to inherit.</p>
                        <p>For example, any styles placed in btn will be added to btnPrimary, btnOutline and btnSeconary. Therefore this is great place to put constant styles, such as your focus, disabled, and container styles.</p>
                    </div>

                    <ImageWrapper>
                        <Image src={'/static/designsystem/left-pane.png'} alt={'left-pane-1'} width={400}
                               height={300}/>
                    </ImageWrapper>
                </div>
                <div className={' space-y-2'}>
                    <p>Adding any of these classes is as simple as <DotSnippet>className = 'btnPrimary'</DotSnippet>.</p>
                    <p>Adding simply <DotSnippet>className = 'btn'</DotSnippet> will give you your unstyled btn. This opens up
                        possibilities to style on the go, like you would with regular inline Tailwind. Furthermore, you
                        do not have to worry about overrides and such complications, as only your barebone styling would
                        exist in this class.</p>
                    <p>For example, you may have a highly customised, single instance of a button which still requires
                        focus and disabled states like your other buttons:</p>
                    <p><DotSnippet>className = 'btn bg-[#feedf2] border-2 border-emerald-800'</DotSnippet></p>
                    <p>Clicking each class will open up all the indiviual utility classes used within it. You can choose
                        to type in classes or use the selectors. Selectors are a great if you do not know the syntax of
                        Tailwind too well. However, they do not provide every Tailwind class, nor allow arbitrary classes.
                    </p>
                    <p>It should be noted, a text box categrory name is completely irrelevant, since all text boxes are merged during
                    creation of the final copyable CSS, so it does not really matter for example, if you place a border class inside a text box
                    labelled color! You can put everthing in a single text box if you really want.</p>
                    <p>Finally, you can add or remove variants with the + and - icons. All variants are prefixed with the parent
                    component prefix.</p>
                </div>
            </DocsSection>

            <DocsSection title={'Global Styles'}>
                <p>Expanding the right pane displays the global styles. Here you can choose to set any styles you may want to reuse. For example a background color or a certain border radius. Similair to the left pane, you can type these global styles. Then, simply use the dropowns under each of the categories inside your base components to apply that global style.</p>
                <p> Global styles are a great way to ensure consistency when making your design system. You global styles will be saved with that particular design system only.</p>
            </DocsSection>

            <DocsSection title={'Usage'}>
                <p>Once you are happy with your design system, hit the copy CSS button on the right pane.</p>
                <p>This will format your design into Tailwind @apply rules with every base class and all your custom class names.
                    Inherited classes are automatically added into the @apply statement.</p>
            </DocsSection>

            <DocsSection title={'Helpful Features'}>
                <p>Hover over a component to view how you would write it out in JSX.</p>
                <p>Regularly save your designs with the save button.</p>
                <p>View all your designs by clicking My Designs</p>
            </DocsSection>
        </MainWithNav>
    )
}