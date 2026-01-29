import { useState } from 'react';
import {
    Database,
    Cloud,
    Server,
    Cpu,
    TestTube,
    Layers,
    Monitor,
    Terminal,
    ChevronDown,
    Download,
    Briefcase,
    GraduationCap,
    Sparkles
} from 'lucide-react';

interface TechCategory {
    title: string;
    icon: React.ReactNode;
    technologies: string[];
    color: string;
}

interface Experience {
    role: string;
    company: string;
    period: string;
    responsibilities: string[];
    type: 'work' | 'education';
}

const TechStackComponent = () => {
    const [expandedSection, setExpandedSection] = useState<string | null>(null);
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const techCategories: TechCategory[] = [
        {
            title: 'Big Data & IA',
            icon: <Cpu className="w-6 h-6" />,
            color: 'from-violet-500 to-purple-500',
            technologies: [
                'Apache Spark ⚡', 'Hadoop 🐘', 'MapReduce 🗺️',
                'Apache Hop 🔄', 'Pentaho 📊', 'ETL 🔄',
                'Machine Learning 🤖', 'LLM 🧠', 'RAG 📚',
                'K-NN 📍', 'Redes Neuronales 🧬', 'Informatica PowerCenter 🔄'
            ]
        },
        {
            title: 'Backend & Microservicios',
            icon: <Server className="w-6 h-6" />,
            color: 'from-blue-500 to-cyan-500',
            technologies: [
                'Java ☕', 'Spring Boot 🍃', 'Spring WebFlux ⚡',
                'C# 🔷', '.NET Core 🔷', 'Xamarin 📱',
                'Arquitectura Hexagonal 🏗️', 'DDD 📐',
                'Clean Code ✨', 'Microservicios 🔧', 'RPG (AS400) 🖥️'
            ]
        },
        {
            title: 'Frontend',
            icon: <Monitor className="w-6 h-6" />,
            color: 'from-purple-500 to-pink-500',
            technologies: [
                'React ⚛️', 'TypeScript 📘', 'HTML5 🌐',
                'CSS3 🎨', 'Tailwind CSS 🎨', 'Material UI 💎',
                'Responsive Design 📱'
            ]
        },
        {
            title: 'Bases de Datos',
            icon: <Database className="w-6 h-6" />,
            color: 'from-orange-500 to-red-500',
            technologies: [
                'PostgreSQL 🐘', 'MongoDB 🍃', 'Neo4j 🔗',
                'SQL Server 🗄️', 'Oracle 🏛️', 'DB2 💾',
                'HBase 📊', 'Citus 🔧', 'Caffeine Cache ☕'
            ]
        },
        {
            title: 'APIs & Integración',
            icon: <Layers className="w-6 h-6" />,
            color: 'from-green-500 to-emerald-500',
            technologies: [
                'RESTful APIs 🔗', 'API First 🎯', 'OpenAPI 📋',
                'AsyncAPI 📨', 'SOAP 🧼', 'JSON 📦',
                'XML 📄', 'Apache Kafka 📨', 'Redis 🔴',
                'DEVSOFT 💬'
            ]
        },
        {
            title: 'Cloud & DevOps',
            icon: <Cloud className="w-6 h-6" />,
            color: 'from-sky-500 to-blue-500',
            technologies: [
                'AWS ☁️', 'Terraform 🏗️', 'Docker 🐳',
                'Kubernetes ☸️', 'OpenShift 🔴', 'Azure DevOps 🔷',
                'CI/CD 🔄', 'Nexus 📦', 'IaC 🏗️'
            ]
        },
        {
            title: 'Testing & Calidad',
            icon: <TestTube className="w-6 h-6" />,
            color: 'from-pink-500 to-rose-500',
            technologies: [
                'JUnit ✅', 'Mockito 🎭', 'TDD 🧪',
                'JMeter ⚡', 'Gatling 🏹', 'Caja Blanca 📦',
                'Caja Negra 🔲'
            ]
        },
        {
            title: 'Herramientas & Otros',
            icon: <Terminal className="w-6 h-6" />,
            color: 'from-yellow-500 to-amber-500',
            technologies: [
                'Git 📦', 'Swagger 📖', 'Javadoc 📝',
                'SCRUM 🏃', 'Kanban 📋', 'Proteus 📡',
                'SAP 💼', 'AS400 🖥️', 'FTP 📂'
            ]
        }
    ];

    const experiences: Experience[] = [
        {
            role: 'Software Developer Senior - Microservicios',
            company: 'INFATLAN (Informatica Atlántida)',
            period: 'Previo',
            type: 'work',
            responsibilities: [
                'Desarrollo de microservicios con Spring Boot y Arquitectura Hexagonal, aplicando DDD, patrones de diseño de software y principios de Clean Code',
                'Diseño y desarrollo de interfaces frontend con ReactJS utilizando TypeScript, CSS3, HTML5, Material UI y Tailwind CSS',
                'Implementación de APIs RESTful y API First para comunicación entre microservicios, documentadas con OpenAPI y AsyncAPI',
                'Integración de sistemas asíncronos con Apache Kafka y Redis para publicación/suscripción y escalabilidad',
                'Gestión y automatización de despliegues continuos (CI/CD) con Docker, Kubernetes, Openshift, Azure DevOps',
                'Creación de infraestructura en la nube (IaC) con Terraform en AWS',
                'Trabajo con bases de datos relacionales y no relacionales (MongoDB, DB2, SQLServer, Oracle, PostgreSQL)',
                'Pruebas de calidad con JUnit y Mockito bajo TDD, pruebas de rendimiento con JMeter y Gatling',
                'Monitoreo y mantenimiento de microservicios en entornos productivos con Proteus',
                'Participación en equipos ágiles con SCRUM y Kanban'
            ]
        },
        {
            role: 'Análista & Programador .NET - Módulo Administrativo',
            company: 'ZUMOT Bienes Raices',
            period: 'Previo',
            type: 'work',
            responsibilities: [
                'Análisis y diseño de software para el módulo administrativo de la empresa',
                'Programación en C#, desarrollando funcionalidades robustas para la gestión administrativa',
                'Diseño y modelado de bases de datos en SQL Server',
                'Control de versiones y colaboración en equipo utilizando GIT',
                'Gestión y priorización de tareas mediante la metodología Kanban',
                'Realización de pruebas de software con técnicas de caja blanca y caja negra',
                'Documentación exhaustiva del código y de las pruebas'
            ]
        },
        {
            role: 'Máster en Análisis de Datos Masivos (Big Data)',
            company: 'Universidad de Santiago de Compostela',
            period: 'En curso',
            type: 'education',
            responsibilities: [
                'Formación avanzada en analítica de datos masivos (Big Data), orientada al diseño e implementación de soluciones de IA',
                'Desarrollo de sistema de chat generativo basado en arquitecturas RAG (Retrieval Augmented Generation)',
                'Conocimientos sólidos en Machine Learning y aprendizaje estadístico (K-NN, árboles de decisión, redes neuronales)',
                'Experiencia con ecosistemas Big Data: Apache Spark, Hadoop y MapReduce',
                'Implementación de procesos ETL mediante Apache Hop y Pentaho Data Integration',
                'Manejo de bases de datos: PostgreSQL, MongoDB, Neo4j, HBase y Citus aplicadas a escenarios analíticos'
            ]
        },
        {
            role: 'Ingenieria en Ciencias de la Computación',
            company: 'Universidad Católica de Honduras',
            period: 'Finalizada',
            type: 'education',
            responsibilities: [
                'Entender y aplicar fundamentos matemáticos y lógicos esenciales para la computación',
                'Diseñar y desarrollar software funcional y escalable',
                'Integrar y administrar sistemas de bases de datos y redes',
                'Analizar y resolver problemas técnicos mediante algoritmos y computación avanzada',
                'Desarrollar proyectos de software aplicando buenas prácticas de ingeniería',
                'Comprender y aplicar principios de calidad, gestión de proyectos y ética profesional'
            ]
        }
    ];

    const toggleSection = (section: string) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    return (
        <div className="min-h-screen bg-[#0c0c0f] text-white px-6 py-24 relative overflow-hidden">
            {/* Efectos de fondo animados */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
                <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Header con animación */}
                <div className="text-center mb-16 animate-fade-in">
                    <div className="inline-flex items-center gap-2 mb-4">
                        <Sparkles className="w-6 h-6 text-violet-400 animate-pulse" />
                        <span className="text-violet-400 text-sm font-medium uppercase tracking-wider">
                            Tecnologías & Experiencia
                        </span>
                        <Sparkles className="w-6 h-6 text-violet-400 animate-pulse" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Stack Tecnológico & CV
                    </h1>
                    <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-8">
                        Un recorrido completo por mis habilidades técnicas, experiencia profesional y formación académica
                    </p>

                    <button className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700
                                     px-8 py-3 rounded-lg transition-all duration-300 font-medium inline-flex items-center gap-2
                                     transform hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/50">
                        <Download className="w-5 h-5" />
                        Descargar CV en PDF
                    </button>
                </div>

                {/* Stack Tecnológico Grid con animaciones */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold mb-10 text-center">
                        Tecnologías <span className="text-violet-400">&</span> Herramientas
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {techCategories.map((category, index) => (
                            <div
                                key={index}
                                onMouseEnter={() => setHoveredCard(index)}
                                onMouseLeave={() => setHoveredCard(null)}
                                className="bg-[#1a1a1f] rounded-xl border border-gray-800 hover:border-violet-500
                                         transition-all duration-500 overflow-hidden group relative
                                         transform hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/20"
                                style={{
                                    animation: `slideUp 0.6s ease-out ${index * 0.1}s backwards`
                                }}
                            >
                                {/* Brillo animado en hover */}
                                {hoveredCard === index && (
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent
                                                  animate-shimmer pointer-events-none" />
                                )}

                                {/* Header de la categoría */}
                                <div className={`p-6 bg-gradient-to-r ${category.color} bg-opacity-10 relative`}>
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className={`p-3 bg-gradient-to-r ${category.color} rounded-lg 
                                                      group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                                            {category.icon}
                                        </div>
                                        <h3 className="text-lg font-semibold">{category.title}</h3>
                                    </div>
                                </div>

                                {/* Lista de tecnologías */}
                                <div className="p-6">
                                    <div className="flex flex-wrap gap-2">
                                        {category.technologies.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-3 py-1 bg-gray-800/50 rounded-full text-xs text-gray-300
                                                         border border-gray-700 hover:border-violet-500 hover:bg-gray-700/50
                                                         transition-all duration-300 cursor-default
                                                         hover:scale-110 hover:shadow-lg"
                                                style={{
                                                    animation: hoveredCard === index
                                                        ? `bounce 0.5s ease-out ${techIndex * 0.05}s`
                                                        : 'none'
                                                }}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Experiencia Profesional */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold mb-10 text-center">
                        <Briefcase className="w-8 h-8 inline-block mr-3 text-violet-400" />
                        Experiencia <span className="text-violet-400">Profesional</span>
                    </h2>

                    <div className="space-y-6 max-w-4xl mx-auto">
                        {experiences.filter(exp => exp.type === 'work').map((exp, index) => (
                            <div
                                key={index}
                                className="bg-[#1a1a1f] rounded-xl border border-gray-800 overflow-hidden
                                         hover:border-violet-500 transition-all duration-300
                                         hover:shadow-2xl hover:shadow-violet-500/10"
                                style={{
                                    animation: `slideRight 0.6s ease-out ${index * 0.2}s backwards`
                                }}
                            >
                                <button
                                    onClick={() => toggleSection(`work-${index}`)}
                                    className="w-full p-6 flex items-center justify-between hover:bg-gray-800/30
                                             transition-colors"
                                >
                                    <div className="text-left">
                                        <h3 className="text-xl font-semibold mb-2">{exp.role}</h3>
                                        <div className="flex items-center gap-4 text-sm text-gray-400">
                                            <span className="flex items-center gap-2">
                                                <Briefcase className="w-4 h-4" />
                                                {exp.company}
                                            </span>
                                            <span>{exp.period}</span>
                                        </div>
                                    </div>
                                    <ChevronDown
                                        className={`w-6 h-6 text-violet-400 transition-all duration-300 ${
                                            expandedSection === `work-${index}` ? 'rotate-180 scale-110' : ''
                                        }`}
                                    />
                                </button>

                                {expandedSection === `work-${index}` && (
                                    <div className="px-6 pb-6 border-t border-gray-800 animate-fade-in">
                                        <ul className="space-y-3 mt-4">
                                            {exp.responsibilities.map((resp, respIndex) => (
                                                <li
                                                    key={respIndex}
                                                    className="flex items-start gap-3 text-gray-300"
                                                    style={{
                                                        animation: `slideLeft 0.4s ease-out ${respIndex * 0.05}s backwards`
                                                    }}
                                                >
                                                    <span className="text-violet-400 mt-1">▸</span>
                                                    <span>{resp}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Formación Académica */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold mb-10 text-center">
                        <GraduationCap className="w-8 h-8 inline-block mr-3 text-violet-400" />
                        Formación <span className="text-violet-400">Académica</span>
                    </h2>

                    <div className="space-y-6 max-w-4xl mx-auto">
                        {experiences.filter(exp => exp.type === 'education').map((exp, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-r from-violet-900/20 to-purple-900/20 rounded-xl
                                         border border-violet-500/30 overflow-hidden
                                         hover:border-violet-500 transition-all duration-300
                                         hover:shadow-2xl hover:shadow-violet-500/20"
                                style={{
                                    animation: `slideLeft 0.6s ease-out ${index * 0.2}s backwards`
                                }}
                            >
                                <button
                                    onClick={() => toggleSection(`edu-${index}`)}
                                    className="w-full p-6 flex items-center justify-between hover:bg-violet-900/10
                                             transition-colors"
                                >
                                    <div className="text-left">
                                        <h3 className="text-xl font-semibold mb-2">{exp.role}</h3>
                                        <div className="flex items-center gap-4 text-sm text-gray-400">
                                            <span className="flex items-center gap-2">
                                                <GraduationCap className="w-4 h-4" />
                                                {exp.company}
                                            </span>
                                            <span>{exp.period}</span>
                                        </div>
                                    </div>
                                    <ChevronDown
                                        className={`w-6 h-6 text-violet-400 transition-all duration-300 ${
                                            expandedSection === `edu-${index}` ? 'rotate-180 scale-110' : ''
                                        }`}
                                    />
                                </button>

                                {expandedSection === `edu-${index}` && (
                                    <div className="px-6 pb-6 border-t border-violet-500/30 animate-fade-in">
                                        <ul className="space-y-3 mt-4">
                                            {exp.responsibilities.map((resp, respIndex) => (
                                                <li
                                                    key={respIndex}
                                                    className="flex items-start gap-3 text-gray-300"
                                                    style={{
                                                        animation: `slideRight 0.4s ease-out ${respIndex * 0.05}s backwards`
                                                    }}
                                                >
                                                    <span className="text-violet-400 mt-1">▸</span>
                                                    <span>{resp}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Skills Summary con efectos */}
                <section className="bg-gradient-to-r from-violet-600/10 to-purple-600/10 border
                                  border-violet-500/20 rounded-2xl p-8 max-w-5xl mx-auto
                                  hover:shadow-2xl hover:shadow-violet-500/20 transition-all duration-300">
                    <h3 className="text-2xl font-bold mb-6 text-center">Resumen de Competencias</h3>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { value: '8+', label: 'Categorías de Stack' },
                            { value: '60+', label: 'Tecnologías Dominadas' },
                            { value: '100%', label: 'Dedicación' }
                        ].map((stat, index) => (
                            <div key={index} className="text-center group">
                                <div className="text-4xl font-bold text-violet-400 mb-2
                                              transform group-hover:scale-110 transition-transform duration-300">
                                    {stat.value}
                                </div>
                                <p className="text-gray-400">{stat.label}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-gray-300 mb-4">
                            ¿Buscas un desarrollador con experiencia full stack y conocimientos en Big Data?
                        </p>
                        <button className="bg-gradient-to-r from-violet-600 to-purple-600
                                         hover:from-violet-700 hover:to-purple-700 px-8 py-3 rounded-lg
                                         transition-all duration-300 font-medium
                                         transform hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/50">
                            Contactar
                        </button>
                    </div>
                </section>

            </div>

            {/* CSS Animations */}
            <style>{`
                @keyframes slideUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes slideRight {
                    from {
                        opacity: 0;
                        transform: translateX(-30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes slideLeft {
                    from {
                        opacity: 0;
                        transform: translateX(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
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

                .delay-500 {
                    animation-delay: 500ms;
                }

                .delay-1000 {
                    animation-delay: 1000ms;
                }
            `}</style>
        </div>
    );
};

export default TechStackComponent;