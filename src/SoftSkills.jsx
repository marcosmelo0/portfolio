import { useState, useEffect } from "react";
import "/src/styles/animation.css";

export function SoftSkills() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div id="skills" className="border-b-2 border-base-300">
      <div
        className={`md:w-5/6 m-auto md:py-10 py-5 fade-in  ${
          isVisible ? "is-visible" : ""
        }`}
      >
        <h2 className="font-marlinge mx-auto md:mx-0  md:text-5xl text-3xl my-12 text-primary-content bg-primary w-fit p-4 text-center md:text-start">
          SOFT SKILLS
        </h2>
        <div className="bg-base-300 md:p-10 p-0 rounded-sm">
          <div>
            <ul className="flex flex-col my-3 bg-base-100 rounded-sm">
              <li className="hover:bg-primary text-lg font-thin transition-all duration-300 p-4 hover:p-8 hover:text-primary-content border-b-4 border-base-300">
                <b className="font-bold">Habilidades de comunicação:</b> Sou
                capaz de comunicar problemas complexos de forma concisa e
                cooperando com um time.
              </li>
              <li className="hover:bg-primary text-lg font-thin transition-all duration-300 p-4 hover:p-8 hover:text-primary-content border-b-4 border-base-300">
                <b className="font-bold">Atenção a detalhes:</b> Sou
                perfeccionista quando se trata de construir aplicações ou criar
                layouts para minhas web pages.
              </li>
              <li className="hover:bg-primary text-lg font-thin transition-all duration-300 p-4 hover:p-8 hover:text-primary-content border-b-4 border-base-300">
                <b className="font-bold">Solução de problemas:</b> Sou capaz de
                abstrair, analisar e quebrar o problema em partes menores a modo
                de tornar sua resolução mais viável.
              </li>
              <li className="hover:bg-primary text-lg font-thin transition-all duration-300 p-4 hover:p-8 hover:text-primary-content border-b-4 border-base-300">
                <b className="font-bold">Gerenciamento de tempo eficiente:</b>{" "}
                Como um indivíduo extremamente disciplinado, sou capaz de
                utilizar meu tempo de uma maneira que me permite ser o mais
                produtivo possível. Eu acredito que essa habilidade se traduz em
                meu trabalho também.
              </li>
              <li className="hover:bg-primary text-lg font-thin transition-all duration-300 p-2 hover:p-4 hover:text-primary-content border-b-4 border-base-300">
                <b className="font-bold">
                  Aprendizado flexível e independente:
                </b>{" "}
                Sempre que me encontro em um novo ambiente de trabalho, eu
                sempre me esforço ao máximo para não ser um obstáculo para meus
                colegas de trabalho e tento aprender e me adaptar o mais rápido
                possível.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
