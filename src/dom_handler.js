// import { setListener } from './events_handler';
import { projects } from './variables';
import Project from './classes/project';

function deleteProject() {
  const indx = document.getElementById("desc-project").lastChild.innerHTML;
  if (projects.length > 1) {
    projects.splice(indx,1);
  } else {
    projects[0] = new Project('My First Project', 'This is your first project, you can edit it! or add a to-do');
  }
  renderProjects();
  projectSelected(0);
}

function isSelected(i) {
  projects.forEach((elem, index) => {
    document
      .getElementById(`project-n-${index}`)
      .classList.remove('has-background-grey-light');
  });

  const row = document.getElementById(`project-n-${i}`);
  row.classList.add('has-background-grey-light');
}

export function projectSelected(index){
  const project = projects[index]
  const hide = document.createElement('span');
  let descriptionNode = document.getElementById('desc-project');
  hide.innerHTML = index;
  hide.classList.add("hide");
  
  document.getElementById('title-project').innerHTML = project.name;
  descriptionNode.innerHTML = project.description;
  descriptionNode.appendChild(hide);
  document.getElementById('delete-project').addEventListener("click", deleteProject);
  isSelected(index);
}

export function firstProjectSelected(){
  projectSelected(0);
}

function describeProject(e) {
  const index = String(e.target.id).match(/(\d+)/)[0];
  projectSelected(index);
}

function setListener() {
  projects.forEach((elem, index) => {
    document
      .getElementById(`project-n-${index}`)
      .addEventListener('click', describeProject);
  });
}

export function renderProjects() {
  const listNode = document.getElementById('projects-list');
  listNode.innerHTML = '';
  projects.forEach((elem, index) => {
    listNode.innerHTML += `<li id="project-n-${index}">${elem.name}</li>`;
  });
  setListener();
}

export function notification(text) {
  const notContainer = document.getElementById('notification');
  const note = document.getElementById('text-notification');
  note.innerHTML = text;
  notContainer.classList.remove('hide');
}
