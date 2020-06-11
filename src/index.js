import Project from './classes/project';

let project1 = new Project("Work", "Work description")
let project2 = new Project("Office", "Office description")

let projects = []

projects.push(project1, project2);

function describeProject(e) {
  let index = e.target.id.substring(e.target.id.length -1, e.target.id.length);
  let project = projects[index]
  document.getElementById("title-project").innerHTML = project.name
  document.getElementById("desc-project").innerHTML = project.description
  console.log(item)
}

function setListener() {
  projects.forEach((elem, index) => {
    document.getElementById(`project-n-${index}`).addEventListener("click", describeProject);
  })
}

function renderProjects() {
  const listNode = document.getElementById("projects-list")
  listNode.innerHTML = ""
  projects.forEach((elem, index) => {
    listNode.innerHTML += `<li id="project-n-${index}">${elem.name}</li>`;
  })
  setListener();
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

document.getElementById('add-project').addEventListener("click", toggleSavePRoject);
document.getElementById('button-save-project').addEventListener("click", saveProject);

renderProjects();
