import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faHandsHolding } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css'

export default function WelcomePageColoredBox({ title = '...', text = '...', icon = { faHandsHolding }, bgColor = 'bg-[color:var(--ls-yellow)]' }) {

    return (
        <div className="container  mx-auto lg:mx-4 w-content animate-fade-in relative overflow-visible text-center lg:text-left t-[-200px] lg:t-0">
            <div className={`willkommen-catbox ${bgColor} lg:my-5 mx-auto h-auto py-5 px-0 clip-mobile lg:clip-desktop relative h-[420px] w-2/5 min-w-[300px] lg:my-0 lg:mx-auto lg:py-16 lg:px-10 lg:max-w-[350px] text-center`}>
                <FontAwesomeIcon icon={icon} className="mb-12 text-[color:var(--ls-white)] fa fa-7x" />

                <p className="willkommen-catbox-header text-[color:var(--ls-white)] font-bold text-3xl"> {title}</p>
                <p className="willkommen-catbox-text text-[color:var(--ls-white)]">  <br /> {text} </p>
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
    )
}
