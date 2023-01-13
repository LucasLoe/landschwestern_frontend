import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Wallpaper from '../components/Wallpaper'
import SingleFacedCard from '../components/SingleFacedCard'
import ContactCard from '../components/ContactCard'
import imageUrlBuilder from '@sanity/image-url'
import client from '../client'

export default function Tagespflege(data) {

    function urlFor(source) {
        return imageUrlBuilder(client).image(source)
    }

    return (
        <>
            <Head>
                <title>Die Landschwestern: Tagespflege</title>
                <meta name="description" content="Tagespflege der Landschwestern in Nordwestuckermark" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main>
                <Wallpaper srcString={urlFor(data.data.image.asset._ref).url()} />
                <div className='max-w-6xl mx-auto flex flex-col lg:flex-row flex-wrap justify-center px-4 lg:px-8 lg:justify-between'>
                    <SingleFacedCard title={data.data.boxHeading_1} text={data.data.boxSubText_1} imageSrc={urlFor(data.data.boxImage_1.asset._ref).url()} />
                    <SingleFacedCard title={data.data.boxHeading_2} text={data.data.boxSubText_2} imageSrc={urlFor(data.data.boxImage_2.asset._ref).url()} />
                    <SingleFacedCard title={data.data.boxHeading_3} text={data.data.boxSubText_3} imageSrc={urlFor(data.data.boxImage_3.asset._ref).url()} />
                    <SingleFacedCard title={data.data.boxHeading_4} text={data.data.boxSubText_4} imageSrc={urlFor(data.data.boxImage_4.asset._ref).url()} />
                    <div className='mx-auto'>
                        <ContactCard title={data.data.contactCardHeading} text={data.data.contactCardText} imageSrc={urlFor(data.data.contactCardImage.asset._ref).url()}/>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export async function getStaticProps() {
    const data = await client.fetch(`*[_type=='daycarePage'][0]`);
  
    return {
      props: {
        data
      }
    };
  }
