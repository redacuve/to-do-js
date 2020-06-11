import {projects} from './variables';
import Project from './classes/project';
import {renderProjects} from './dom_handler';

export function setListener() {
  projects.forEach((elem, index) => {
    document
      .getElementById(`project-n-${index}`)
      .addEventListener("click", describeProject);
  });
}

function describeProject(e) {
  let index = e.target.id.substring(e.target.id.length - 1, e.target.id.length);
  let project = projects[index];
  document.getElementById("title-project").innerHTML = project.name;
  document.getElementById("desc-project").innerHTML = project.description;
  console.log(project);
}
function toggleSavePRoject() {
  document.getElementById("project-save").classList.toggle("hide");
}

function saveProject() {
  const name = document.getElementById("new-project-name").value
  const description = document.getElementById("new-project-description").value
  
  const project = new Project(name, description)
  projects.push(project)
  renderProjects()
}

export function addListenerToProjects() {
  document.getElementById('add-project').addEventListener("click", toggleSavePRoject);
  document.getElementById('button-save-project').addEventListener("click", saveProject);
}