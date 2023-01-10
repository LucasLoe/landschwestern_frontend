import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from './/../public/assets/LS_noBackground.webp'

function NavLink({ to, children }) {
    return (
        <Link href={to} className={`h-20 my-auto tracking-wide font-bold text-[color:var(--ls-white)] text-xl text-center`}>
            <div className='h-20 hover:bg-[color:var(--ls-yellow)] hover:text-[color:var(--ls-blue)] flex my-auto items-center px-6'>
                {children}
            </div>
        </Link>
    )
}

function MobileNav({ open, setOpen }) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-[color:var(--ls-blue)] transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20"> {/*logo container*/}
                <Link className="text-xl font-semibold ml-2" href="/">
                    <Image
                        src={Logo}
                        width={80}
                        height={80}
                        alt="Das Logo der Landschwestern"
                    /> </Link>
            </div>
            <div className="flex flex-col ml-4 h-full pl-4 pt-4">
                <Link className=" text-xl font-bold tracking-wider text-[color:var(--ls-yellow)] my-4" href="/" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    Startseite
                </Link>
                <Link className=" text-xl font-bold tracking-wider text-[color:var(--ls-yellow)] my-4" href="/ueber-uns" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    Über Uns
                </Link>
                <Link className=" text-xl font-bold tracking-wider text-[color:var(--ls-yellow)] my-4" href="/leistungen" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    Leistungen
                </Link>
                <Link className=" text-xl font-bold tracking-wider text-[color:var(--ls-yellow)] my-4" href="/tagespflege" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    Tagespflege
                </Link>
                <Link className=" text-xl font-bold tracking-wider text-[color:var(--ls-yellow)] my-4" href="/seniorenwohngemeinschaft" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    Wohngemeinschaft für Senioren
                </Link>
                <Link className=" text-xl font-bold tracking-wider text-[color:var(--ls-yellow)] my-4" href="/jobs" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    Jobs
                </Link>
            </div>
        </div>
    )
}

export default function Navbar() {

    const [open, setOpen] = useState(false)
    return (
        <nav className="relative z-50 flex filter drop-shadow-xl shadow-xl bg-[color:var(--ls-blue)] pr-4 h-20 items-center">
            <MobileNav open={open} setOpen={setOpen} />
            <div className="w-3/12 flex items-center">
                <Link className="text-2xl font-semibold ml-2" href="/">
                    <Image
                        src={Logo}
                        width={70}
                        height={70}
                        alt="Das Logo der Landschwestern"
                        className='h-full'
                    />
                </Link>
            </div>
            <div className="w-9/12 flex justify-end items-center">

                <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center lg:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-[color:var(--ls-white)] rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5 bg-amber-500" : ""}`} />
                    <span className={`h-1 w-full bg-[color:var(--ls-white)] rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-[color:var(--ls-white)] rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5 bg-amber-500" : ""}`} />
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