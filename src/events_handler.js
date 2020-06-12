import { projects } from './variables';
import Project from './classes/project';
import {createElement,  getElement, setInner, setClickListener, addToClass, setToClass, removeToClass, addToInner } from './elementsHander';
// import { notification } from './dom_handler';

// PROJECT MANIPULATION HELPERS
export function projectSelected(index) {
  const project = projects[index];
  const hide = createElement('span',index,'hide');
  const descriptionNode = getElement('desc-project');
  setInner(getElement('title-project'),project.name)
  setInner(descriptionNode, project.description);
  descriptionNode.appendChild(hide);
  setClickListener(getElement('delete-project'),deleteProject);
  setClickListener(getElement('edit-project'),editProject);
  isHighlited(index);
  // CHECAR BUG
  if (document.getElementById('edit-project').disabled) disableEditP();
  if (document.getElementById('add-project').disabled) disableAddP();
}

export function firstProjectSelected() {
  projectSelected(0);
}

function describeProject(e) {
  const index = String(e.target.id).match(/(\d+)/)[0];
  projectSelected(index);
}
// PROJECT MANIPULATION HELPERS

// DOM MANIPULATION
function disableAddP() {
  const disable = document.getElementById('add-project').disabled;
  document.getElementById('add-project').disabled = !disable;
}

function disableEditP() {
  const disable = document.getElementById('edit-project').disabled;
  document.getElementById('edit-project').disabled = !disable;
}

function toggleForm() {
  document.getElementById('form-hide').classList.toggle('hide');
  document.getElementById('new-project-name').value = '';
  document.getElementById('new-project-description').value = '';
  disableEditP();
}

function dismissNotification() {
  addToClass(getElement('notification'), 'hide');
}

function setListener() {
  projects.forEach((elem, index) => {
    setClickListener(getElement(`project-n-${index}`), describeProject);
  });
}

export function notification(text, nClass = 'is-success') {
  const notContainer = getElement('text-notification');
  setToClass(notContainer,`notification ${nClass}`);
  setInner(notContainer, text);
  removeToClass(notContainer,'hide');
}

export function renderProjects() {
  const listNode = getElement('projects-list');
  setInner(listNode, '');
  projects.forEach((elem, index) => {
    addToInner(listNode,`<li id="project-n-${index}">${elem.name}</li>`);
  });
  setListener();
}
// check later
export function addListenerToProjects() {
  document.getElementById('add-project').addEventListener('click', toggleForm);
  document.getElementById('button-save-project').addEventListener('click', saveProject);
  document.getElementById('delete-form').addEventListener('click', toggleForm);
  document.querySelector('.notification .delete').addEventListener('click', dismissNotification);
}

function isHighlited(i) {
  projects.forEach((elem, index) => {
    removeToClass(getElement(`project-n-${index}`),'has-background-grey-light');
  });
  addToClass(getElement(`project-n-${i}`),'has-background-grey-light'); 
}
// DOM MANIPULATION

// PROJECT MANIPULATION SECTION
function saveProject() {
  const name = document.getElementById('new-project-name');
  const description = document.getElementById('new-project-description');
  const titleNode = document.getElementById('title-project');
  let indexProject = projects.length - 1;
  if (titleNode.lastChild.classList) {
    indexProject = document.getElementById('desc-project').lastChild.innerHTML;
    projects[indexProject].name = name.value;
    projects[indexProject].description = description.value;
    document.body.innerHtml += notification(`Project <strong>'${name.value}'</strong> was edited succefully`, 'is-warning');
  } else {
    const project = new Project(name.value, description.value);
    projects.push(project);
    document.body.innerHtml += notification(`Project <strong>'${name.value}'</strong> was saved succefully`);
  }
  name.value = '';
  description.value = '';
  renderProjects();
  disableAddP();
  document.getElementById('add-project').disabled = false;
  projectSelected(indexProject);
}

function editProject() {
  const hide = document.createElement('span');
  hide.classList.add('hide');
  hide.innerHTML = 'edit';
  document.getElementById('title-project').appendChild(hide);
  const indx = document.getElementById('desc-project').lastChild.innerHTML;
  const project = projects[indx];
  const form = document.getElementById('form-hide');
  form.classList.remove('hide');
  document.getElementById('new-project-name').value = project.name;
  document.getElementById('new-project-description').value = project.description;
  disableAddP();
}

function deleteProject() {
  const indx = document.getElementById('desc-project').lastChild.innerHTML;
  const { name } = projects[indx];
  if (projects.length > 1) {
    projects.splice(indx, 1);
  } else {
    projects[0] = new Project('My First Project', 'This is your first project, you can edit it! or add a to-do');
  }
  document.body.innerHtml += notification(`Project <strong>'${name}'</deleted> was deleted succefully`, 'is-danger');
  renderProjects();
  projectSelected(0);
}
// PROJECT MANIPULATION SECTION
