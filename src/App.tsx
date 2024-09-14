import { useEffect, useState } from "react";
import "./App.css";
import jye from "./assets/joshua.jpg";
import Light from "./assets/Light";
import Dark from "./assets/Dark";
import Github from "./assets/Github";
import LinkedIn from "./assets/LinkedIn";

function App() {
  const [darkMode, setDarkMode] = useState(isDark);

  useEffect(() => {
    document.documentElement.classList.add("bg-orange-50");
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  function isDark() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div className="outer">
      <div className="middle">
        <div className="inner">
          <div className="container mx-auto py-6 max-w-xl space-y-7 px-6">
            <div className="sm:flex space-y-6 sm:space-y-0 sm:space-x-6 justify-center items-center">
              <img className="rounded-xl sm:w-52" src={jye} alt="Joshua Ye" />
              <div className="flex flex-col space-y-3 text-left">
                <h1 className="font-medium text-3xl">👋 Hey, I'm Joshua Ye!</h1>
                <p className="text-neutral-700 dark:text-neutral-300" style={{width: "101%"}}>
                  A product manager studying computer science at the University of Waterloo.
                  I love design and data, but also enjoy a good book or swim to unwind.
                  Let's build something epic.
                </p>
              </div>
            </div>
            <div className="columns-2 font-light text-xl space-y-4">
              <div className="space-y-4">
                <a href="/assets/resume.pdf" target="_blank" className="dark:text-neutral-100 dark:hover:text-neutral-400 text-gray-900 hover:text-gray-500">📄 Resume</a>
                <div>
                <a href="https://www.goodreads.com/user/show/156080111-joshua-ye" target="_blank" className="dark:text-neutral-100 dark:hover:text-neutral-400 text-gray-900 hover:text-gray-500">📚 Goodreads</a>
                </div>
              </div>
              <div className="space-y-4">
                <a href="https://sleet-litter-236.notion.site/Josh-s-Projects-92f0abdb420d4fa1935bf5754f63e898?pvs=4" target="_blank" className="dark:text-neutral-100 dark:hover:text-neutral-400 text-gray-900 hover:text-gray-500">🚀 Projects</a>
                <div>
                  <a href="mailto:j96ye@uwaterloo.ca" className="dark:text-neutral-100 dark:hover:text-neutral-400 text-gray-900 hover:text-gray-500">🤙 Contact Me</a>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center gap-6">
              <LinkedIn></LinkedIn>
              <Github></Github>
              <button
                type="button"
                aria-label="Toggle dark mode"
                className="p-2 transition rounded-full shadow-lg bg-orange-50 shadow-neutral-800/10 ring-1 ring-neutral-900/5 hover:ring-gray-300/90 backdrop-blur dark:bg-gray-800/90 dark:ring-white/10 dark:hover:ring-white/20"
                onClick={() => {
                  setDarkMode(!darkMode);
                }}
              >
                {darkMode ? <Dark></Dark> : <Light></Light>}
              </button>
              <div className="text-neutral-500">© Joshua Ye</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
