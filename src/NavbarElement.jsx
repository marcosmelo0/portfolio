import { useState, useEffect } from "react";
import { DarkThemeToggle, Navbar } from "flowbite-react";
import { Button } from "flowbite-react";

export function NavbarElement() {
  function handleHomeClick() {
    const targetElement = document.getElementById("home");
    targetElement.scrollIntoView({ behavior: "smooth" });
    closeNavBar();
  }

  function handleSkillsClick() {
    const targetElement = document.getElementById("skills");
    targetElement.scrollIntoView({ behavior: "smooth" });
    closeNavBar();
  }

  function handleProjectsClick() {
    const targetElement = document.getElementById("projects");
    targetElement.scrollIntoView({ behavior: "smooth" });
    closeNavBar();
  }

  function handleContactClick() {
    const targetElement = document.getElementById("contact");
    targetElement.scrollIntoView({ behavior: "smooth" });
    closeNavBar();
  }

  function closeNavBar() {
    document
      .querySelector("#navbar-collapse-with-animation")
      .classList.remove("open");
    document
      .querySelector("#navbar-collapse-with-animation")
      .classList.add("hidden");
    document.querySelector("#toggle-button").classList.remove("open");
  }

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  return (
    <header
      className={`flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full transition-all duration-300 shadow-xl ${
        isScrolled ? "backdrop-blur-sm" : "bg-base-300"
      } text-sm md:py-4 py-2 fixed top-0`}
    >
      <nav
        className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <a
            className="flex-none text-xl font-marlinge dark:text-white"
            href="https://mellifluous-youtiao-f61196.netlify.app/"
          >
            <img
              src="https://i.postimg.cc/Kvp5ZvKV/logo.png"
              style={{ width: "50px" }}
            />
          </a>
          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-base-300 text-primary shadow-sm align-middle hover:bg-base-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-primary transition-all text-sm"
              data-hs-collapse="#navbar-collapse-with-animation"
              aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation"
              id="toggle-button"
            >
              <svg
                className="hs-collapse-open:hidden w-4 h-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
              <svg
                className="hs-collapse-open:block hidden w-4 h-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
        </div>
        <div
          id="navbar-collapse-with-animation"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
        >
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5 text-white font-marlinge">
            <a
              className="font-extralight hover:text-primary transition-all duration-300 cursor-pointer"
              onClick={handleHomeClick}
            >
              Home
            </a>
            <a
              className="font-extralight hover:text-primary transition-all duration-300 cursor-pointer"
              onClick={handleSkillsClick}
            >
              Técnico
            </a>
            <a
              className="font-extralight hover:text-primary transition-all duration-300 cursor-pointer"
              onClick={handleProjectsClick}
            >
              Projetos
            </a>
            <a
              className="font-extralight hover:text-primary transition-all duration-300 cursor-pointer"
              onClick={handleContactClick}
            >
              Contato
            </a>
            <a
              className="font-extralight hover:text-primary transition-all duration-300 cursor-pointer"
              href="https://warm-tarsier-c6a42e.netlify.app/"
            >
              <img
                src="https://i.postimg.cc/xd2NQWPh/us.png"
                style={{ width: "30px" }}
              />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
