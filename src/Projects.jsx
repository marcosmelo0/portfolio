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
              name="Bandkamp API (Vercel)"
              description="CRUDs com relacionamentos 1 → N, níveis de permissões do usuário e login com refresh token. Generic views. Tecnologia: Django Rest Framework"
              imgSrc="https://i.ibb.co/W3KdTDC/Screenshot-12.png"
              live="https://bandkamp-v7ot.onrender.com/api/docs/"
              code="https://github.com/marcosmelo0/bandkamp-generic-view.git"
            />
          <ProjectElement
            name="Hambúrgueria Kenzie"
            description="Aplicação com sistema de cadastro e login, mapeamento de rotas. O usuário pode fazer pedido online de hambúrgueres, o usuário pode colocar mais de um hambúrguer no carrinho, mas não pode colocar dois repetidos. Tecnologia: React"
            live="https://react-entrega-template-hamburgueria-da-kenzie-marcosmelo0.vercel.app/"
            code="https://github.com/marcosmelo0/hamburgueria-da-kenzie-marcosmelo0"
            imgSrc="https://i.ibb.co/JB9TmWB/Screenshot-3.png"
            opposite={true}
          />
          <ProjectElement
            name="Biblioteka Virtual"
            description="API desenvolvida em Django, utilizando Django Rest Framework JWT para CRUD de usuários, livros, exemplares e empréstimos de livros. Além também de um usuário poder “seguir” um livro, para receber atualizações em seu e-mail sobre disponibilidade dos exemplares a serem emprestados. Tecnologia: Django Rest Framework JWT"
            imgSrc="https://i.ibb.co/mSdQN0y/Screenshot-9.png"
            live="https://biblioteca-grupo-30.vercel.app/api/docs/swagger-ui/"
            code="https://github.com/marcosmelo0/biblioteka.git"
          />
          <ProjectElement
            name="Nu Kenzie"
            description="Aplicação de controle financeiro com monitoramento de entradas e saídas de receitas. Tecnologia: React"
            imgSrc="https://i.ibb.co/0VxyzJ9/Screenshot-6.png"
            live="https://react-entrega-s1-template-nu-kenzie-marcosmelo0.vercel.app/"
            code="https://github.com/marcosmelo0/nu-kenzie-marcosmelo0/tree/master/react-entrega-s1-template-nu-kenzie-marcosmelo0"
            opposite={true}
          />
          <ProjectElement
            name="KImóveis"
            description="Serviço de back-end responsável por gerenciar uma imobiliária utilizando TypeORM e relacionamentos. Tecnologia: Typescript"
            imgSrc="https://img.freepik.com/free-vector/back-end-typographic-header-software-development-process-website-interface-design-improvement-programming-coding-it-profession-isolated-flat-vector-illustration_613284-210.jpg"
            live="https://github.com/Kenzie-Academy-Brasil-Developers/kimoveis-marcosmelo0.git"
            code="https://github.com/Kenzie-Academy-Brasil-Developers/kimoveis-marcosmelo0.git"
          />
          <ProjectElement
            name="Plataforma EAD (EM ANDAMENTO)"
            description="Plataforma EAD de cursos, o modelo de pagamento será com recorrência mensal/anual. Feito com tecnologias Docker, PHP, Laravel e VueJS"
            imgSrc="https://www.edesigner.com.br/wp-content/uploads/2017/07/Plataforma-EAD.jpg"
            live="#"
            code="https://github.com/marcosmelo0/abc-plataforma.git"
            opposite={true}
          />
        </div>
      </div>
    </div>
  );
}
