import MainWithNav from '@/components/structure/MainWithNav';
import DocsSection from '@/components/structure/DocsSection';

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
                <h2 className='siteText2 mb-2'>Dark Mode</h2>
                <h3 className='siteText3'>Explore our collection of reusable UI components, build your design system, and create your own components!</h3>
                <p className='textP'>BRUH</p>
            </DocsSection>
        </MainWithNav>
    )
}