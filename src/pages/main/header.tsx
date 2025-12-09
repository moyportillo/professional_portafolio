import { Link } from "react-router-dom"
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"

const HeaderComponent = () => {
    return (
        <header className="w-full bg-blue-900 shadow-2xl">
            <div className="flex items-center justify-between w-full px-8 py-4">
                <div className="flex items-center gap-3">
                    <Link className="flex space-x-3 items-center justify-between" to="/">
                    <img src="/src/assets/icon/logo64x64.png" className="h-10 w-auto"/>
                    <span className="text-white font-bold text-xl">Portafolio Profesional</span>
                    </Link>
                </div>
                <NavigationMenu >
                    <NavigationMenuList className="flex flex-wrap gap-6">
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} text-white text-lg bg-blue-900 hover:bg-blue-700 hover:text-white hover:shadow-lg`}>
                                <Link to="/">Inicio</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} text-white text-lg bg-blue-900 hover:bg-blue-700 hover:text-white hover:shadow-lg`}>
                                <Link to="/doctrina">Stack Tech</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} text-white text-lg bg-blue-900 hover:bg-blue-700 hover:text-white hover:shadow-lg`}>
                                <Link to="/ministerios">Proyectos</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} text-white text-lg bg-blue-900 hover:bg-blue-700 hover:text-white hover:shadow-lg`}>
                                <Link to="/contacto">Contacto</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </header>
    )
}

export default HeaderComponent
