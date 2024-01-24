import {redirect} from "next/navigation";

export const metadata  = {
    title: 'Introduction',
    description: 'Explore our collection of reusable UI components, build your design system, and create your own components!',
}

export default async function Page() {
    redirect('/docs/introduction')
}