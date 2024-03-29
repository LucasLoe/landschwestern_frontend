import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Wallpaper from '../components/Wallpaper'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { PortableText } from '@portabletext/react'
import client from '../client'
import imageUrlBuilder from '@sanity/image-url'

export default function Impressum() {

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Das Impressum der Landschwestern GmbH" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <main className='flex flex-col justify-center max-w-2xl mx-8 my-32'>
                <div id="impressum-container">
                    <h2 className='text-xl text-[color:var(--ls-blue)] font-bold'> Impressum </h2>
                    <br />
                    <p>
                        Die Landschwestern - Blume & Schubert GbR <br />
                        <br />
                        Geschäftsführung: Ariane Schubert & Kathrin Blume <br />
                        <br />
                        Blume & Schubert GbR <br />
                        Prenzlauer Str. 20 <br />
                        17291 Nordwestuckermark <br />
                        <br />
                        Tel.: 039852 - 18836 <br />
                        Fax: 039852 - 498533 <br />
                        <br />
                        Mail: landschwestern (at) googlemail.com <br />
                        <br />
                        Steuernummer: 062 151 02945 <br />
                        IK-Nummer: 463200587 <br />

                    </p>
                </div>
                < div id="datenschutz-container" >
                    <h2 className='text-xl text-[color:var(--ls-blue)] font-bold'>Datenschutzerklärung</h2>
                    <br />

                    <h3>Grundlegendes </h3>
                    <br />
                    <p>
                        Diese Datenschutzerklärung soll die Nutzer dieser Website über die Art, den Umfang und den Zweck der Erhebung und Verwendung
                        personenbezogener Daten durch den Websitebetreiber informieren.

                        Der Websitebetreiber nimmt Ihren Datenschutz sehr ernst und behandelt Ihre personenbezogenen Daten vertraulich und entsprechend
                        der gesetzlichen Vorschriften. Da durch neue Technologien und die ständige Weiterentwicklung dieser Webseite Änderungen an dieser
                        Datenschutzerklärung vorgenommen werden können, empfehlen wir Ihnen sich die Datenschutzerklärung in regelmäßigen Abständen wieder
                        durchzulesen.

                        Definitionen der verwendeten Begriffe (z.B. “personenbezogene Daten” oder “Verarbeitung”) finden Sie in Art. 4 DSGVO.
                    </p>
                    <br />
                    <h3>Zugriffsdaten </h3>
                    <p>
                        <br />
                        Wir, die Webseitenbetreiberinnen bzw. Seitenproviderinnen, erheben aufgrund unseres berechtigten Interesses (s. Art. 6 Abs. 1 lit. f. DSGVO)
                        Daten über Zugriffe auf die Website und speichern diese als „Server-Logfiles“ auf dem Server der Website ab. Folgende Daten werden
                        so protokolliert:
                        <br />
                        Besuchte Website
                        Uhrzeit zum Zeitpunkt des Zugriffes
                        Menge der gesendeten Daten in Byte
                        Quelle/Verweis, von welchem Sie auf die Seite gelangten
                        Verwendeter Browser
                        Verwendetes Betriebssystem
                        Verwendete IP-Adresse
                        <br />
                        Die Server-Logfiles werden für maximal 30 Tage gespeichert und anschließend gelöscht. Die Speicherung der Daten erfolgt aus
                        Sicherheitsgründen, um z. B. Missbrauchsfälle aufklären zu können. Müssen Daten aus Beweisgründen aufgehoben werden, sind sie
                        solange von der Löschung ausgenommen bis der Vorfall endgültig geklärt ist.
                        <br />
                        Diese Seite verwendet ein Plugin um zusammengefasst und anonymisiert Nutzungsstatistiken zu erzeugen. Diese werden genutzt um
                        um unsere Inhalte und die Benutzbarkeit der Seite zu verbessern. Sie haben die Möglichkeit zu verhindern, dass von Ihnen hier
                        getätigte Aktionen analysiert und verknüpft werden. Dies wird Ihre Privatsphäre schützen, aber wird auch den Besitzer daran
                        hindern, aus Ihren Aktionen zu lernen und die Bedienbarkeit für Sie und
                        andere Benutzer zu verbessern.
                        <br />
                        Ihr Besuch dieser Webseite wird aktuell von der Matomo Webanalyse erfasst. Diese Checkbox abwählen für Opt-Out.
                    </p>
                    <br />
                    <h3> Erfassung und Verarbeitung personenbezogener Daten </h3>
                    <p>
                        <br />
                        Die Websitebetreiberinnen erheben, nutzen und geben Ihre personenbezogenen Daten nur dann weiter, wenn dies im gesetzlichen Rahmen
                        erlaubt ist oder Sie in die Datenerhebung einwilligen.
                        <br />
                        Als personenbezogene Daten gelten sämtliche Informationen, welche dazu dienen, Ihre Person zu bestimmen und welche zu Ihnen
                        zurückverfolgt werden können, also beispielsweise Ihr Name, Ihre E-Mail-Adresse und Telefonnummer.
                        <br />
                        Diese Website können Sie auch besuchen, ohne Angaben zu Ihrer Person zu machen. Zur Verbesserung unseres Online-Angebotes
                        speichern wir jedoch (ohne Personenbezug) Ihre Zugriffsdaten auf diese Website. Zu diesen Zugriffsdaten gehören z. B. die von
                        Ihnen angeforderte Datei oder der Name Ihres Internet-Providers. Durch die Anonymisierung der Daten sind Rückschlüsse auf Ihre
                        Person nicht möglich.
                    </p>
                    <br />
                    <h3>Eingebettete Inhalte von anderen Websites</h3>
                    <p>
                        <br />
                        Beiträge auf dieser Website können eingebettete Inhalte beinhalten (z. B. Videos, Bilder, Beiträge, Karten, Schriftarten etc.).
                        Eingebettete Inhalte von anderen Websites verhalten sich exakt so, als ob der Besucher die andere Website besucht hätte.
                        <br />
                        Diese Websites können Daten über dich sammeln, Cookies benutzen, zusätzliche Tracking-Dienste von Dritten einbetten und deine
                        Interaktion mit diesem eingebetteten Inhalt aufzeichnen, inklusive deiner Interaktion mit dem eingebetteten Inhalt.
                        <br />
                    </p>
                    <h3>Umgang mit Kontaktdaten</h3>
                    <p>
                        <br />
                        Nehmen Sie mit uns als Websitebetreiberinnen durch die angebotenen Kontaktmöglichkeiten Verbindung auf, werden Ihre Angaben gespeichert,
                        damit auf diese zur Bearbeitung und Beantwortung Ihrer Anfrage zurückgegriffen werden kann. Ohne Ihre Einwilligung werden diese
                        Daten nicht an Dritte weitergegeben.
                    </p>
                    <br />
                    <h3>Rechte des Nutzers</h3>
                    <p>
                        <br />
                        Sie haben als Nutzer*in das Recht, auf Antrag eine kostenlose Auskunft darüber zu erhalten, welche personenbezogenen Daten über Sie
                        gespeichert wurden. Sie haben außerdem das Recht auf Berichtigung falscher Daten und auf die Verarbeitungseinschränkung oder
                        Löschung Ihrer personenbezogenen Daten. Falls zutreffend, können Sie auch Ihr Recht auf Datenportabilität geltend machen. Sollten
                        Sie annehmen, dass Ihre Daten unrechtmäßig verarbeitet wurden, können Sie eine Beschwerde bei der zuständigen Aufsichtsbehörde
                        einreichen.
                    </p>
                    <br />
                    <h3>Löschung von Daten</h3>
                    <p>
                        <br />
                        Sofern Ihr Wunsch nicht mit einer gesetzlichen Pflicht zur Aufbewahrung von Daten (z. B. Vorratsdatenspeicherung) kollidiert, haben
                        Sie ein Anrecht auf Löschung Ihrer Daten. Von uns gespeicherte Daten werden, sollten sie für ihre Zweckbestimmung nicht mehr
                        vonnöten sein und es keine gesetzlichen Aufbewahrungsfristen geben, gelöscht. Falls eine Löschung nicht durchgeführt werden kann,
                        da die Daten für zulässige gesetzliche Zwecke erforderlich sind, erfolgt eine Einschränkung der Datenverarbeitung. In diesem Fall
                        werden die Daten gesperrt und nicht für andere Zwecke verarbeitet.
                    </p>
                    <br />
                    <h3>Widerspruchsrecht</h3>
                    <br />
                    <p>
                        Nutzer*innen dieser Webseite können von ihrem Widerspruchsrecht Gebrauch machen und der Verarbeitung ihrer personenbezogenen Daten zu
                        jeder Zeit widersprechen. Wenn Sie eine Berichtigung, Sperrung, Löschung oder Auskunft über die zu Ihrer Person gespeicherten
                        personenbezogenen Daten wünschen oder Fragen bzgl. der Erhebung, Verarbeitung oder Verwendung Ihrer personenbezogenen Daten haben
                        oder erteilte Einwilligungen widerrufen möchten, wenden Sie sich bitte an folgende E-Mail-Adresse: <br /> <br />
                        <b>landschwestern (at) googlemail.de </b>
                    </p>
                </div>
            </main>
            <Footer />
        </>
    )
}