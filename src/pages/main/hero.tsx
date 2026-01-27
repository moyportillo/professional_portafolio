import profileImg from "@/assets/img/profile.png";
export const HeroComponent = () => {
  return (
      <section className="min-h-screen flex items-center justify-center bg-[#0c0c0f] text-white px-8 pt-10 md:pt-0">
          <div className="max-w-4xl text-center">
              <div className="flex justify-center mb-6">
                  <img
                      src={profileImg}
                      alt="Moises Bustillo"
                      className="w-32 h-32 md:w-80 md:h-80 rounded-full object-cover
                       border-4 border-violet-500 shadow-lg"
                  />
              </div>
              <p className="text-4xl md:text-5xl font-light">
                  ¡Hola!, Soy <br />
                  <span className="text-violet-400 font-semibold">Moises A. Bustillo Portillo</span>
              </p>

              <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                  Arquitecto y desarrollador fullstack de software con experiencia en microservicios, cloud e IA. Especializado en Spring Boot, React, DevOps y Big Data, con enfoque en arquitecturas escalables, APIs, automatización, Machine Learning y soluciones basadas en LLM.
              </p>

              <div className="flex justify-center mt-8 gap-4">
                  <button className="bg-violet-600 px-6 py-3 rounded-lg hover:bg-violet-700">
                      Proyectos
                  </button>

                  <button className="border border-gray-600 px-6 py-3 rounded-lg hover:border-white">
                      Ver Stack Tecnólogico →
                  </button>
              </div>
          </div>
      </section>
  );
}