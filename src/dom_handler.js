// import { setListener } from './events_handler';
import { projects } from './variables';

function deleteProject() {
  const indx = document.getElementById("desc-project").lastChild.innerHTML;
  if (projects.length > 1) {
    //project.
    console.log(indx);
  }
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

function projectSelected(index){
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
  const index = e.target.id.substring(
    e.target.id.length - 1,
    e.target.id.length,
  );
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
