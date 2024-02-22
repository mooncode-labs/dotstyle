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
    `.input {
  @apply focus-visible:outline-none focus-visible:border-2 focus-visible:border-blue-400 dark:focus-visible:border-blue-400 disabled:cursor-not-allowed disabled:opacity-50 flex justify-center items-center p-2 pl-3 transition-colors invalid:border-red-500 invalid:text-red-600 focus:invalid:border-red-500
}
.inputMain {
  @apply input bg-white dark:bg-zinc-900 text-sm text-black dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 h-9 shadow-sm border border-zinc-300 dark:border-zinc-700 rounded-md
}

.text{
  @apply text-black dark:text-white
}
.text1 {
  @apply text text-5xl font-extrabold
}
.text2 {
  @apply text text-3xl font-semibold
}
.text3 {
  @apply text text-2xl font-bold
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
.textLabel {
  @apply text-xs text-black dark:text-white font-semibold
}

.card {
  @apply bg-white dark:bg-zinc-900 border
}
.cardDefault {
  @apply card border-zinc-300 dark:border-zinc-800 rounded-md shadow hover:shadow-md p-4 transition-all duration-200 ease-in-out
}
.cardUtil {
  @apply card border-zinc-200 dark:border-zinc-700 rounded-md shadow p-1 transition-all transform
}

.btn{
  @apply focus-visible:outline-none focus-visible:ring-blue-400 focus-visible:ring active:scale-95 focus-visible:border-0 transition-all disabled:cursor-not-allowed disabled:opacity-40 flex justify-center items-center gap-2 px-2 h-8 duration-200 shadow-sm
}
.btnPrimary {
  @apply btn bg-zinc-900 dark:bg-white hover:bg-zinc-600 dark:hover:bg-zinc-400 text-white dark:text-black text-sm rounded-md font-medium
}
.btnDanger {
  @apply btn bg-red-500 hover:bg-red-600 text-white text-sm rounded-md font-medium
}
.btnOutline {
  @apply btn hover:bg-zinc-200 dark:hover:bg-zinc-800 text-sm text-black dark:text-white border-2 border-zinc-600 dark:border-zinc-400 rounded-md font-medium
}
.btnSecondary {
  @apply btn bg-white dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-sm text-zinc-800 dark:text-white border border-gray-200 dark:border-zinc-800 rounded-md font-medium
}

.badge {
  @apply disabled:cursor-not-allowed disabled:opacity-50 flex justify-center items-center p-1 px-2 duration-200
}
.badgeRounded {
  @apply badge bg-black dark:bg-white hover:bg-zinc-800 dark:hover:bg-zinc-300 text-xs text-white dark:text-black rounded-full
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
                    no imports, no configurations, and no messing around with your files and folders. All our styles are stored in your global/main CSS file.
                    For those who are familiar with the Tailwind @apply directive, you can also place them in CSS modules too.</p>
                <p>Coming up with classnames used to be a hassle for developers, but we've done all the hard work of making our default design as future proof and modern as
                    possible - with focus, active, hover, disabled and invalid states. Think of this as us giving you fully styled CSS classes to use.
                    It is designed to work well right away, or blend well with most design systems. Remember, you can change anything and everything in the styles, and even create your own with our design system creator.</p>
                <p>
                    Finally, we use Inter as our default font throughout the site and its components. But you may use any font you wish, we will leave this up to you 😊.
                </p>

                <p className='textP mt-2'>Since our styles use Tailwind CSS, this will be your only installation. Follow
                    the steps below:</p>
                <div className='flex flex-col sm:gap-8 gap-6 font-semibold text-xl my-4'>
                    <div className='flex sm:flex-row flex-col items-start gap-2 pb-4'>
                        <div
                            className='rounded-full min-w-[25px] h-[25px] flex items-center justify-center bg-black dark:bg-white text-white dark:text-black font-semibold text-sm'>
                            1
                        </div>
                        <div className='flex gap-1'>
                            <div className=''>Install Tailwind CSS. Instructions
                                <Link href={'https://tailwindcss.com/docs/installation'} className='text-accent1' rel="noopener noreferrer" target="_blank"> here</Link>.
                            </div>

                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='flex sm:flex-row flex-col items-start gap-2'>
                            <div
                                className='rounded-full min-w-[25px] h-[25px] flex items-center justify-center bg-black dark:bg-white text-white dark:text-black font-semibold text-sm'>2
                            </div>
                            <div className='flex'>
                                <div>Paste this code into your global CSS file.</div>
                            </div>
                        </div>
                        <p className={'siteHomeBody'}>These class names are used in our component library. Feel free to change them to your liking, remove ones you do not need, or add
                        more of your own!</p>
                        <BreezeCode>{defaultCSS}</BreezeCode>
                    </div>
                    <div className='flex flex-col items-start gap-2 pb-4'>
                        <div className='flex gap-2 items-center'>
                            <div
                                className='rounded-full min-w-[25px] h-[25px] flex items-center justify-center bg-black dark:bg-white text-white dark:text-black font-semibold text-sm'>3
                            </div>
                            <div>That's it?!</div>
                        </div>
                        <p className={'siteHomeBody'}>Yeah that's it. Now you can copy and paste our components into your app. You will see the styles being called in our component's classNames where applicable.
                            Not every component uses them, but most do.
                        </p>
                    </div>
                </div>
            </DocsSection>
        </MainWithNav>
    )
}