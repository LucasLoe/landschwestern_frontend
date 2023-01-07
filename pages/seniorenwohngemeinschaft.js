import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Wallpaper from '../components/Wallpaper'
import SingleFacedCard from '../components/SingleFacedCard'
import ContactCard from '../components/ContactCard'
import client from '../client'
import { PortableText } from '@portabletext/react'
import imageUrlBuilder from '@sanity/image-url'
import Carousel from '../components/Carousel'

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
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main>
                <Wallpaper srcString={urlFor(data.data.image.asset._ref).url()} />
                <div className='mt-4 max-w-6xl mx-auto flex flex-col lg:flex-row flex-wrap justify-center px-4 lg:px-8 lg:justify-between'>
                    {
                        data.data.galleryTextTop &&
                        <div className="text-center my-8 mx-auto block w-full max-w-[896px]">
                            <PortableText value={data.data.galleryTextTop} />
                        </div>
                    }
                    {
                        data.data.gallery &&
                        <div className="mx-auto w-full md:max-w-[896px] flex justify-center my-8  mx-auto h-[450px] lg:h-[600px] rounded">
                            <Carousel images={imageGalleryUrls()} />
                        </div>
                    }
                    {
                        data.data.galleryTextBottom &&
                        <div className="text-center my-8 mx-auto block w-full max-w-[896px]">
                            <PortableText value={data.data.galleryTextBottom} />
                        </div>
                    }
                    <SingleFacedCard title={data.data.boxHeading_1} text={data.data.boxSubText_1} imageSrc={urlFor(data.data.boxImage_1.asset._ref).url()} />
                    <SingleFacedCard title={data.data.boxHeading_2} text={data.data.boxSubText_2} imageSrc={urlFor(data.data.boxImage_2.asset._ref).url()} />
                    <SingleFacedCard title={data.data.boxHeading_3} text={data.data.boxSubText_3} imageSrc={urlFor(data.data.boxImage_3.asset._ref).url()} />
                    <SingleFacedCard title={data.data.boxHeading_4} text={data.data.boxSubText_4} imageSrc={urlFor(data.data.boxImage_4.asset._ref).url()} />
                    <div className='mx-auto'>
                        <ContactCard title={data.data.contactCardHeading} text={data.data.contactCardText} imageSrc={urlFor(data.data.contactCardImage.asset._ref).url()} />
                    </div>
                </div>
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