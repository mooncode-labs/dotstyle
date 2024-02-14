import LeftNav from "@/components/structure/LeftNav";
import Header from "@/components/structure/Header";
import Footer from "@/components/structure/Footer";

export default function ComponentsLayout({
    children, // will be a page or nested layout
}) {
    return (
        <>
            <Header />
            <div className='w-full flex justify-center'>
                <div className='relative w-full flex min-h-screen flex-col max-w-screen-2xl justify-center'>
                    <div className='flex h-full'>
                        <LeftNav />
                        <main className='relative flex justify-between w-full xxl:mx-10 py-2    '>
                            {children}
                        </main>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}