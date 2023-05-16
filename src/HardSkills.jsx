import { HardSkillElement } from "./HardSkillElement";
import { useState, useEffect } from "react";
import "/src/styles/animation.css";

export function HardSkills() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={` border-b-2 border-base-300 fade-in ${
        isVisible ? "is-visible" : ""
      }`}
    >
      <div className="w-5/6 m-auto">
        <h2 className="font-marlinge md:text-5xl text-3xl my-12 text-primary-content bg-primary w-fit mx-auto md:mx-0 p-4 text-center md:text-start">
          HARD SKILLS
        </h2>
        <div className="my-20 w-5/6 mx-auto flex flex-wrap md:gap-24 gap-10">
          <HardSkillElement
            imgSrc="https://www.svgrepo.com/show/373535/css.svg"
            name="CSS3"
          />
          <HardSkillElement
            imgSrc="https://www.svgrepo.com/show/349419/javascript.svg"
            name="JavaScript"
          />
          <HardSkillElement
            imgSrc="https://www.svgrepo.com/show/452228/html-5.svg"
            name="HTML 5"
          />
          <HardSkillElement
            imgSrc="https://www.svgrepo.com/show/303157/react-logo.svg"
            name="React"
          />
          <HardSkillElement
            imgSrc="https://www.svgrepo.com/show/452210/git.svg"
            name="Git"
          />
          <HardSkillElement
            imgSrc="https://i.postimg.cc/cJw7MRDy/nodejs.png"
            name="NodeJS"
          />
          <HardSkillElement
            imgSrc="https://www.svgrepo.com/show/354107/nestjs.svg"
            name="NestJS"
          />
          <HardSkillElement
            imgSrc="https://www.svgrepo.com/show/452091/python.svg"
            name="Python"
          />
          <HardSkillElement
            imgSrc="https://www.svgrepo.com/show/349540/typescript.svg"
            name="TypeScript"
          />
          <HardSkillElement
            imgSrc="https://www.svgrepo.com/show/303301/postgresql-logo.svg"
            name="PostgreSQL"
          />
          <HardSkillElement
            imgSrc="https://www.svgrepo.com/show/439231/mongodb.svg"
            name="MongoDB"
          />
          <HardSkillElement
            imgSrc="https://www.svgrepo.com/show/355133/mysql.svg"
            name="MySQL"
          />
          <HardSkillElement
            imgSrc="https://www.svgrepo.com/show/353657/django-icon.svg"
            name="Django"
          />
          <HardSkillElement
            imgSrc="https://www.svgrepo.com/show/448221/docker.svg"
            name="Docker"
          />
          <HardSkillElement
            imgSrc="https://www.daggala.com/static/228867c3668e439101821568a8a03b54/19ca5/sc.png"
            name="Styled-Components"
          />
          <HardSkillElement
            imgSrc="https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/8d565/express-js.webp"
            name="Express"
          />
          <HardSkillElement
            imgSrc="https://www.svgrepo.com/show/439240/npm.svg"
            name="NPM"
          />
          <HardSkillElement
            imgSrc="https://www.ictshore.com/wp-content/uploads//2020/12/fstack0040-00-jest_tutorial.svg"
            name="Jest"
          />
          <HardSkillElement
            imgSrc="https://www.svgrepo.com/show/353733/figma.svg"
            name="Figma"
          />
          <HardSkillElement
            imgSrc="https://www.svgrepo.com/show/354463/trello.svg"
            name="Trello"
          />
          <HardSkillElement
            imgSrc="https://www.svgrepo.com/show/353935/jira.svg"
            name="Jira"
          />
          <HardSkillElement
            imgSrc="https://www.svgrepo.com/show/374167/vite.svg"
            name="Vite"
          />
          <HardSkillElement
            imgSrc="https://www.svgrepo.com/show/349575/yarn.svg"
            name="Yarn"
          />
          <HardSkillElement
            imgSrc="https://www.svgrepo.com/show/372946/scrum.svg"
            name="Scrum"
          />
          <HardSkillElement
            imgSrc="https://www.svgrepo.com/show/394236/json.svg"
            name="JSON"
          />
        </div>
      </div>
    </div>
  );
}
