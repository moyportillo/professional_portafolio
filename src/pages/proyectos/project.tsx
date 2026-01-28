import { useState } from 'react';
import { Github, Brain, Briefcase, Code2, ExternalLink, Calendar } from 'lucide-react';

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

// Iconos de tecnologías (puedes expandir esto)
const techIcons: Record<string, string> = {
    'Java': '☕',
    'Spring Boot': '🍃',
    'React': '⚛️',
    'TypeScript': '📘',
    'Docker': '🐳',
    'Kubernetes': '☸️',
    'AWS': '☁️',
    'PostgreSQL': '🐘',
    'MongoDB': '🍃',
    'Redis': '🔴',
    'Kafka': '📨',
    'Python': '🐍',
    'Node.js': '💚',
    '.NET': '🔷',
    'Angular': '🅰️',
    'Vue': '💚',
    'MySQL': '🐬',
    'GraphQL': '📊',
    'Tailwind': '🎨',
    'Git': '📦',
    'LLM': '🧠',
    'RAG': '📚',
    'Embedding': '🔢',
    'Hugging Face': '🤗',
};

const ProjectsComponent = () => {
    const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | 'all'>('all');

    // Datos de ejemplo - Reemplaza con tus proyectos reales
    const projects: Project[] = [
        {
            id: 1,
            title: 'RAG+Embedding+LLM Text Generation',
            description: 'An end-to-end Retrieval-Augmented Generation (RAG) evaluation pipeline that combines semantic embeddings, vector similarity search, and large language models (LLMs) for question-answering tasks. This project uses Ollama with LLaMA models, sentence transformers for embeddings, and F1-score metrics for performance evaluation.',
            category: 'ia',
            technologies: ['Python', 'LLM', 'RAG', 'Embedding', 'Hugging Face', 'Git'],
            github: 'https://github.com/moyportillo/RAG-Embedding-LLM-Text-Generation.git',
            date: '2025'
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
            title: 'API REST con Clean Architecture',
            description: 'API RESTful siguiendo principios SOLID y Clean Architecture, con documentación Swagger y pruebas unitarias completas.',
            category: 'github',
            technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'Git'],
            github: 'https://github.com/usuario/proyecto',
            date: '2024'
        },
        {
            id: 4,
            title: 'Dashboard Analytics en React',
            description: 'Dashboard interactivo para análisis de datos en tiempo real con gráficos dinámicos y filtros avanzados.',
            category: 'personal',
            technologies: ['React', 'TypeScript', 'Tailwind', 'Node.js', 'MongoDB'],
            github: 'https://github.com/usuario/dashboard',
            date: '2023'
        },
        {
            id: 5,
            title: 'Sistema de Gestión Cloud-Native',
            description: 'Aplicación cloud-native desplegada en AWS con infraestructura como código usando Terraform y CI/CD con GitHub Actions.',
            category: 'work',
            technologies: ['AWS', 'Docker', 'Kubernetes', 'Python', 'PostgreSQL'],
            date: '2023',
            link: 'https://example.com'
        },
        {
            id: 6,
            title: 'Plataforma de E-Learning',
            description: 'Sistema completo de gestión de cursos online con autenticación JWT, pagos integrados y sistema de notificaciones.',
            category: 'personal',
            technologies: ['Java', 'Spring Boot', 'React', 'MySQL', 'Redis', 'AWS'],
            github: 'https://github.com/usuario/elearning',
            link: 'https://example.com',
            date: '2023'
        },
        {
            id: 7,
            title: 'Integración de Sistemas Legacy',
            description: 'Modernización e integración de sistemas legacy mediante APIs REST y mensajería asíncrona.',
            category: 'work',
            technologies: ['.NET', 'Kafka', 'PostgreSQL', 'Docker', 'Redis'],
            date: '2022'
        }
    ];

    const filteredProjects = selectedCategory === 'all'
        ? projects
        : projects.filter(p => p.category === selectedCategory);

    const getCategoryIcon = (category: ProjectCategory) => {
        switch(category) {
            case 'github': return <Github className="w-4 h-4" />;
            case 'ia': return <Brain className="w-4 h-4" />;
            case 'work': return <Briefcase className="w-4 h-4" />;
            case 'personal': return <Code2 className="w-4 h-4" />;
        }
    };

    const getCategoryLabel = (category: ProjectCategory) => {
        switch(category) {
            case 'github': return 'GitHub';
            case 'ia': return 'IA';
            case 'work': return 'Experiencia Laboral';
            case 'personal': return 'Personal';
        }
    };

    return (
        <div className="min-h-screen bg-[#0c0c0f] text-white px-6 py-24">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Mis <span className="text-violet-400">Proyectos</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Una colección de proyectos que demuestran mis habilidades en desarrollo backend,
                        frontend, arquitectura de software e Inteligencia Artificial
                    </p>
                </div>

                {/* Filtros */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    <button
                        onClick={() => setSelectedCategory('all')}
                        className={`px-6 py-2 rounded-lg transition-all ${
                            selectedCategory === 'all'
                                ? 'bg-violet-600 text-white'
                                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                        }`}
                    >
                        Todos
                    </button>
                    <button
                        onClick={() => setSelectedCategory('work')}
                        className={`px-6 py-2 rounded-lg transition-all flex items-center gap-2 ${
                            selectedCategory === 'work'
                                ? 'bg-violet-600 text-white'
                                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                        }`}
                    >
                        <Briefcase className="w-4 h-4" />
                        Experiencia Laboral
                    </button>
                    <button
                        onClick={() => setSelectedCategory('ia')}
                        className={`px-6 py-2 rounded-lg transition-all flex items-center gap-2 ${
                            selectedCategory === 'ia'
                                ? 'bg-violet-600 text-white'
                                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                        }`}
                    >
                        <Brain className="w-4 h-4" />
                        IA
                    </button>
                    <button
                        onClick={() => setSelectedCategory('github')}
                        className={`px-6 py-2 rounded-lg transition-all flex items-center gap-2 ${
                            selectedCategory === 'github'
                                ? 'bg-violet-600 text-white'
                                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                        }`}
                    >
                        <Github className="w-4 h-4" />
                        GitHub
                    </button>
                    <button
                        onClick={() => setSelectedCategory('personal')}
                        className={`px-6 py-2 rounded-lg transition-all flex items-center gap-2 ${
                            selectedCategory === 'personal'
                                ? 'bg-violet-600 text-white'
                                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                        }`}
                    >
                        <Code2 className="w-4 h-4" />
                        Personal
                    </button>
                </div>

                {/* Grid de Proyectos */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-[#1a1a1f] rounded-xl border border-gray-800 hover:border-violet-500
                         transition-all duration-300 overflow-hidden group hover:shadow-2xl
                         hover:shadow-violet-500/10 flex flex-col"
                        >
                            {/* Header del Card */}
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-2">
                                        <div className="p-2 bg-violet-500/10 rounded-lg text-violet-400">
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

                                <h3 className="text-xl font-semibold mb-3 group-hover:text-violet-400 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 text-sm mb-4 flex-1">
                                    {project.description}
                                </p>

                                {/* Tecnologías */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-1 px-3 py-1 bg-gray-800/50 rounded-full
                                 text-xs text-gray-300 border border-gray-700"
                                            title={tech}
                                        >
                                            <span className="text-base">{techIcons[tech] || '🔧'}</span>
                                            <span>{tech}</span>
                                        </div>
                                    ))}
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
                             bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-sm"
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
                             bg-violet-600 hover:bg-violet-700 rounded-lg transition-colors text-sm"
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
                    <div className="text-center py-16">
                        <p className="text-gray-400 text-lg">
                            No hay proyectos en esta categoría
                        </p>
                    </div>
                )}

                {/* Call to Action */}
                <div className="mt-20 text-center">
                    <div className="bg-gradient-to-r from-violet-600/10 to-purple-600/10 border border-violet-500/20
                        rounded-2xl p-8 max-w-3xl mx-auto">
                        <h3 className="text-2xl font-bold mb-3">¿Tienes un proyecto en mente?</h3>
                        <p className="text-gray-400 mb-6">
                            Estoy disponible para colaborar en proyectos desafiantes y ayudar a tu equipo
                        </p>
                        <button className="bg-violet-600 hover:bg-violet-700 px-8 py-3 rounded-lg
                             transition-colors font-medium">
                            Hablemos
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsComponent;