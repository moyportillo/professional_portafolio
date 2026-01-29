import React from "react";
import {
    FaInstagram,
    FaWhatsapp
} from "react-icons/fa";

import {
    Mail,
    Github,
    Linkedin
} from 'lucide-react';

export const FooterComponent: React.FC = () => {
    return (
        <footer className="py-8 px-8 w-full bg-gradient-to-r from-violet-900 via-purple-900 to-fuchsia-900 shadow-2xl">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

                    {/* LOGO + TITULO + DESCRIPCION */}
                    <div className="flex flex-col items-center md:items-start">

                        {/* Logo + IBH */}
                        <div className="flex items-center gap-2">
                            <h3 className="text-white text-2xl font-semibold">
                                Moises A. Bustillo Portillo
                            </h3>
                        </div>

                        {/* Descripción */}
                        <p className="text-gray-400 text-sm italic mt-1 text-left md:text-left">
                            Portafolio Profesional
                        </p>
                    </div>

                    {/* REDES SOCIALES */}
                    <div className="flex gap-6">
                        <a
                            href="https://wa.me/50487737791"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-white transition transform hover:scale-110"
                        >
                            <FaWhatsapp size={24} />
                        </a>
                        <a
                            href="https://github.com/moyportillo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-white transition transform hover:scale-110"
                        >
                            <Github size={24} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/moises-bustillo-portillo-1b7ab5170/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-white transition transform hover:scale-110"
                        >
                            <Linkedin size={24} />
                        </a>
                        <a
                            href="https://www.instagram.com/mportillo29"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-white transition transform hover:scale-110"
                        >
                            <FaInstagram size={24} />
                        </a>
                        <a
                            href="mailto:moyporti15@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-white transition transform hover:scale-110"
                        >
                            <Mail size={24} />
                        </a>
                    </div>

                </div>

                {/* COPYRIGHT */}
                <p className="text-center mt-10 text-gray-200 text-sm">
                    © 2026. Todos los derechos reservados.
                </p>
            </footer>
    );
};
