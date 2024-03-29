import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faHospital } from "@fortawesome/free-solid-svg-icons"
import Image from "next/image"

export default function SingleFacedCardElegant({ title, text, imageSrc, icon, direction }) {
    return (
        <> {
            direction == "left" ?
                (<div className="flex flex-col lg:flex-row w-full h-auto bg-white my-2 lg:my-8 mx-auto">
                    <FontAwesomeIcon icon={icon} className="fa fa-10x text-[color:var(--ls-blue)] lg:max-w-[30%] mx-auto lg:ml-8 mt-8 lg:my-auto drop-shadow-lg" />
                    <div className="w-full h-full px-8 py-4">
                        <h2 className="text-[color:var(--ls-blue)] text-center lg:text-left text-3xl font-extrabold mx-auto lg:mr-auto lg:ml-0  mb-4 mark mark-purple">{title}</h2>
                        <p className="text-center lg:text-lg lg:text-left text-md text-gray-900">{text}</p>
                    </div>
                </div>)
                :
                (<div className="flex flex-col-reverse lg:flex-row w-full h-auto bg-white my-2 lg:my-8 mx-auto">
                    <div className="w-full h-full px-8 py-4">
                        <h2 className="text-[color:var(--ls-blue)] text-center lg:text-right text-3xl font-extrabold mx-auto lg:ml-auto lg:mr-0 mb-4 mark mark-purple">{title}</h2>
                       <p className="text-center lg:text-lg  lg:text-right text-md text-gray-900">{text}</p>
                    </div>
                    <FontAwesomeIcon icon={icon} className="fa fa-10x text-[color:var(--ls-blue)] lg:max-w-[30%] mx-auto lg:ml-8 mt-8 lg:my-auto drop-shadow-lg" />
                </div>)
        } </>
    )

}