import { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Code, Briefcase } from 'lucide-react';
import profileImg from "@/assets/img/profile.png";
import { Link } from 'react-router-dom';


export const HeroComponent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const roles = [
        "Full Stack Developer",
        "Cloud Architect",
        "Big Data Engineer",
        "AI Developer"
    ];

    const [currentRole, setCurrentRole] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="min-h-screen flex items-center justify-center bg-[#0c0c0f] text-white px-8 pt-10 md:pt-0 relative overflow-hidden">
            {/* Efectos de fondo animados */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
                     style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
                     style={{ animationDelay: '0.5s' }} />
            </div>

            {/* Partículas flotantes */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-violet-400/30 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}s`
                        }}
                    />
                ))}
            </div>

            <div className={`max-w-4xl text-center relative z-10 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
                {/* Badge animado */}
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-violet-500/10 border border-violet-500/20
                              rounded-full backdrop-blur-sm animate-fade-in">
                    <Sparkles className="w-4 h-4 text-violet-400 animate-pulse" />
                    <span className="text-violet-400 text-sm font-medium">
                        Disponible para proyectos
                    </span>
                </div>

                {/* Imagen de perfil con efectos */}
                <div className="flex justify-center mb-6">
                    <div className="relative group">
                        {/* Anillo animado */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full
                                      opacity-75 group-hover:opacity-100 blur-lg animate-pulse" />

                        {/* Imagen */}
                        <img
                            src={profileImg}
                            alt="Moises Bustillo"
                            className="relative w-32 h-32 md:w-80 md:h-80 rounded-full object-cover
                                     border-4 border-violet-500 shadow-2xl shadow-violet-500/50
                                     transform group-hover:scale-105 transition-all duration-500"
                        />

                        {/* Puntos decorativos */}
                        <div className="absolute -top-2 -right-2 w-4 h-4 bg-violet-400 rounded-full animate-ping" />
                        <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-purple-400 rounded-full animate-pulse" />
                    </div>
                </div>

                {/* Título principal */}
                <div className="mb-4">
                    <p className="text-4xl md:text-5xl font-light mb-2 animate-slide-up">
                        ¡Hola!, Soy
                    </p>
                    <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400
                                 bg-clip-text text-transparent animate-slide-up"
                        style={{ animationDelay: '0.2s' }}>
                        Moises A. Bustillo Portillo
                    </h1>
                </div>

                {/* Rol rotativo */}
                <div className="h-8 mb-6 overflow-hidden">
                    <div className="flex flex-col transition-transform duration-500"
                         style={{ transform: `translateY(-${currentRole * 2}rem)` }}>
                        {roles.map((role, index) => (
                            <span key={index} className="text-2xl font-semibold text-violet-400 h-8">
                                {role}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Descripción */}
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed animate-fade-in"
                   style={{ animationDelay: '0.4s' }}>
                    Arquitecto y desarrollador fullstack de software con experiencia en{' '}
                    <span className="text-violet-400 font-medium">microservicios</span>,{' '}
                    <span className="text-blue-400 font-medium">cloud</span> e{' '}
                    <span className="text-purple-400 font-medium">IA</span>.
                    Especializado en Spring Boot, React, DevOps y Big Data, con enfoque en arquitecturas escalables,
                    APIs, automatización, Machine Learning y soluciones basadas en LLM.
                </p>

                {/* Botones de acción */}
                <div className="flex flex-wrap justify-center mt-8 gap-4 animate-fade-in"
                     style={{ animationDelay: '0.6s' }}>
                    <button className="group relative px-8 py-3 rounded-lg overflow-hidden
                                     bg-gradient-to-r from-violet-600 to-purple-600
                                     hover:from-violet-700 hover:to-purple-700
                                     transform hover:scale-105 transition-all duration-300
                                     shadow-lg hover:shadow-violet-500/50">
                        <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full
                                      group-hover:translate-x-full transition-transform duration-700" />
                        <span className="relative flex items-center gap-2 font-medium">
                            <Briefcase className="w-5 h-5" />
                            <Link to='/proyecto'>
                            Ver Proyectos</Link>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </button>

                    <button className="group px-8 py-3 rounded-lg border-2 border-violet-500/50
                                     hover:border-violet-500 hover:bg-violet-500/10
                                     transform hover:scale-105 transition-all duration-300
                                     backdrop-blur-sm">
                        <span className="flex items-center gap-2 font-medium">
                            <Code className="w-5 h-5" />
                            <Link to='/stack'>
                            Stack Tecnológico</Link>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </button>
                </div>

                {/* Estadísticas rápidas */}
                <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto animate-fade-in"
                     style={{ animationDelay: '0.8s' }}>
                    {[
                        { value: '5+', label: 'Años Experiencia' },
                        { value: '15+', label: 'Proyectos' },
                        { value: '60+', label: 'Tecnologías' }
                    ].map((stat, index) => (
                        <div key={index} className="group">
                            <div className="text-3xl font-bold text-violet-400 mb-1
                                          transform group-hover:scale-110 transition-transform">
                                {stat.value}
                            </div>
                            <div className="text-sm text-gray-500">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CSS Animations */}
            <style>{`
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0) translateX(0);
                    }
                    25% {
                        transform: translateY(-20px) translateX(10px);
                    }
                    50% {
                        transform: translateY(-10px) translateX(-10px);
                    }
                    75% {
                        transform: translateY(-15px) translateX(5px);
                    }
                }

                @keyframes slide-up {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes fade-in {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                .animate-slide-up {
                    animation: slide-up 0.8s ease-out backwards;
                }

                .animate-fade-in {
                    animation: fade-in 0.8s ease-out backwards;
                }
            `}</style>
        </section>
    );
}