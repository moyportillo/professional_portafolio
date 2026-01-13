import { Link } from "react-router-dom"
import { useState } from "react"
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"

const HeaderComponent = () => {
    const [open, setOpen] = useState(false)

    return (
        <header className="w-full h-18 bg-blue-900 shadow-2xl fixed top-0 z-50">
            <div className="flex items-center justify-between w-full px-6 py-4">

                {/* LOGO */}
                <Link className="flex items-center gap-3" to="/">
                    <span className="text-white font-bold text-xl hidden sm:block">
            Portafolio Profesional
          </span>
                </Link>

                {/* MENU DESKTOP */}
                <NavigationMenu className="hidden md:flex">
                    <NavigationMenuList className="flex gap-6">
                        {[
                            { to: "/", label: "Inicio" },
                            { to: "/doctrina", label: "Stack Tech" },
                            { to: "/ministerios", label: "Proyectos" },
                            { to: "/contacto", label: "Contacto" }
                        ].map(item => (
                            <NavigationMenuItem key={item.to}>
                                <NavigationMenuLink
                                    asChild
                                    className={`${navigationMenuTriggerStyle()} text-white text-lg bg-blue-900 hover:bg-blue-700`}
                                >
                                    <Link to={item.to}>{item.label}</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>

                {/* BOTÓN HAMBURGUESA */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-white focus:outline-none"
                    aria-label="Toggle menu"
                >
                    <svg
                        className="w-7 h-7"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        {open ? (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* MENU MOBILE */}
            {open && (
                <div className="md:hidden bg-blue-800 px-6 pb-4">
                    <nav className="flex flex-col gap-3">
                        <Link
                            to="/"
                            onClick={() => setOpen(false)}
                            className="text-white py-2 border-b border-blue-700"
                        >
                            Inicio
                        </Link>

                        <Link
                            to="/doctrina"
                            onClick={() => setOpen(false)}
                            className="text-white py-2 border-b border-blue-700"
                        >
                            Stack Tech
                        </Link>

                        <Link
                            to="/ministerios"
                            onClick={() => setOpen(false)}
                            className="text-white py-2 border-b border-blue-700"
                        >
                            Proyectos
                        </Link>

                        <Link
                            to="/contacto"
                            onClick={() => setOpen(false)}
                            className="text-white py-2"
                        >
                            Contacto
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    )
}

export default HeaderComponent
