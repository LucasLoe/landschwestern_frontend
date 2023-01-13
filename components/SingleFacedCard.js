import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons"
import Image from "next/image"

export default function SingleFacedCard({ title, text, imageSrc }) {
    return (
        <div className="flex flex-col lg:flex-row min-w-[300px] max-w-[600px] w-full lg:w-[45vw] h-auto bg-[color:var(--ls-blue)] rounded-xl my-4 mx-auto">
            <Image
                src={imageSrc}
                width={500}
                height={500}
                alt="some image"
                className="object-cover h-1/3 w-full lg:h-full lg:w-[200px] rounded-t-xl lg:rounded-tr-none lg:rounded-l-xl "
            />
            <div className="w-full h-full p-4">
                <h2 className="text-[color:var(--ls-yellow)] text-center lg:text-left text-xl font-extrabold my-2">{title}</h2>
                <p className="text-[color:var(--ls-white)] text-center lg:text-left text-md">{text}</p>
            </div>
        </div>
    )
}