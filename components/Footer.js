import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { faServer } from "@fortawesome/free-solid-svg-icons"
import { faStamp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import '@fortawesome/fontawesome-svg-core/styles.css'
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="h-auto w-auto lg:w-full bg-[color:var(--ls-blue)] flex flex-col text-left  lg:flex-row justify-evenly items-center align-middle py-0 px-auto lg:p-2 text-[color:var(--ls-white)] mt-8">
            <div className=" footer-row h-auto lg:h-48 w-64 lg:w-auto my-5 mx-0 lg:mx-10 lg:my-2.5">
                <h3 className="text-[color:var(--ls-white)] font-bold text-lg">ANFAHRT:</h3>
                <br />
                <p>Blume & Löser GbR</p>
                <p>Prenzlauer Str. 20</p>
                <p>17291 Nordwestuckermark</p>
                <br />
                <p><FontAwesomeIcon icon={faArrowRight} /><a href="https://www.google.com/maps/place/Prenzlauer+Str.+20,+17291+Nordwestuckermark/@53.297413,13.7217061,17z/data=!3m1!4b1!4m5!3m4!1s0x47aa29d6b93e95bd:0xf0cbf15cdacd36bb!8m2!3d53.297413!4d13.7238948?hl=de" target="https://google.com"> In Google Maps öffnen </a></p>
            </div>

            <div className=" footer-row h-auto lg:h-48 w-64 lg:w-auto my-5 mx-0 lg:mx-20 lg:my-2.5">

                <h3 className="text-[color:var(--ls-white)] font-bold text-lg"> KONTAKT:</h3>
                <br />

                <div id='footer-row h-auto lg:h-48 w-64 lg:w-auto my-5 mx-0 lg:mx-20 lg:my-2.5'>

                    <div className="contact-details-row flex-col flex lg:flex-row justify-between">
                        <p><FontAwesomeIcon icon={faPhone} /> Telefon: </p>
                        <p>039852 18836</p>
                    </div>
                    <br />
                    <div className="contact-details-row flex-col flex lg:flex-row justify-between">
                        <p><FontAwesomeIcon icon={faPhone} /> Fax: </p>
                        <p>039852 498533</p>
                    </div>
                    <br />
                    <div className="contact-details-row flex-col flex lg:flex-row justify-between">
                        <p><FontAwesomeIcon icon={faEnvelope} /> E-Mail: <span className="hidden lg:inline-block">&nbsp;</span> </p>
                        <p> landschwestern(at)googlemail.com</p>
                    </div>
                    <br />
                </div>

            </div>

            <div className=" footer-row h-auto lg:h-48 w-64 lg:w-auto my-5 mx-0 lg:mx-20 lg:my-2.5">
                <h3 className="text-[color:var(--ls-white)] font-bold text-lg"> SONSTIGES:</h3>
                <br />
                <p><FontAwesomeIcon icon={faServer} /> <Link href="/impressum" className="hamburger-link" >Datenschutz</Link></p>
                <br />
                <p><FontAwesomeIcon icon={faStamp} /><Link href="/impressum" className="hamburger-link" > Impressum</Link></p>
                <br />
            </div>
        </footer>
    )
}