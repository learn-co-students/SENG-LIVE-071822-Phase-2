import { useEffect, useState } from "react";

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import ProjectEditForm from "./components/ProjectEditForm";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [projects, setProjects] = useState([]);
  const [projectToEdit, setProjectToEdit] = useState(null);
  const [selectedPhase, setSelectedPhase] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    let url;
    if (selectedPhase && searchQuery) {
      url = `http://localhost:4000/projects?phase=${selectedPhase}&q=${encodeURI(searchQuery)}`;
    } else if (searchQuery) {
      url = `http://localhost:4000/projects?q=${encodeURI(searchQuery)}`;
    } else if (selectedPhase) {
      url = `http://localhost:4000/projects?phase=${selectedPhase}`;
    } else {
      url = "http://localhost:4000/projects";
    }
    fetch(url)
      .then((res) => res.json())
      .then((projects) => setProjects(projects));
  }, [selectedPhase, searchQuery])

  const onToggleDarkMode = () => {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  };

  const onAddProject = (newProj) => {
    setProjects((projects) => [...projects, newProj]);
  };

  const onSelectedPhaseChange = (newPhase) => {
    setSelectedPhase(newPhase)
  }

  const onUpdateProject = (updatedProject) => {
    setProjectToEdit(null);
    console.log(updatedProject);
    setProjects(projects => projects.map(originalProject => {
      if (originalProject.id === updatedProject.id) {
        return updatedProject;
      } else {
        return originalProject;
      }
    }))
  };

  const onDeleteProject = (deletedProjectId) => {
    // remove the project from state
    console.log('deleting project from App state', 'id:', deletedProjectId)
    setProjects(projects => projects.filter(project => {
      return project.id !== deletedProjectId
    }))
  }

  const onEditProject = (projectToEdit) => {
    setProjectToEdit(projectToEdit);
  };

  const renderForm = () => {
    if (projectToEdit) {
      return (
        <ProjectEditForm
          projectToEdit={projectToEdit}
          onUpdateProject={onUpdateProject}
        />
      );
    } else {
      return <ProjectForm onAddProject={onAddProject} />;
    }
  };

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />
      {renderForm()}
      <ProjectList
        projects={projects}
        onEditProject={onEditProject}
        onUpdateProject={onUpdateProject}
        onDeleteProject={onDeleteProject}
        onSelectedPhaseChange={onSelectedPhaseChange}
        setSelectedPhase={setSelectedPhase}
        setSearchQuery={setSearchQuery}
      />
    </div>
  );
};

export default App;
