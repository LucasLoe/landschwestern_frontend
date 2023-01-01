import { useState } from 'react'
import Image from 'next/image'

function NavLink({ to, children }) {
    return (
        <a href={to} className={`h-20 my-auto font-bold text-[color:var(--ls-blue)] text-xl text-center`}>
            <div className='h-20 hover:bg-[color:var(--ls-blue)] hover:text-[color:var(--ls-white)] flex my-auto items-center px-6'>
                {children}
            </div>
        </a>)
}

function MobileNav({ open, setOpen }) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-[color:var(--ls-blue)] transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20"> {/*logo container*/}
                <a className="text-xl font-semibold" href="/">
                    <Image
                        src="/../public/assets/ls-logo (1).webp"
                        width={80}
                        height={80}
                        alt="Das Logo der Landschwestern"
                    /> </a>
            </div>
            <div className="flex flex-col ml-4 h-full pl-4 pt-4">
                <a className=" text-xl text-[color:var(--ls-yellow)] my-4" href="/" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    Startseite
                </a>
                <a className=" text-xl text-[color:var(--ls-yellow)] my-4" href="/ueber-uns" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    Über Uns
                </a>
                <a className=" text-xl text-[color:var(--ls-yellow)] my-4" href="/leistungen" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    Leistungen
                </a>
                <a className=" text-xl text-[color:var(--ls-yellow)] my-4" href="/tagespflege" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    Tagespflege
                </a>
                <a className=" text-xl text-[color:var(--ls-yellow)] my-4" href="/seniorenwohngemeinschaft" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    Wohngemeinschaft für Senioren
                </a>
                <a className=" text-xl text-[color:var(--ls-yellow)] my-4" href="/jobs" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    Jobs
                </a>
            </div>
        </div>
    )
}

export default function Navbar() {

    const [open, setOpen] = useState(false)
    return (
        <nav className="relative z-50 flex filter drop-shadow-md bg-white px-4 py-4 h-20 items-center">
            <MobileNav open={open} setOpen={setOpen} />
            <div className="w-3/12 flex items-center">
                <a className="text-2xl font-semibold" href="/">
                    <Image
                        src="/../public/assets/ls-logo (1).webp"
                        width={80}
                        height={80}
                        alt="Das Logo der Landschwestern"
                    />
                </a>
            </div>
            <div className="w-9/12 flex justify-end items-center">

                <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center lg:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-[color:var(--ls-blue)] rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-[color:var(--ls-blue)] rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-[color:var(--ls-blue)] rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>

                <div className="hidden lg:flex">
                    <NavLink to="/">
                        Startseite
                    </NavLink>
                    <NavLink to="/ueber-uns">
                        Über Uns
                    </NavLink>
                    <NavLink to="/leistungen">
                        Leistungen
                    </NavLink>
                    <NavLink to="/tagespflege">
                        Tagespflege
                    </NavLink>
                    <NavLink to="/seniorenwohngemeinschaft">
                        Wohngemeinschaft <br /> für Senioren
                    </NavLink>
                    <NavLink to="/jobs">
                        Jobs
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}