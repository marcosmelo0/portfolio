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
        <h2 className="font-marlinge md:text-5xl text-3xl text-center">
          Tecnologias com as quais sou familiar
        </h2>
        <div className="my-20 w-5/6 mx-auto flex flex-wrap md:gap-24 gap-10">
          <HardSkillElement
            imgSrc="https://i.postimg.cc/XqVgvrkM/css.png"
            name="CSS3"
          />
          <HardSkillElement
            imgSrc="https://i.postimg.cc/nchkbQLB/js.png"
            name="JavaScript"
          />
          <HardSkillElement
            imgSrc="https://i.postimg.cc/GtqxTbX4/html.png"
            name="HTML 5"
          />
          <HardSkillElement
            imgSrc="https://i.postimg.cc/25Rh6qCH/sass.png"
            name="SASS"
          />
          <HardSkillElement
            imgSrc="https://i.postimg.cc/tJYYDyXZ/react.png"
            name="React"
          />
          <HardSkillElement
            imgSrc="https://i.postimg.cc/wv5VHXJc/git.png"
            name="Git"
          />
          <HardSkillElement
            imgSrc="https://i.postimg.cc/nznm46jB/tailwind.png"
            name="Tailwind CSS"
          />
        </div>
        <h2 className="font-marlinge md:text-5xl text-3xl text-center">
          Tecnologias que vou estudar no futuro
        </h2>
        <div className="my-20 w-5/6 mx-auto flex flex-wrap md:gap-24 gap-10">
          <HardSkillElement
            imgSrc="https://i.postimg.cc/52vQZx88/typescript.png"
            name="TypeScript"
          />
          <HardSkillElement
            imgSrc="https://i.postimg.cc/cJw7MRDy/nodejs.png"
            name="NodeJS"
          />
          <HardSkillElement
            imgSrc="https://i.postimg.cc/brNQhKqp/postgre.png"
            name="PostgreSQL"
          />
          <HardSkillElement
            imgSrc="https://i.postimg.cc/13NDs01n/python.png"
            name="Python"
          />
          <HardSkillElement
            imgSrc="https://i.postimg.cc/G2nQZ7Bm/aws.png"
            name="Amazon Web Services (Cloud)"
          />
        </div>
      </div>
    </div>
  );
}
