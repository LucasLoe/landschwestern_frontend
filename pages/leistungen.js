import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Wallpaper from '../components/Wallpaper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css'
import DoubleFacedCard from '../components/DoubleFacedCard'
import { faHospital } from '@fortawesome/free-solid-svg-icons'
import { faHospitalUser } from '@fortawesome/free-solid-svg-icons'
import { faPersonCane } from '@fortawesome/free-solid-svg-icons'
import { faPeopleRoof } from '@fortawesome/free-solid-svg-icons'
import { faPersonShelter } from '@fortawesome/free-solid-svg-icons'
import client from '../client'
import imageUrlBuilder from '@sanity/image-url'


function urlFor(source) {
    return imageUrlBuilder(client).image(source)
}

export default function leistungen(data) {

    return (
        <>
            <Head>
                <title>Die Landschwestern: Leistungen für Sie</title>
                <meta name="description" content="Wir, Die Landschwestern, bieten Ihnen ein breites Spektrum an Leistungen in der Pflege an. Ambulante Pflege, Tagespflege und Senioren-WG." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main>
            <Wallpaper srcString={urlFor(data.data.image.asset._ref).url()} />
                <div className='max-w-6xl mx-auto flex flex-row flex-wrap justify-evenly'>
                    <DoubleFacedCard title={data.data.boxHeading_1} text={data.data.boxSubText_1} icon={faHospitalUser} hoverText={data.data.boxFlipSideArray_1} />
                    <DoubleFacedCard title={data.data.boxHeading_2} text={data.data.boxSubText_2} icon={faPersonCane} hoverText={data.data.boxFlipSideArray_2} />
                    <DoubleFacedCard title={data.data.boxHeading_3} text={data.data.boxSubText_3} icon={faPeopleRoof} hoverText={data.data.boxFlipSideArray_3} />
                    <DoubleFacedCard title={data.data.boxHeading_4} text={data.data.boxSubText_4} icon={faPersonShelter} hoverText={data.data.boxFlipSideArray_4} />
                </div>
            </main>
            <Footer />
        </>
    )
}

export async function getStaticProps() {
    const data = await client.fetch(`*[_type=='servicePage'][0]`);

    return {
        props: {
            data
        }
    };
}
