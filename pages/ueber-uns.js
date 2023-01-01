import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Wallpaper from '../components/Wallpaper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css'


export default function ueberUns() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main>

                <Wallpaper srcString={"/../public/assets/jobs-wallpaper.jpg"} />
                <div className='mx-auto max-w-6xl'>
                    <div className="about-us-container flex flex-col lg:flex-row items-top p-4">
                        <Image src="/../public/assets/about-us.jpg" width={600} height={600} className="object-cover w-[70vw] m-6 lg:w-60 lg:h-60" />
                        <div className="wrapper text-center lg:text-left">
                            <div className="h2-container inline-block relative mb-12 lg:mt-12 lg:mx-auto lg:text-center ">
                                <h2 className='text-2xl font-extrabold text-[color:var(--ls-blue)] text-center lg:text-left'> Über Uns: Die Landschwestern</h2>
                                <div className="yellow-bar"></div>
                            </div>
                            <p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                                ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                                magna aliquyam erat, sed diam voluptua. At vero eos et ccusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>

                    <div className="about-us-container flex flex-col lg:flex-row items-top p-4">
                        <Image src="/../public/assets/about-us.jpg" width={300} height={300} className="object-cover w-[70vw] m-6 lg:w-60 lg:h-60" />

                        <div className="wrapper text-center lg:text-left">
                            <div className="h2-container inline-block relative mb-12 lg:mt-12 lg:mx-auto lg:text-center ">
                                <h2 className='text-2xl font-extrabold text-[color:var(--ls-blue)] text-center lg:text-left'> Unser Team:</h2>
                                <div className="yellow-bar"></div>
                            </div>
                            <p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                                ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                                magna aliquyam erat, sed diam voluptua. At vero eos et ccusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>

            </main>
            <Footer />
        </>
    )
}