import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Wallpaper from '../components/Wallpaper'
import SingleFacedCardElegant from '../components/SingleFacedCardElegant'
import ContactCard from '../components/ContactCard'
import client from '../client'
import { PortableText } from '@portabletext/react'
import imageUrlBuilder from '@sanity/image-url'
import Carousel from '../components/Carousel'
import { faHospital } from '@fortawesome/free-solid-svg-icons'
import { faPeopleRoof } from '@fortawesome/free-solid-svg-icons'
import { faHandHoldingMedical } from '@fortawesome/free-solid-svg-icons'
import { faBed } from '@fortawesome/free-solid-svg-icons'

export default function SeniorCare(data) {


    function urlFor(source) {
        return imageUrlBuilder(client).image(source)
    }

    const imageGalleryUrls = () => {
        return data.data.gallery.map(e => urlFor(e.asset._ref).url())
    }

    return (
        <>
            <Head>
                <title>Die Landschwestern: Seniorenwohngemeinschaft</title>
                <meta name="description" content="Senioren-WG der Landschwestern in Nordwestuckermark (Gollmitz)" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main>
                <Wallpaper srcString={urlFor(data.data.image.asset._ref).url()} />
                <div className='mt-4 max-w-6xl mx-auto flex flex-col lg:flex-row flex-wrap justify-around px-4 lg:px-8 lg:justify-between'>
                    <h1 className="text-2xl lg:text-3xl text-[color:var(--ls-blue)] text-center font-extrabold my-4 mx-auto"> Unsere Senioren-Wohngemeinschaft mitten in der Uckermark</h1>
                    {
                        data.data.galleryTextTop &&
                        <div className="text-center lg:text-lg text-gray-900 my-8 mx-auto block w-full max-w-[896px]">
                            <PortableText value={data.data.galleryTextTop} />
                        </div>
                    }
                    <div className='bg-[color:var(--ls-purple)] h-1 w-full max-w-[80vw] lg:w-1/2 my-4 mx-auto'></div>
                    <SingleFacedCardElegant title={data.data.boxHeading_1} text={data.data.boxSubText_1} imageSrc={urlFor(data.data.boxImage_1.asset._ref).url()} icon={faHospital} direction={"left"} />
                    <SingleFacedCardElegant title={data.data.boxHeading_2} text={data.data.boxSubText_2} imageSrc={urlFor(data.data.boxImage_2.asset._ref).url()} icon={faHandHoldingMedical} direction={"right"} />
                    <SingleFacedCardElegant title={data.data.boxHeading_3} text={data.data.boxSubText_3} imageSrc={urlFor(data.data.boxImage_3.asset._ref).url()} icon={faPeopleRoof} direction={"left"} />
                    <SingleFacedCardElegant title={data.data.boxHeading_4} text={data.data.boxSubText_4} imageSrc={urlFor(data.data.boxImage_4.asset._ref).url()} icon={faBed} direction={"right"} />
                    <div className='bg-[color:var(--ls-purple)] h-1 w-full max-w-[80vw] lg:w-1/2 my-4 mx-auto'></div>
                    {
                        data.data.galleryTextBottom &&
                        <div className="text-center lg:text-lg text-gray-900 my-8 mx-auto block w-full max-w-[896px]">
                            <PortableText value={data.data.galleryTextBottom} />
                        </div>
                    }
                </div>
                {
                    data.data.gallery &&
                    <div className='w-full bg-[color:var(--ls-purple)]'>
                        <div className="mx-auto w-full md:max-w-[895px] flex justify-center  mx-auto h-[450px] lg:h-[600px] rounded">
                            <Carousel images={imageGalleryUrls()} />
                        </div>
                    </div>
                }
            </main>
            <Footer />
        </>
    )
}

export async function getStaticProps() {
    const data = await client.fetch(`*[_type=='wohngemeinschaftPage'][0]`);
    return {
        props: {
            data
        }
    };
}