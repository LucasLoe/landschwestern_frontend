import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { faHandsHolding } from "@fortawesome/free-solid-svg-icons";
import { faHospitalUser } from "@fortawesome/free-solid-svg-icons";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import client from "../client";
import WelcomePageColoredBox from "../components/WelcomePageColoredBox";
import ColoredBoxParallax from "../components/ColoredBoxParallax";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";

function urlFor(source) {
	return imageUrlBuilder(client).image(source);
}

export default function Home({ data }) {
	return (
		<>
			<Head>
				<title>Die Landschwestern: Startseite</title>
				<meta
					name='description'
					content='Die Landschwestern - ein Pflegedienst aus der Uckermark mit Herz und Verstand.'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Navbar />
			<header className='flex items-center justify-center h-fit mb-12 bg-header bg-center'>
				<div className='h-auto w-full my-16'>
					<div className='willkommen-catbox-container flex flex-col lg:flex-row justify-center align-middle'>
						<ColoredBoxParallax
							title={data.yellowTitle}
							text={data.yellowText}
							icon={faHandsHolding}
							bgColor='bg-[color:var(--ls-yellow)]'
						/>
						<ColoredBoxParallax
							title={data.lightBlueTitle}
							text={data.lightBlueText}
							icon={faHospitalUser}
							bgColor='bg-teal-600'
						/>
						<ColoredBoxParallax
							title={data.darkBlueTitle}
							text={data.darkBlueText}
							icon={faLeaf}
							bgColor='bg-indigo-500'
						/>
					</div>
				</div>
			</header>
			<main>
				<div className='h-auto mx-auto my-4 lg:my-16 w-full max-w-[1200px] px-4 flex flex-col lg:flex-row align-center'>
					<Image
						src='/assets/LS_noBackground.webp'
						width={500}
						height={500}
						alt='Das Logo der Landschwestern GbR'
						className=' mx-auto'
					/>

					<div className='my-auto lg:mx-8 flex flex-col justify-around h-full'>
						<h1 className='text-3xl lg:text-4xl text-[color:var(--ls-blue)] text-center lg:text-left font-extrabold mb-8'>
							Die Landschwestern
						</h1>
						<h2 className='text-xl lg:text-2xl text-[color:var(--ls-blue)] text-center lg:text-left font-extrabold mb-8'>
							{" "}
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
	);
}

export async function getStaticProps() {
	const data = await client.fetch(`*[_type=='welcomePage'][0]`);

	return {
		props: {
			data,
		},
	};
}
