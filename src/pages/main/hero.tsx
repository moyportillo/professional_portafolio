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
                  Backend developer especializado en Java y Spring Boot, y frontend developer con ReactJS y TypeScript.
                  Diseños y desarrollos de servicios tecnologicos robustas y optimos, aplicando principios SOLID, Clean Code,
                  pruebas unitarias y buenas prácticas de arquitectura. Experiencia en bases de datos SQL y NoSQL.
                  Actualmente soy estudiante del máster universitario en Análisis de Datos Masivos (Big Data).
              </p>

              <div className="flex justify-center mt-8 gap-4">
                  <button className="bg-violet-600 px-6 py-3 rounded-lg hover:bg-violet-700">
                      Discuss for Projects
                  </button>

                  <button className="border border-gray-600 px-6 py-3 rounded-lg hover:border-white">
                      View Portfolios →
                  </button>
              </div>
          </div>
      </section>
  );
}