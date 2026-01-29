import { useState } from 'react';
import { Github, Brain, Briefcase, Code2, ExternalLink, Calendar, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

// Tipos de proyectos
type ProjectCategory = 'github' | 'work' | 'personal' | 'ia';

interface Project {
    id: number;
    title: string;
    description: string;
    category: ProjectCategory;
    technologies: string[];
    link?: string;
    github?: string;
    date: string;
    image?: string;
}

// Iconos de tecnologías
const techIcons: Record<string, string> = {
    'Java': '☕', 'Spring Boot': '🍃', 'React': '⚛️', 'TypeScript': '📘',
    'Docker': '🐳', 'Kubernetes': '☸️', 'AWS': '☁️', 'PostgreSQL': '🐘',
    'MongoDB': '🍃', 'Redis': '🔴', 'Kafka': '📨', 'Python': '🐍',
    'Node.js': '💚', '.NET': '🔷', 'C#': '🔷', 'HTML5': '🌐',
    'CSS3': '🎨', 'Tailwind': '🎨', 'Git': '📦', 'LLM': '🧠',
    'RAG': '📚', 'Embedding': '🔢', 'Hugging Face': '🤗',
    'Spring WebFlux': '⚡', 'OpenAPI': '📋', 'AsyncAPI': '📨',
    'Xamarin': '📱', 'SOAP': '🧼', 'JSON': '📄', 'XML': '📄',
    'Oracle': '🏛️', 'SQL Server': '🗄️', 'DB2': '💾',
    'Terraform': '🏗️', 'OpenShift': '🔴', 'Azure DevOps': '🔷',
    'JUnit': '✅', 'Mockito': '🎭', 'JMeter': '⚡', 'Gatling': '🏹',
    'TDD': '🧪', 'Proteus': '📡', 'SAP': '💼', 'AS400': '🖥️',
    'RPG': '🖥️', 'DEVSOFT': '💬', 'Swagger': '📖',
    'Informatica PowerCenter': '🔄', 'ETL': '🔄', 'FTP': '📂',
    'SCRUM': '🏃', 'Kanban': '📋', 'DDD': '📐', 'Clean Code': '✨',
    'Javascript': '🟨'
};

const ProjectsComponent = () => {
    const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | 'all'>('all');
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);

    const projects: Project[] = [
        {
            id: 1,
            title: 'RAG+Embedding+LLM Text Generation',
            description: 'An end-to-end Retrieval-Augmented Generation (RAG) evaluation pipeline that combines semantic embeddings, vector similarity search, and large language models (LLMs) for question-answering tasks. This project uses Ollama with LLaMA models, sentence transformers for embeddings, and F1-score metrics for performance evaluation.',
            category: 'ia',
            technologies: ['Python', 'LLM', 'RAG', 'Embedding', 'Hugging Face', 'Git'],
            github: 'https://github.com/moyportillo/RAG-Embedding-LLM-Text-Generation.git',
            date: '2026'
        },
        {
            id: 2,
            title: 'Iglesia Bautista Hebrón - Sitio Web Oficial',
            description: 'Sitio web oficial de la Iglesia Bautista Hebrón ubicada en Tegucigalpa, Honduras. Este proyecto es una aplicación web moderna desarrollada con React y TypeScript que presenta información sobre la iglesia, sus doctrinas, ministerios, predicaciones y formas de contacto.',
            category: 'personal',
            technologies: ['React', 'TypeScript', 'Tailwind', 'Git'],
            date: '2026',
            github: 'https://github.com/moyportillo/IBH-Web-Site-Public.git',
            link: 'https://moyportillo.github.io/IBH-Web-Site-Public/#/home'
        },
        {
            id: 3,
            title: 'Migración e Infraestructura Cloud con CI/CD',
            description: 'Gestión y automatización de despliegues continuos (CI/CD) con Docker, Azure DevOps y control de versiones por imágenes. Creación de infraestructura en la nube (IaC) con Terraform en AWS.',
            category: 'work',
            technologies: ['AWS', 'Terraform', 'Docker', 'Azure DevOps'],
            date: '2025'
        },
        {
            id: 4,
            title: 'Arquitectura de Microservicios con Spring Boot',
            description: 'Desarrollo de microservicios para diferentes procesos bancarios con Spring Boot y Arquitectura Hexagonal, aplicando DDD, patrones de diseño de software y principios de Clean Code para sistemas escalables y mantenibles.',
            category: 'work',
            technologies: ['Java', 'Spring Boot', 'Oracle', 'Swagger', 'SOAP', 'JSON', 'Clean Code', 'DDD', 'SCRUM', 'JMeter', 'SAP', 'Swagger', 'Docker', 'OpenShift'],
            date: '2022-2025'
        },
        {
            id: 5,
            title: 'Plataformas Administrativas Bancarias Frontend con React y TypeScript',
            description: 'Diseño y desarrollo de interfaces frontend de modulos administrativos de recaudación bancarios con ReactJS utilizando TypeScript, CSS3, HTML5 y Tailwind CSS, creando experiencias de usuario modernas y responsivas.',
            category: 'work',
            technologies: ['React', 'TypeScript', 'Tailwind', 'HTML5', 'CSS3', 'Docker', 'OpenShift', 'TDD', 'SCRUM' ],
            date: '2024 - 2025'
        },
        {
            id: 6,
            title: 'Proyecto INDITEX Product Price Webflux Consumer',
            description: 'Proyecto en Spring Boot utilizando arquitectura hexagonal y Spring WebFlux para gestionar los precios de productos del ecommerce de Inditex. Proporciona una API REST que permite consultar el precio aplicable en función de la fecha de consulta, el identificador del producto y la marca, sobre una base de datos en memoria. documentadas con OpenAPI y AsyncAPI.',
            category: 'personal',
            technologies: ['Java', 'Spring Boot', 'OpenAPI', 'AsyncAPI', 'Spring WebFlux', 'Docker', 'Git', 'JSON', 'JUnit', 'Mockito', 'TDD',  'Swagger', 'Clean Code'],
            github: "https://github.com/moyportillo/Inditex_CORE_Plataform_Reactive_Webflux.git",
            date: '2024'
        },
        {
            id: 7,
            title: 'Refactorización de Aplicación Web de Notificaciones Bancaria con .NET',
            description: 'Refactorización y mantenimiento fullstack de proyecto de notificaciones bancarios de gestión de correos y SMS con C#, .NET para APIs REST, aplicaciones web y su ecosistema de herramientas.',
            category: 'work',
            technologies: ['.NET', 'C#', 'Docker', 'Git', 'HTML5', 'CSS3', 'JSON', 'XML', 'SQL Server', 'OpenShift', 'JUnit', 'DEVSOFT', 'Swagger'],
            date: '2024 - 2025'
        },
        {
            id: 8,
            title: 'Refactorización de Aplicación Móvil Mensajeria Interna',
            description: 'Refactorización y mantenimiento de aplicación móvil de mensajeria interna de gestión de entrega de tarjetas de debito/crédito con Xamarin y backend con C#.',
            category: 'work',
            technologies: ['C#', 'Xamarin', 'JSON', 'XML', 'SQL Server', 'TDD', 'Docker', 'DEVSOFT', 'Swagger'],
            date: '2024 - 2025'
        },
        {
            id: 9,
            title: 'Integración de notificaciones SMS con Core bancario AS400',
            description: 'Integración y desarrollo de Socket en java para el envio de notificaciones SMS cuando se rechaza la compra por medio de POS de tarjetas debito/crédito. Manejo de eventos y desarrollo en RPG para AS400 para conexión con socket.',
            category: 'work',
            technologies: ['Java', 'AS400', 'RPG', 'DB2', 'DEVSOFT', 'SCRUM'],
            date: '2023'
        },
        {
            id: 10,
            title: 'Integración de Sistemas Bancarios',
            description: 'Experiencia en CORE bancarios (SAP, AS400) y mensajerías (DEVSOFT). Desarrollo en RPG para AS400. Documentación técnica con Swagger, Javadoc y README.md.',
            category: 'work',
            technologies: ['SAP', 'AS400', 'RPG'],
            date: '2021-2023'
        },
        {
            id: 11,
            title: 'Procesos ETL y Gestión de Datos',
            description: 'Procesos ETL con Informatica PowerCenter y manejo de archivos vía FTP para integración y transformación de datos empresariales para procesos de pago, transferencia y beneficiarios bancarios.',
            category: 'work',
            technologies: ['Informatica PowerCenter', 'ETL', 'FTP'],
            date: '2021-2022'
        },
        {
            id: 12,
            title: 'Sistema de Censo COVID-19',
            description: 'Proyecto para censo COVID-19 con Python para la gestión de datos y recolección de información de la pandemia del COVID-19.',
            category: 'github',
            technologies: ['Python', 'MongoDB', 'Git'],
            github: 'https://github.com/moyportillo/Censo_COVID19.git',
            date: '2020'
        },
        {
            id: 13,
            title: 'Creación de Sitio Web COVID-19',
            description: 'Creación de sitio web de información para COVID-19, utilizando HTML, CSS y javascript para las diferentes paginas con gráficos y compremsión financiera',
            category: 'github',
            technologies: ['HTML5', 'CSS3', 'Javascript', 'Git'],
            github: 'https://github.com/moyportillo/Proyecto-Covid-19.git',
            link: 'https://moyportillo.github.io/Proyecto-Covid-19/',
            date: '2020'
        },
        {
            id: 14,
            title: 'Sistema de Gestión Administrativa Empresarial Bienes Raices - ZUMOT',
            description: 'Análisis, diseño y desarrollo del módulo administrativo empresarial con C# y .NET. Implementación de funcionalidades robustas para gestión administrativa, diseño y modelado de bases de datos en SQL Server con optimización de consultas. Aplicación de metodología Kanban, control de versiones con GIT, y realización de pruebas exhaustivas (caja blanca y negra) con documentación completa del código.',
            category: 'work',
            technologies: ['C#', '.NET', 'SQL Server', 'Git', 'Kanban'],
            github: 'https://github.com/moyportillo/ZUMOT.git',
            date: '2017'
        },
        {
            id: 15,
            title: 'Monitoreo y Mantenimiento de Microservicios',
            description: 'Monitoreo y mantenimiento de microservicios en entornos productivos con Proteus. Participación en equipos ágiles con SCRUM y Kanban, fomentando automatización y optimización de procesos.',
            category: 'work',
            technologies: ['Proteus', 'Docker', 'Kubernetes'],
            date: '2023-2024'
        }
    ];

    const filteredProjects = selectedCategory === 'all'
        ? projects
        : projects.filter(p => p.category === selectedCategory);

    const getCategoryIcon = (category: ProjectCategory) => {
        const icons = {
            github: <Github className="w-4 h-4" />,
            ia: <Brain className="w-4 h-4" />,
            work: <Briefcase className="w-4 h-4" />,
            personal: <Code2 className="w-4 h-4" />
        };
        return icons[category];
    };

    const getCategoryLabel = (category: ProjectCategory) => {
        const labels = {
            github: 'GitHub',
            ia: 'IA',
            work: 'Experiencia Laboral',
            personal: 'Personal'
        };
        return labels[category];
    };

    return (
        <div className="min-h-screen bg-[#0c0c0f] text-white px-6 py-24 relative overflow-hidden">
            {/* Efectos de fondo animados */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
                     style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
                     style={{ animationDelay: '0.5s' }} />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header con animación */}
                <div className="text-center mb-16 animate-fade-in">
                    <div className="inline-flex items-center gap-2 mb-4">
                        <Sparkles className="w-5 h-5 text-violet-400 animate-pulse" />
                        <span className="text-violet-400 text-sm font-medium uppercase tracking-wider">
                            Portfolio
                        </span>
                        <Sparkles className="w-5 h-5 text-violet-400 animate-pulse" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400
                                 bg-clip-text text-transparent">
                        Mis Proyectos
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Una colección de proyectos que demuestran mis habilidades en desarrollo backend,
                        frontend, arquitectura de software e Inteligencia Artificial
                    </p>
                </div>

                {/* Filtros con animación */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {[
                        { value: 'all', label: 'Todos', icon: null },
                        { value: 'work', label: 'Experiencia Laboral', icon: <Briefcase className="w-4 h-4" /> },
                        { value: 'ia', label: 'IA', icon: <Brain className="w-4 h-4" /> },
                        { value: 'github', label: 'GitHub', icon: <Github className="w-4 h-4" /> },
                        { value: 'personal', label: 'Personal', icon: <Code2 className="w-4 h-4" /> }
                    ].map((filter, index) => (
                        <button
                            key={filter.value}
                            onClick={() => setSelectedCategory(filter.value as ProjectCategory | 'all')}
                            className={`px-6 py-2 rounded-lg transition-all duration-300 flex items-center gap-2
                                     transform hover:scale-105 ${
                                selectedCategory === filter.value
                                    ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-500/50'
                                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                            }`}
                            style={{
                                animation: `slideDown 0.5s ease-out ${index * 0.1}s backwards`
                            }}
                        >
                            {filter.icon}
                            {filter.label}
                        </button>
                    ))}
                </div>

                {/* Grid de Proyectos con animaciones */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={project.id}
                            onMouseEnter={() => setHoveredProject(project.id)}
                            onMouseLeave={() => setHoveredProject(null)}
                            className="bg-[#1a1a1f] rounded-xl border border-gray-800 hover:border-violet-500
                                     transition-all duration-500 overflow-hidden group
                                     transform hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/20
                                     flex flex-col relative"
                            style={{
                                animation: `zoomIn 0.6s ease-out ${index * 0.1}s backwards`
                            }}
                        >
                            {/* Brillo animado en hover */}
                            {hoveredProject === project.id && (
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent
                                              animate-shimmer pointer-events-none z-10" />
                            )}

                            {/* Header del Card */}
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-2">
                                        <div className="p-2 bg-violet-500/10 rounded-lg text-violet-400
                                                      group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                                            {getCategoryIcon(project.category)}
                                        </div>
                                        <span className="text-xs text-gray-400 uppercase tracking-wider">
                                            {getCategoryLabel(project.category)}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-1 text-gray-500 text-xs">
                                        <Calendar className="w-3 h-3" />
                                        {project.date}
                                    </div>
                                </div>

                                <h3 className="text-xl font-semibold mb-3 group-hover:text-violet-400 transition-colors duration-300">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 text-sm mb-4 flex-1 line-clamp-4">
                                    {project.description}
                                </p>

                                {/* Tecnologías */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.slice(0, 6).map((tech, techIndex) => (
                                        <div
                                            key={techIndex}
                                            className="flex items-center gap-1 px-3 py-1 bg-gray-800/50 rounded-full
                                                     text-xs text-gray-300 border border-gray-700
                                                     hover:border-violet-500 hover:bg-gray-700/50 hover:scale-110
                                                     transition-all duration-300 cursor-default"
                                            title={tech}
                                            style={{
                                                animation: hoveredProject === project.id
                                                    ? `bounce 0.5s ease-out ${techIndex * 0.05}s`
                                                    : 'none'
                                            }}
                                        >
                                            <span className="text-base">{techIcons[tech] || '🔧'}</span>
                                            <span>{tech}</span>
                                        </div>
                                    ))}
                                    {project.technologies.length > 6 && (
                                        <div className="flex items-center px-3 py-1 bg-violet-500/10 rounded-full
                                                      text-xs text-violet-400 border border-violet-500/30">
                                            +{project.technologies.length - 6}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Footer con enlaces */}
                            <div className="px-6 py-4 bg-black/20 border-t border-gray-800 flex gap-3">
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2
                                                 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-300
                                                 text-sm transform hover:scale-105"
                                    >
                                        <Github className="w-4 h-4" />
                                        Código
                                    </a>
                                )}
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2
                                                 bg-gradient-to-r from-violet-600 to-purple-600
                                                 hover:from-violet-700 hover:to-purple-700 rounded-lg
                                                 transition-all duration-300 text-sm transform hover:scale-105
                                                 shadow-lg hover:shadow-violet-500/50"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        Ver Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mensaje si no hay proyectos */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-16 animate-fade-in">
                        <p className="text-gray-400 text-lg">
                            No hay proyectos en esta categoría
                        </p>
                    </div>
                )}

                {/* Call to Action */}
                <div className="mt-20 text-center animate-fade-in">
                    <div className="bg-gradient-to-r from-violet-600/10 to-purple-600/10 border border-violet-500/20
                                  rounded-2xl p-8 max-w-3xl mx-auto hover:shadow-2xl hover:shadow-violet-500/20
                                  transition-all duration-300">
                        <h3 className="text-2xl font-bold mb-3">¿Tienes un proyecto en mente?</h3>
                        <p className="text-gray-400 mb-6">
                            Estoy disponible para colaborar en proyectos desafiantes y ayudar a tu equipo
                        </p>
                        <button className="bg-gradient-to-r from-violet-600 to-purple-600
                                         hover:from-violet-700 hover:to-purple-700 px-8 py-3 rounded-lg
                                         transition-all duration-300 font-medium
                                         transform hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/50">
                            <Link to='/contacto'>
                            Hablemos</Link>
                        </button>
                    </div>
                </div>
            </div>

            {/* CSS Animations */}
            <style>{`
                @keyframes slideDown {
                    from {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes zoomIn {
                    from {
                        opacity: 0;
                        transform: scale(0.9);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
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

                @keyframes bounce {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-5px);
                    }
                }

                @keyframes shimmer {
                    0% {
                        transform: translateX(-100%);
                    }
                    100% {
                        transform: translateX(100%);
                    }
                }

                .animate-fade-in {
                    animation: fade-in 0.8s ease-out;
                }

                .animate-shimmer {
                    animation: shimmer 2s infinite;
                }
            `}</style>
        </div>
    );
};

export default ProjectsComponent;