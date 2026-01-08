import React from "react";

const items = [
    {
        title: "Backend & Microservicios",
        subTitle: "Java, Spring Boot, .NET",
        desc: "Arquitectura limpia, DDD, APIs REST y sistemas escalables.",
    },
    {
        title: "Cloud & DevOps",
        subTitle: "AWS · Docker · Kubernetes · Terraform",
        desc: "Infraestructura como código, CI/CD y despliegues automatizados.",
    },
    {
        title: "Frontend Moderno",
        subTitle: "React · TypeScript · Tailwind",
        desc: "Interfaces modernas, responsivas y orientadas a experiencia de usuario.",
    },{
        title: "Bases de Datos & Performance",
        subTitle: "SQL & NoSQL",
        desc: "Diseño, optimización de consultas y estrategias de caché.",
    },
    {
        title: "Calidad & Arquitectura",
        subTitle: "TDD · Clean Code · Testing",
        desc: "Código mantenible, pruebas automatizadas y buenas prácticas.",
    },
    {
        title: "Integraciones & Mensajería",
        subTitle: "Kafka · Redis · Async APIs",
        desc: "Sistemas asíncronos, eventos y alta concurrencia.",
    },

];

export const SpecialtiesComponent: React.FC = () => {
    return (
        <section className="py-24 bg-[#0f0f12] text-white px-8">
            <h3 className="text-center text-lg text-gray-400">Especialización</h3>
            <h2 className="text-center text-3xl md:text-4xl font-semibold">
                Mi <span className="text-violet-400">Especialidades</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
                {items.map((item, i) => (
                    <div
                        key={i}
                        className="p-8 bg-black/40 rounded-xl border border-gray-800 hover:border-violet-500 transition"
                    >
                        <h4 className="text-xl font-medium mb-3">{item.title}</h4>
                        <h5 className="text-lg font-light mb-3">{item.subTitle}</h5>
                        <p className="text-gray-400">{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
