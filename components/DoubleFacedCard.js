import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

export default function DoubleFacedCard({ title, text, icon, hoverText }) {
    const [isOpen, setIsOpen] = useState(true)

    function useWindowSize() {
        const [windowSize, setWindowSize] = useState(undefined);

        useEffect(() => {
            function handleResize() {
                setWindowSize(window.innerWidth);
            }

            window.addEventListener("resize", handleResize);
            handleResize();

            return () => window.removeEventListener("resize", handleResize);
        }, []);
        return windowSize;
    }

    function handleOpenState() {
        if (useWindowSize >= 1024) {
            setIsOpen(!isOpen)
        }
    }

    return (
        <div className="relative rounded-2xl bg-[color:var(--ls-blue)] min-w-[300px] w-1/3 h-[580px] m-4 shadow-2xl text-center ">
            {
                isOpen ?
                    <div id="is-not-clicked" className="h-full cursor-pointer px-4" onMouseEnter={() => { setIsOpen(!isOpen) }} onClick={() => { handleOpenState }} >
                        <FontAwesomeIcon icon={icon} className="fa fa-5x w-[100px] h-[100px] text-white mx-auto my-10" />
                        <h1 className="text-2xl text-[color:var(--ls-white)] font-extrabold mx-auto" >
                            {title}
                        </h1>
                        <p className="text-white text-md my-4 ">
                            {text}
                        </p>
                        <a id="mobile-open-link" className="absolute text-lg font-bold text-white opacity-50 bottom-0 w-content m-3 right-0 cursor-pointer">
                            {"[Mehr erfahren]"}
                        </a>
                    </div>
                    :
                    <div id="is-clicked" className="h-full px-4 cursor-pointer border-8 border-[color:var(--ls-yellow)] bg-white rounded-2xl" onMouseLeave={() => { setIsOpen(!isOpen) }} onClick={() => { handleOpenState }}>
                        <FontAwesomeIcon icon={icon} className="absolute left-0 right-0 top-[25%] fa fa-10x text-[color:var(--ls-blue)] opacity-10 mx-auto my-10" />
                        <h1 className="text-2xl text-[color:var(--ls-blue)] my-8 font-extrabold mx-auto">
                            {title}
                        </h1>
                        <ul className="text-[color:var(--ls-blue)] h-64 w-full xl:text-lg text-left">
                            {
                                hoverText && hoverText.map((con, i) => {
                                    return (
                                        <li key={title + i} className="my-2" >
                                            <FontAwesomeIcon icon={faSquareCheck} />
                                            {"  " + con}
                                        </li>)
                                })
                            }
                        </ul>
                    </div>
            }
        </div>
    )
}