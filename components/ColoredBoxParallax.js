import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faHandsHolding } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css'

export default function ColoredBoxParallax({ title = '...', text = '...', icon = { faHandsHolding }, bgColor = 'bg-[color:var(--ls-yellow)]' }) {

    return (
        <div className="animate-fade-in container mx-auto lg:mx-[2vw] w-[320px] relative text-center lg:text-left relative">
            <div className={`willkommen-catbox shadow-xl ${bgColor} my-2 mx-auto py-5 px-4 clip-mobile lg:clip-desktop relative h-[420px] w-2/5 min-w-[320px] lg:my-0 lg:py-16 lg:px-10 lg:max-w-[350px] text-center`}>
                <FontAwesomeIcon icon={icon} className="mb-12 text-[color:var(--ls-white)] fa fa-7x" />

                <p className="willkommen-catbox-header text-[color:var(--ls-white)] font-bold text-3xl"> {title}</p>
                <p className="willkommen-catbox-text text-[color:var(--ls-white)] font-semibold tracking-wide">  <br /> {text} </p>
            </div>
            <div className="test block w-[320px] min-w-[300px] mx-auto">
                <ul className='mt-8'>
                    <p className='bg-blue-rgba py-2 px-2 text-[color:var(--ls-white)] font-semibold tracking-wide text-xl my-8 mx-auto'><FontAwesomeIcon icon={faAngleRight} />  Das ist ein kurzer Stichpunkt zum Thema darüber</p>

                    <p className='bg-blue-rgba py-2 px-2 text-[color:var(--ls-white)] font-semibold stracking-wide text-xl my-8 mx-auto'><FontAwesomeIcon icon={faAngleRight} /> Das ist ein kurzer Stichpunkt zum Thema darüber</p>

                </ul>
            </div>
        </div>
    )
}
