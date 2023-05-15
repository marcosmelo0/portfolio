import { ProjectElement } from "./ProjectElement";

export function Projects() {
  return (
    <div id="projects" className="border-b-2 border-base-300">
      <div className="md:w-5/6 mx-auto md:py-15 py-10">
        <h2 className="font-marlinge mx-auto md:mx-0 md:my-10 my-12 md:text-5xl text-3xl text-primary-content bg-primary w-fit p-4 text-center md:text-start">
          PROJETOS
        </h2>
        <div className="flex flex-col gap-60 md:gap-20 md:my-20 mb-40">
          <ProjectElement
            name="E-COMMERCE APP"
            description="Esta é uma aplicação de comércio eletrônico construída no React.js que renderiza produtos através de dados recebidos de um arquivo JSON, usado como banco de dados. Também é usado o armazenamento local para salvar itens adicionados ao carrinho. Também se utiliza o useState para filtrar os produtos exibidos por meio de um filtro de categoria e barra de pesquisa."
            live="https://guchierrez.github.io/ecommerce-app/"
            code="https://github.com/guchierrez/ecommerce-app"
            imgSrc="https://i.postimg.cc/LXVzGHKx/project1.jpg"
          />
          <ProjectElement
            name="GERADOR DE PERSONAGEM ELDER SCROLLS"
            description="Esta é uma ferramenta geradora de personagens do jogo Elder Scrolls, que permite criar um personagem com base em sua escolha de personagem e estilo de jogo. Foi construída usando a API do ChatGPT, e a webpage foi construída do zero usando JavaScript e CSS puro."
            imgSrc="https://i.postimg.cc/YS6gmp9t/project2.jpg"
            live="https://guchierrez.github.io/elderscrolls-chargen/"
            code="https://github.com/guchierrez/elderscrolls-chargen"
            opposite={true}
          />
          <ProjectElement
            name="ALEMÃO ACABAMENTOS LANDING PAGE"
            description="Este projeto é uma landing page criada para o Alemão Acabamentos, um negócio local da cidade. A página apresenta os produtos oferecidos pela empresa, uma breve descrição sobre a empresa e informações de contato, como número de telefone e horários de funcionamento, além de links para contato diretamente pelo WhatsApp."
            imgSrc="https://i.postimg.cc/ZY7NNsTv/project3.jpg"
            live="https://guchierrez.github.io/alemao-acabamentos/"
            code="https://github.com/guchierrez/alemao-acabamentos"
          />
        </div>
      </div>
    </div>
  );
}
