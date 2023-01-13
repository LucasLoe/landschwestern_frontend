import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Wallpaper from '../components/Wallpaper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css'
import client from '../client'
import imageUrlBuilder from '@sanity/image-url'
import { PortableText } from '@portabletext/react'


export default function ueberUns(data) {

    function urlFor(source) {
        return imageUrlBuilder(client).image(source)
    }

    return (
        <>
            <Head>
                <title>Die Landschwestern: Über Uns</title>
                <meta name="description" content="Ein Pflegedienst aus der Uckermark  mit ambulanter Pflege, Tagespflege und Senioren-WG." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main>

                <Wallpaper srcString={urlFor(data.data.image.asset._ref).url()}  />
                <div className='mx-auto max-w-6xl'>
                    <div className="about-us-container flex flex-col lg:flex-row items-top p-4">
                        <Image src={urlFor(data.data.imageTop.asset._ref).url()} width={600} height={600} className="object-cover w-[70vw] my-6 mx-auto lg:mx-6 lg:w-60 lg:h-60" alt="something" />
                        <div className="wrapper text-center lg:text-left">
                            <div className="h1-container inline-block relative mb-12 lg:mt-12 lg:mx-auto lg:text-center ">
                                <h1 className='text-2xl font-extrabold text-[color:var(--ls-blue)] text-center lg:text-left mark mark-purple'>{data.data.headerTop}</h1>
                                <div className="yellow-bar"></div>
                            </div>
                            <div>
                                <PortableText value={data.data.descriptionTop} className='text-center lg:text-left' />
                            </div>
                        </div>
                    </div>

                    <div className="about-us-container flex flex-col lg:flex-row items-top p-4">
                        <Image src={urlFor(data.data.imageBottom.asset._ref).url()} width={300} height={300} className="object-cover w-[70vw] my-6 mx-auto lg:mx-6 lg:w-60 lg:h-60" alt="something" />

                        <div className="wrapper text-center lg:text-left">
                            <div className="h1-container inline-block relative mb-12 lg:mt-12 lg:mx-auto lg:text-center ">
                                <h1 className='text-2xl font-extrabold text-[color:var(--ls-blue)] text-center lg:text-left mark mark-purple'>{data.data.headerBottom}</h1>
                                <div className="yellow-bar"></div>
                            </div>
                            <div>
                                <PortableText value={data.data.descriptionBottom} className='text-center lg:text-left' />
                            </div>
                        </div>
                    </div>
                </div>

            </main>
            <Footer />
        </>
    )
}

export async function getStaticProps() {
    const data = await client.fetch(`*[_type=='aboutUsPage'][0]`);

    return {
        props: {
            data
        }
    };
}
