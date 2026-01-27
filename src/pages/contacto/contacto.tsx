import { useState } from 'react';
import {
    Mail,
    Phone,
    Send,
    Github,
    Linkedin,
    Instagram,
    MessageCircle,
    ExternalLink,
    CheckCircle,
    AlertCircle
} from 'lucide-react';

interface SocialLink {
    name: string;
    icon: React.ReactNode;
    url: string;
    color: string;
    username?: string;
}

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const ContactoComponent = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Configuración de redes sociales - PERSONALIZA CON TUS DATOS
    const socialLinks: SocialLink[] = [
        {
            name: 'Correo Electronico',
            icon: <Mail className="w-6 h-6" />,
            url: 'https://github.com/moyportillo', // Cambia por tu usuario
            color: 'from-purple-700 to-purple-900',
            username: 'moyporti15@gmail.com'
        },
        {
            name: 'Telefono',
            icon: <Phone className="w-6 h-6" />,
            url: 'https://github.com/moyportillo', // Cambia por tu usuario
            color: 'from-green-700 to-green-900',
            username: '+504 8773-7791'
        },
        {
            name: 'GitHub',
            icon: <Github className="w-6 h-6" />,
            url: 'https://github.com/moyportillo', // Cambia por tu usuario
            color: 'from-gray-700 to-gray-900',
            username: '@moyportillo'
        },
        {
            name: 'LinkedIn',
            icon: <Linkedin className="w-6 h-6" />,
            url: 'https://www.linkedin.com/in/moises-bustillo-portillo-1b7ab5170/', // Cambia por tu perfil
            color: 'from-blue-600 to-blue-800',
            username: 'moises-bustillo'
        },
        {
            name: 'Instagram',
            icon: <Instagram className="w-6 h-6" />,
            url: 'https://instagram.com/mportillo29', // Cambia por tu usuario
            color: 'from-pink-600 to-purple-600',
            username: '@mportillo29'
        },
        {
            name: 'WhatsApp',
            icon: <MessageCircle className="w-6 h-6" />,
            url: 'https://wa.me/50487737791', // Cambia por tu número con código de país
            color: 'from-green-500 to-green-700',
            username: '+504 8773-7791'
        },
        {
            name: 'Hugging Face',
            icon: <span className="text-2xl">🤗</span>,
            url: 'https://huggingface.co/Moyportillo29', // Cambia por tu usuario
            color: 'from-yellow-500 to-orange-500',
            username: '@Moyportillo29'
        }
    ];

    // Información de contacto - PERSONALIZA CON TUS DATOS
    const contactInfo = {
        email: 'moyporti15@gmail.com', // Cambia por tu email
        phone: '+504 8773-7791', // Cambia por tu teléfono
        location: 'Tegucigalpa, Honduras' // Cambia por tu ubicación
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus('idle');

        try {
            // Crear el mailto link con los datos del formulario
            const mailtoLink = `mailto:${contactInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
                `Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`
            )}`;

            // Abrir cliente de correo
            window.location.href = mailtoLink;

            // Simular éxito después de un pequeño delay
            setTimeout(() => {
                setStatus('success');
                setIsSubmitting(false);

                // Limpiar formulario
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });

                // Resetear estado después de 5 segundos
                setTimeout(() => setStatus('idle'), 5000);
            }, 500);

            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            setStatus('error');
            setIsSubmitting(false);
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <div className="min-h-screen bg-[#0c0c0f] text-white px-6 py-24">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Hablemos de tu <span className="text-violet-400">Proyecto</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        ¿Tienes una idea o proyecto en mente? Me encantaría escucharte.
                        Conectemos y hagamos algo increíble juntos.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

                    {/* Formulario de Contacto */}
                    <div className="order-2 lg:order-1">
                        <div className="bg-[#1a1a1f] rounded-2xl border border-gray-800 p-8">
                            <h2 className="text-2xl font-bold mb-6">Envíame un mensaje</h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Nombre */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                        Nombre completo
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg
                             focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20
                             outline-none transition-all text-white"
                                        placeholder="Tu nombre"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                        Correo electrónico
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg
                             focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20
                             outline-none transition-all text-white"
                                        placeholder="tu@email.com"
                                    />
                                </div>

                                {/* Asunto */}
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                                        Asunto
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg
                             focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20
                             outline-none transition-all text-white"
                                        placeholder="¿En qué puedo ayudarte?"
                                    />
                                </div>

                                {/* Mensaje */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                        Mensaje
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg
                             focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20
                             outline-none transition-all text-white resize-none"
                                        placeholder="Cuéntame sobre tu proyecto..."
                                    />
                                </div>

                                {/* Botón de envío */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-violet-600 hover:bg-violet-700 disabled:bg-gray-600
                           px-6 py-3 rounded-lg transition-colors font-medium
                           inline-flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <span className="animate-spin">⏳</span>
                                            Enviando...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5" />
                                            Enviar mensaje
                                        </>
                                    )}
                                </button>

                                {/* Mensajes de estado */}
                                {status === 'success' && (
                                    <div className="flex items-center gap-2 text-green-400 bg-green-400/10
                                border border-green-400/20 rounded-lg p-4">
                                        <CheckCircle className="w-5 h-5" />
                                        <span>¡Mensaje enviado! Te responderé pronto.</span>
                                    </div>
                                )}

                                {status === 'error' && (
                                    <div className="flex items-center gap-2 text-red-400 bg-red-400/10
                                border border-red-400/20 rounded-lg p-4">
                                        <AlertCircle className="w-5 h-5" />
                                        <span>Hubo un error. Por favor, intenta nuevamente.</span>
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>

                    {/* Información de Contacto y Redes Sociales */}
                    <div className="order-1 lg:order-2 space-y-8">
                        {/* Redes Sociales */}
                        <div className="bg-[#1a1a1f] rounded-2xl border border-gray-800 p-8">
                            <h2 className="text-2xl font-bold mb-6">Conecta conmigo</h2>

                            <div className="space-y-3">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg
                             hover:bg-gray-900 transition-all group border border-transparent
                             hover:border-gray-700"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className={`p-3 bg-gradient-to-r ${social.color} rounded-lg 
                                    group-hover:scale-110 transition-transform`}>
                                                {social.icon}
                                            </div>
                                            <div>
                                                <p className="text-white font-medium">{social.name}</p>
                                                {social.username && (
                                                    <p className="text-sm text-gray-400">{social.username}</p>
                                                )}
                                            </div>
                                        </div>
                                        <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-violet-400
                                           transition-colors" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action Final */}
                <div className="mt-20 text-center max-w-3xl mx-auto">
                    <div className="bg-gradient-to-r from-violet-900/30 to-purple-900/30
                        border border-violet-500/30 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold mb-3">¿Prefieres una llamada?</h3>
                        <p className="text-gray-400 mb-6">
                            Agenda una llamada para discutir tu proyecto sin compromiso
                        </p>
                        <a
                            href={`https://wa.me/50487737791?text=${encodeURIComponent('Hola! Me gustaría agendar una llamada para discutir un proyecto.')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700
                       px-8 py-3 rounded-lg transition-colors font-medium"
                        >
                            <MessageCircle className="w-5 h-5" />
                            Agendar por WhatsApp
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ContactoComponent;