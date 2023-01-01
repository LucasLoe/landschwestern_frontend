import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Wallpaper from '../components/Wallpaper'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faHandsHolding } from '@fortawesome/free-solid-svg-icons'
import { faHospitalUser } from '@fortawesome/free-solid-svg-icons'
import { faLeaf } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Vivus from 'vivus'
import { useState, useEffect } from 'react'

export default function Home() {


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
        <Wallpaper srcString={"/assets/um-test.jpg"} />
        <div id="second-banner" className='h-auto lg:h-[500px] w-full bg-[color:var(--ls-blue)]'>
          <div className="willkommen-catbox-container flex flex-col lg:flex-row justify-around lg:justify-center align-middle">

            <div className="container  mx-auto lg:mx-4 w-content animate-fade-in relative overflow-visible text-center lg:text-left t-[-200px] lg:t-0">
              <div className="willkommen-catbox bg-[color:var(--ls-yellow)]  lg:my-5 mx-auto h-auto py-5 px-0 clip-mobile lg:clip-desktop relative h-[420px] w-2/5 min-w-[300px] lg:my-0 lg:mx-auto lg:py-16 lg:px-10 lg:max-w-[350px] text-center">
                <FontAwesomeIcon icon={faHandsHolding} className="mb-12 text-[color:var(--ls-white)] fa fa-7x" />

                <p className="willkommen-catbox-header text-[color:var(--ls-white)] font-bold text-3xl"> MITGEFÜHL</p>
                <p className="willkommen-catbox-text text-[color:var(--ls-white)]">  <br /> This is a very short text about the category.</p>
              </div>
              <div className="test block w-2/5 min-w-[300px] mx-auto">
                <ul className=''>
                  <h3 className='text-[color:var(--ls-white)] font-bold text-2xl my-2 mx-0'><FontAwesomeIcon icon={faAngleRight} />  bullet point header</h3>
                  <li className='text-[color:var(--ls-white)] mb-8'>bullet point text</li>
                  <h3 className='text-[color:var(--ls-white)] font-bold text-2xl my-2 mx-0'><FontAwesomeIcon icon={faAngleRight} />  bullet point header</h3>
                  <li className='text-[color:var(--ls-white)] mb-8'>bullet point text</li>
                </ul>
              </div>
            </div>

            <div className="container  mx-auto lg:mx-4 w-content animate-fade-in relative overflow-visible text-center lg:text-left t-[-200px] lg:t-0 animation">
              <div className="willkommen-catbox bg-[color:var(--ls-green)]  lg:my-5 mx-auto h-auto py-5 px-0 clip-mobile lg:clip-desktop relative w-2/5 h-[420px] min-w-[300px] lg:my-0 lg:mx-auto lg:py-16 lg:px-10 lg:max-w-[350px] text-center">
                <FontAwesomeIcon icon={faHospitalUser} className="mb-12 text-[color:var(--ls-white)] fa fa-7x" />

                <p className="willkommen-catbox-header text-[color:var(--ls-white)] font-bold text-3xl"> Kompetenz</p>
                <p className="willkommen-catbox-text text-[color:var(--ls-white)]">  <br /> This is a very short text about the category.</p>
              </div>
              <div className="test block w-2/5 min-w-[300px] mx-auto">
                <ul className=''>
                  <h3 className='text-[color:var(--ls-white)] font-bold text-2xl my-2 mx-0'><FontAwesomeIcon icon={faAngleRight} />  bullet point header</h3>
                  <li className='text-[color:var(--ls-white)] mb-8'>bullet point text</li>
                  <h3 className='text-[color:var(--ls-white)] font-bold text-2xl my-2 mx-0'><FontAwesomeIcon icon={faAngleRight} />  bullet point header</h3>
                  <li className='text-[color:var(--ls-white)] mb-8'>bullet point text</li>
                </ul>
              </div>
            </div>

            <div className="container  mx-auto lg:mx-4 w-content animate-fade-in relative overflow-visible text-center lg:text-left t-[-200px] lg:t-0 animation">
              <div className="willkommen-catbox bg-[color:var(--ls-purple)]  lg:my-5 mx-auto h-auto py-5 px-0 clip-mobile lg:clip-desktop relative w-2/5 h-[420px] min-w-[300px] lg:my-0 lg:mx-auto lg:py-16 lg:px-10 lg:max-w-[350px] text-center">
                <FontAwesomeIcon icon={faLeaf} className="mb-12 text-[color:var(--ls-white)] fa fa-7x" />

                <p className="willkommen-catbox-header text-[color:var(--ls-white)] font-bold text-3xl"> Regionalität</p>
                <p className="willkommen-catbox-text text-[color:var(--ls-white)]">  <br /> This is a very short text about the category.</p>
              </div>
              <div className="test block w-2/5 min-w-[300px] mx-auto">
                <ul className=''>
                  <h3 className='text-[color:var(--ls-white)] font-bold text-2xl my-2 mx-0'><FontAwesomeIcon icon={faAngleRight} />  bullet point header</h3>
                  <li className='text-[color:var(--ls-white)] mb-8'>bullet point text</li>
                  <h3 className='text-[color:var(--ls-white)] font-bold text-2xl my-2 mx-0'><FontAwesomeIcon icon={faAngleRight} />  bullet point header</h3>
                  <li className='text-[color:var(--ls-white)] mb-8'>bullet point text</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className='h-auto w-full px-4 py-8 flex flex-col lg:flex-row align-center'>
          <Image
            src="/assets/ls-logo (1).webp"
            width={700}
            height={700}
            alt="Das Logo der Landschwestern GbR"
            className='h-full lg:w-1/3 mx-auto'
          />

          <div className='my-auto'>
            <h2 className='text-3xl text-[color:var(--ls-blue)] text-center lg:text-left font-extrabold mb-4'>
              Ihr Pflegedienst in der Uckermark
            </h2>
            <p className='text-center lg:text-left '>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
