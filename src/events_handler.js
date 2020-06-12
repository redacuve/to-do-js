import { projects } from './variables';
import Project from './classes/project';
// import { notification } from './dom_handler';

// PROJECT MANIPULATION SECTION 
function saveProject() {
  const name = document.getElementById('new-project-name');
  const description = document.getElementById('new-project-description');
  const titleNode = document.getElementById("title-project");
  let indexProject = projects.length - 1
  if (titleNode.lastChild.classList) {
    indexProject = document.getElementById("desc-project").lastChild.innerHTML;
    projects[indexProject].name = name.value;
    projects[indexProject].description = description.value;
    document.body.innerHtml += notification(`Project <strong>'${name.value}'</strong> was edited succefully`, 'is-warning');
  }else {
    const project = new Project(name.value, description.value);
    projects.push(project);
    document.body.innerHtml += notification(`Project <strong>'${name.value}'</strong> was saved succefully`);
  }
  name.value = '';
  description.value = '';
  renderProjects();
  toggleForm();
  projectSelected(indexProject);
}

function editProject(){
  const hide = document.createElement('span');
  hide.classList.add('hide');
  hide.innerHTML = "edit";
  document.getElementById("title-project").appendChild(hide);
  const indx = document.getElementById("desc-project").lastChild.innerHTML;
  const project = projects[indx];
  const form = document.getElementById('form-hide');
  form.classList.remove("hide");
  document.getElementById('new-project-name').value = project.name;
  document.getElementById('new-project-description').value = project.description;
}

function deleteProject() {
  const indx = document.getElementById("desc-project").lastChild.innerHTML;
  const name = projects[indx].name
  if (projects.length > 1) {
    projects.splice(indx,1);
  } else {
    projects[0] = new Project('My First Project', 'This is your first project, you can edit it! or add a to-do');
  }
  document.body.innerHtml += notification(`Project <strong>'${name}'</deleted> was deleted succefully`, 'is-danger');
  renderProjects();
  projectSelected(0);
}
// PROJECT MANIPULATION SECTION 

// PROJECT MANIPULATION HELPERS
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
  document.getElementById('edit-project').addEventListener("click", editProject);
  isHighlited(index);
}

export function firstProjectSelected(){
  projectSelected(0);
}

function describeProject(e) {
  const index = String(e.target.id).match(/(\d+)/)[0];
  projectSelected(index);
}
// PROJECT MANIPULATION HELPERS

// DOM MANIPULATION
function toggleForm() {
  const disable = document.getElementById('add-project').disabled;
  document.getElementById('form-hide').classList.toggle('hide');
  document.getElementById('add-project').disabled = !disable;
  document.getElementById('new-project-name').value = '';
  document.getElementById('new-project-description').value = '';
}

function dismissNotification() {
  const notContainer = document.getElementById('notification');
  notContainer.classList.add('hide');
}

function setListener() {
  projects.forEach((elem, index) => {
    document
      .getElementById(`project-n-${index}`)
      .addEventListener('click', describeProject);
  });
}

export function notification(text, nClass = "is-success") {
  const notContainer = document.getElementById('notification');
  notContainer.classList.value = `notification ${nClass}`;
  const note = document.getElementById('text-notification');
  note.innerHTML = text;
  notContainer.classList.remove('hide');
}

export function renderProjects() {
  const listNode = document.getElementById('projects-list');
  listNode.innerHTML = '';
  projects.forEach((elem, index) => {
    listNode.innerHTML += `<li id="project-n-${index}">${elem.name}</li>`;
  });
  setListener();
}

export function addListenerToProjects() {
  document.getElementById('add-project').addEventListener('click', toggleForm);
  document.getElementById('button-save-project').addEventListener('click', saveProject);
  document.getElementById('delete-form').addEventListener('click', toggleForm);
  document.querySelector('.notification .delete').addEventListener('click', dismissNotification);
}

function isHighlited(i) {
  projects.forEach((elem, index) => {
    document
      .getElementById(`project-n-${index}`)
      .classList.remove('has-background-grey-light');
  });

  const row = document.getElementById(`project-n-${i}`);
  row.classList.add('has-background-grey-light');
}
// DOM MANIPULATION
