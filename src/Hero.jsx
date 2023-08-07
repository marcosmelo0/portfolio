import { useState, useEffect } from "react";
import "/src/styles/animation.css";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  function handleProjectsClick() {
    const targetElement = document.getElementById("projects");
    targetElement.scrollIntoView({
      behavior: "smooth",
    });
  }

  function handleContactClick() {
    const targetElement = document.getElementById("contact");
    targetElement.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <main
      id="home"
      className="border-b-2 border-base-300 mx-auto md:pt-0 py-20"
    >
      <FloatingWhatsApp
        accountName="Marcos Melo"
        phoneNumber="+5588999052577"
        allowClickAway={true}
        placeholder="Vi seu portfolio e tenho interesse..."
        chatMessage="Obrigado pela visita. Em que posso ajudar você?"
        statusMessage="Responde em até 2h"
        avatar={`https://github.com/marcosmelo0.png`}
        darkMode={true}
      />
      <div className="w-5/6 m-auto md:py-48 h-full md:my-10 my-5">
        <div
          className={`grid grid-cols-1 md:grid-cols-3 md:gap-10 gap-0 fade-in ${
            isVisible ? "is-visible" : ""
          }`}
        >
          <div className=" flex flex-col row-start-2 md:row-start-auto gap-5 col-span-2 md:my-auto">
            <h1 className="font-marlinge font-bold text-2xl md:text-5xl mt-5 md:mt-0">
              SOBRE MIM
            </h1>
            <p className="font-thin md:text-lg text-gray-200">
              Olá! Sou Marcos Melo, um desenvolvedor web altamente motivado e
              disciplinado. Sou FullStack formado pela instituição de ensino, Kenzie Academy Brasil, onde desenvolvi projetos
              front e back-end. Além de trabalhar em projetos em equipe para
              aprimorar minhas habilidades em soft skills. Pude exercer as
              funções de QA, PO, Scrum e Tech Lead e você pode conferir alguns
              deles neste portfólio! Estou animado para continuar expandindo
              minhas habilidades e conhecimentos em desenvolvimento web.
            </p>
            <div className="flex gap-5 ">
              <button
                className="btn btn-primary rounded-none"
                onClick={handleContactClick}
              >
                Contato
              </button>
              <a
                className="btn btn-outline rounded-none"
                onClick={handleProjectsClick}
              >
                Mostrar Projetos
              </a>
            </div>
          </div>
          <div className="relative w-fit m-auto">
            <div className="rounded-full overflow-hidden row-start-1 md:row-start-auto">
              <img
                className="hover:scale-110 transition-all duration-1000"
                src="https://avatars.githubusercontent.com/u/69183490?v=4"
              />
            </div>
            <span className="absolute bg-primary font-marlinge shadow-lg px-14 py-4 text-primary-content text-3xl bottom-0 transition-all duration-1000">
              Marcos
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
