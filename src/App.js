import "./App.css";
import Image from "./components/Image";
import Project from "./components/Project";
import { projects } from "./components/Projects";
import Socials from "./components/Socials";
function App() {
  return (
    <>
      <section>
        <div className="container fadeIn">
          <div className="fadeIn">
            <Image />
            <h1>Talal El Zeini</h1>
            <Socials />
          </div>
          {projects.map((project, number) => {
            number = number + ". ";
            if (number < 10) {
              number = "0" + number;
            }
            return <Project key={number} project={project} number={number} />;
          })}
        </div>
      </section>
    </>
  );
}

export default App;