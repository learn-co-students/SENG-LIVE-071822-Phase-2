import Header from "./components/Header";
import ProjectList from "./components/ProjectList";

import projects from "./projects";

function App() {
  // console.log(projects);
  return (
    <div className="App">
      <Header />
      <ProjectList projects={projects} />
    </div>);
}

export default App;