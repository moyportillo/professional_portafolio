import React from "react";

const items = [
    {
        title: "Email marketing",
        desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
    {
        title: "Market analysis",
        desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
    {
        title: "Keyword research",
        desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
];

export const SpecialtiesComponent: React.FC = () => {
    return (
        <section className="py-24 bg-[#0f0f12] text-white px-8">
            <h3 className="text-center text-lg text-gray-400">Speciality</h3>
            <h2 className="text-center text-3xl md:text-4xl font-semibold">
                My <span className="text-violet-400">specialities</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
                {items.map((item, i) => (
                    <div
                        key={i}
                        className="p-8 bg-black/40 rounded-xl border border-gray-800 hover:border-violet-500 transition"
                    >
                        <h4 className="text-xl font-medium mb-3">{item.title}</h4>
                        <p className="text-gray-400">{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
