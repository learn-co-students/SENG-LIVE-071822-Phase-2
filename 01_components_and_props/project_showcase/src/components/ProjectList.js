import React from "react";
import ProjectListItem from "./ProjectListItem";

export default function ProjectList({ projects }) {
  console.log(projects);

  // take in an array of project objects as an argument
  // return an array of ProjectListItem components (with each project passed a prop)
  // if you need to add conditional logic this is a better approach
  const renderProjects = (projects) => {
    return projects.map(project => {
      return (
        <ProjectListItem 
          key={project.id} 
          project={project}
        />
      )
    })
  }

  // if just a simple map you can use a variable and refer to it in the JSX instead.
  const projectListItems = projects.map(project => {
    return <ProjectListItem key={project.id} project={project} />
  })

  

  return (
    <section>
      <h1>All Projects</h1>

      <ul className="cards">
        {/* invoke renderProjects to add the list items to the rendered HTML */}
        {/* {renderProjects(projects)} */}
        {projectListItems}
      </ul>
    </section>
  )
}