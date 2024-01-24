import MainWithNav from '@/components/structure/MainWithNav';
import BreezeCode from '@/components/structure/BreezeCode';
import DocsSection from '@/components/structure/DocsSection';
import Link from "next/link";

const links = [
    {href: '#setup', title: 'Setup'},
];

export const metadata = {
    title: 'Setup',
    description: 'Get ready to start creating with our components.',
}


const defaultCSS =
    `.text{
  @apply text-black dark:text-white
}
.text1 {
  @apply text text-5xl font-extrabold
}
.text2 {
  @apply text text-3xl font-semibold
}
.text3 {
  @apply text text-2xl font-semibold
}
.text4 {
  @apply text text-lg font-semibold
}
.text5 {
  @apply text text-sm font-semibold
}
.text6 {
  @apply text text-xs font-normal
}
.textBody {
  @apply text-sm text-black dark:text-white font-normal
}
.textMuted {
  @apply text-sm text-zinc-600 dark:text-zinc-400 font-normal
}
.textAccent {
  @apply text-sm text-blue-400 font-normal
}
.textQuote {
  @apply text-xs text-zinc-600 dark:text-zinc-400 italic
}

.card {
  @apply bg-white dark:bg-zinc-900 border
}
.cardDefault {
  @apply card border-zinc-300 dark:border-zinc-600 rounded shadow-md hover:shadow-lg p-4 transition-all duration-200 ease-in-out
}
.cardUtil {
  @apply card border-zinc-200 dark:border-zinc-700 rounded p-1 transition-all transform
}

.btn{
  @apply focus-visible:outline-none focus-visible:ring-blue-400 focus-visible:ring focus-visible:border-0 transition-colors disabled:cursor-not-allowed disabled:opacity-50 flex justify-center items-center gap-2 px-2 h-9 duration-200
}
.btnPrimary {
  @apply btn bg-zinc-900 dark:bg-white hover:bg-zinc-600 dark:hover:bg-zinc-400 text-white dark:text-black text-sm rounded-md
}
.btnOutline {
  @apply btn hover:bg-zinc-200 dark:hover:bg-zinc-800 text-sm text-black dark:text-white border-2 border-zinc-600 dark:border-zinc-300 rounded
}
.btnSecondary {
  @apply btn bg-zinc-100 dark:bg-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-sm text-black dark:text-white border border-zinc-300 dark:border-zinc-600 rounded
}
.textLabel {
  @apply text-xs text-black dark:text-white font-semibold
}

.badge {
  @apply bg-black dark:bg-white hover:bg-zinc-800 dark:hover:bg-zinc-300 text-xs text-white dark:text-black rounded-full disabled:cursor-not-allowed disabled:opacity-50 flex justify-center items-center p-1 px-2 duration-200
}
`

export default async function Page() {

    return (
        <MainWithNav navAnchors={links}>
            <DocsSection>
                <h2 className='siteText2 mb-2'>Setup</h2>
                <h3 className='siteText3'>Get ready to start creating with our components.</h3>
            </DocsSection>

            <DocsSection>
                <p className='textP'>This is not a component library or package. This comes with the benefit of no dependencies,
                    no imports, no configurations, and no messing around with your files and folders. Infact,
                    all our styles are stored in your global CSS file.</p>
                <p className='border border-zinc-500 p-2 rounded bg-green-100 dark:bg-emerald-500/20'>This setup is required only if you are going to copy and paste our components into your app, since they use these stylings.
                If you are only using our Design System creator, or component builder, there is NO SETUP needed (except installing Tailwind CSS).
                    In the design system creator, you create your own custom version of the @apply styles below.</p>
                <p className='textP mt-2'>Since our styles use Tailwind CSS, this will be your only installation. Follow
                    the steps below:</p>
                <div className='flex flex-col sm:gap-8 gap-6 p-2 font-semibold text-xl my-4'>
                    <div className='flex sm:flex-row flex-col items-start gap-2 border-b border-dashed pb-4'>
                        <div
                            className='rounded-full min-w-[25px] h-[25px] flex items-center justify-center bg-black dark:bg-white text-white dark:text-black font-semibold text-sm'>
                            1
                        </div>
                        <div className='flex gap-1'>
                            <div className=''>Install Tailwind CSS via npm. Instructions
                                <Link href={'https://tailwindcss.com/docs/installation'} className='text-blue-500'> here</Link>.
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='flex sm:flex-row flex-col items-start gap-2 border-b border-dashed pb-4'>
                            <div
                                className='rounded-full min-w-[25px] h-[25px] flex items-center justify-center bg-black dark:bg-white text-white dark:text-black font-semibold text-sm'>2
                            </div>
                            <div className='flex'>
                                <div>Paste this code into your global CSS file.</div>
                            </div>
                        </div>
                        <BreezeCode>{defaultCSS}</BreezeCode>
                    </div>
                    <div className='flex flex-col items-start gap-2 border-b border-dashed pb-4'>
                        <div className='flex gap-2 items-center'>
                            <div
                                className='rounded-full min-w-[25px] h-[25px] flex items-center justify-center bg-black dark:bg-white text-white dark:text-black font-semibold text-sm'>3
                            </div>
                            <div>That's it?!</div>
                        </div>
                        <p className={'siteHomeBody'}>Yeah that's it. If you want dark mode capability, make sure your
                            tailwind.config.js is using darkMode: 'class'.
                            This is usually enabled by default.</p>
                    </div>
                </div>
            </DocsSection>
        </MainWithNav>
    )
}