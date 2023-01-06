import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Wallpaper from '../components/Wallpaper'
import { faHandsHolding } from '@fortawesome/free-solid-svg-icons'
import { faHospitalUser } from '@fortawesome/free-solid-svg-icons'
import { faLeaf } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import client from '../client'
import WelcomePageColoredBox from '../components/WelcomePageColoredBox'
import imageUrlBuilder from '@sanity/image-url'
import { PortableText } from '@portabletext/react'

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

export default function Home({ data }) {


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
        <Wallpaper srcString={urlFor(data.image.asset._ref).url()} />
        <div id="second-banner" className='h-auto lg:h-[500px] w-full bg-[color:var(--ls-blue)]'>
          <div className="willkommen-catbox-container flex flex-col lg:flex-row justify-around lg:justify-center align-middle">

            <WelcomePageColoredBox title={data.yellowTitle} text={data.yellowText} icon={faHandsHolding} bgColor='bg-[color:var(--ls-yellow)]' />

            <WelcomePageColoredBox title={data.lightBlueTitle} text={data.lightBlueText} icon={faHospitalUser} bgColor='bg-[color:var(--ls-green)]' />

            <WelcomePageColoredBox title={data.darkBlueTitle} text={data.darkBlueText} icon={faLeaf} bgColor='bg-[color:var(--ls-purple)]' />

          </div>
        </div>

        <div className='h-auto lg:h-[500px] w-full px-4 py-8 flex flex-col lg:flex-row align-center'>
          <Image
            src="/assets/ls-logo (1).webp"
            width={500}
            height={500}
            alt="Das Logo der Landschwestern GbR"
            className=' mx-auto'
          />

          <div className='my-auto lg:mx-8 flex flex-col justify-around h-full'>
            <h2 className='text-3xl lg:text-4xl text-[color:var(--ls-blue)] text-center lg:text-left font-extrabold mb-8'>
              Ihr Pflegedienst in der Uckermark
            </h2>
            <div>
              <PortableText value={data.bio} className='text-center lg:text-left' />
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const data = await client.fetch(`*[_type=='welcomePage'][0]`);

  return {
    props: {
      data
    }
  };
}
