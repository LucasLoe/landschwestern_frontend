import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Wallpaper from "../components/Wallpaper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faCrutch } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import imageUrlBuilder from "@sanity/image-url";

import client from "../client";

export default function jobs(data) {
  function urlFor(source) {
    return imageUrlBuilder(client).image(source);
  }

  return (
    <>
      <Head>
        <title>Die Landschwestern: Jobs</title>
        <meta name="description" content="Jobangebote beim Pflegedienst -Die Landschwestern- für Menschen aus der Uckermark." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <Wallpaper srcString={urlFor(data.data.image.asset._ref).url()} />

        <div
          id="job-offer-container"
          className="w-auto px-6 lg:px-[20%] py-12 flex justify-center flex-col"
        >
          <h1 className="text-4xl text-center text-[color:var(--ls-blue)] font-extrabold">
            {" "}
            {data.data.pageHeading}{" "}
          </h1>
          <br />
          <p className="my-4 text-center mx-auto"> {data.data.pageSubheading} </p>
          <br />

          <div className="w-fit mx-auto">
            <div className="job-details-container w-full block py-5 px-5 lg:px-12 my-5 mx-auto  rounded-2xl border-8 border-[color:var(--ls-yellow)]">
              <h2 className="text-2xl lg:text-3xl w-auto font-extrabold text-[color:var(--ls-blue)] text-center ">
                {data.data.boxTopHeading}
              </h2>
              <br />
              <ul className="text-md lg:text-lg">
                {data.data.boxTopArray &&
                  data.data.boxTopArray.map((e) => (
                    <>
                      <li>
                        <FontAwesomeIcon
                          icon={faCrutch}
                          className="fa-flip-horizontal mr-2"
                        />
                        {e}
                      </li>
                      <br />
                    </>
                  ))}
              </ul>
            </div>

            <div className="job-details-container job-details-container w-full block py-5 px-5 lg:px-12 my-5 mx-auto rounded-2xl border-8 border-[color:var(--ls-yellow)]">
              <h2 className="text-2xl lg:text-3xl w-auto font-extrabold text-[color:var(--ls-blue)] text-center">
                {data.data.boxBottomHeading}
              </h2>
              <br />
              <ul className=" text-md lg:text-lg">
                {data.data.boxBottomArray &&
                  data.data.boxBottomArray.map((e) => (
                    <>
                      <li>
                        <FontAwesomeIcon icon={faCheck} className="mr-2" />
                        {e}
                      </li>
                      <br />
                    </>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const data = await client.fetch(`*[_type=='jobsPage'][0]`);

  return {
    props: {
      data,
    },
  };
}
