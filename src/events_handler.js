import { projects } from './variables';
import Project from './classes/project';
import {
  createElement, getElement, setInner, setClickListener, addToClass, setToClass, removeToClass, addToInner, setValue, appendChild,
} from './elementsHander';
// import { notification } from './dom_handler';

// PROJECT MANIPULATION HELPERS
export function projectSelected(index) {
  const project = projects[index];
  const hide = createElement('span', index, 'hide');
  const descriptionNode = getElement('desc-project');
  setInner(getElement('title-project'), project.name);
  setInner(descriptionNode, project.description);
  descriptionNode.appendChild(hide);
  setClickListener(getElement('delete-project'), deleteProject);
  setClickListener(getElement('edit-project'), editProject);
  isHighlited(index);
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
  const addButton = getElement('add-project');
  if (getElement('form-hide').classList.contains('hide')) {    
    addButton.disabled = false;
  }
  else {
    addButton.disabled = true;
  }
}

function cleanProjectForm() {
  setValue(getElement('new-project-name'), '');
  setValue(getElement('new-project-description'), '');
}

function toggleForm() {
  document.getElementById('form-hide').classList.toggle('hide');
  cleanProjectForm();
  disableAddP();
}

function dismissNotification() {
  addToClass(getElement('notification'), 'hide');
}

function setListener() {
  projects.forEach((elem, index) => {
    setClickListener(getElement(`project-n-${index}`), describeProject);
  });
}

function openNotification(text, nClass = 'is-success') {
  const notification = getElement('notification');
  setToClass(notification, `notification ${nClass}`);
  setInner(getElement('text-notification'), text);
}

export function renderProjects() {
  const listNode = getElement('projects-list');
  setInner(listNode, '');
  projects.forEach((elem, index) => {
    addToInner(listNode, `<li id="project-n-${index}">${elem.name}</li>`);
  });
  setListener();
}

export function addListenerToProjects() {
  setClickListener(getElement('add-project'), toggleForm);
  setClickListener(getElement('button-save-project'), saveProject);
  setClickListener(getElement('delete-form'), toggleForm);
  document.querySelector('.notification .delete').addEventListener('click', dismissNotification);
}

function isHighlited(i) {
  projects.forEach((elem, index) => {
    removeToClass(getElement(`project-n-${index}`), 'has-background-grey-light');
  });
  addToClass(getElement(`project-n-${i}`), 'has-background-grey-light');
}
// DOM MANIPULATION

// PROJECT MANIPULATION SECTION
function saveProject() {
  const name = getElement('new-project-name');
  const description = getElement('new-project-description');
  const titleNode = getElement('title-project');
  let indexProject = projects.length - 1;
  if (name.value != '') {
    if (titleNode.lastChild.classList) {
      indexProject = getElement('desc-project').lastChild.innerHTML;
      projects[indexProject].name = name.value;
      projects[indexProject].description = description.value;
      openNotification(`notificationProject <strong>'${name.value}'</strong> was edited succefully`, 'is-warning');
    } else {
      const project = new Project(name.value, description.value);
      projects.push(project);
      openNotification(`Project <strong>'${name.value}'</strong> was saved succefully`);
      indexProject += 1;
    }
    cleanProjectForm();
    renderProjects();
    projectSelected(indexProject);
    disableAddP();
    document.getElementById('add-project').disabled = false;
  } else {
    openNotification('The name can\'t be blank', 'is-warning');
  }
}

function editProject() {
  const hide = createElement('span', 'edit', 'hide');
  appendChild(getElement('title-project'), hide);
  const indx = getElement('desc-project').lastChild.innerHTML;
  const project = projects[indx];
  removeToClass(getElement('form-hide'), 'hide');
  getElement('new-project-name').value = project.name;
  getElement('new-project-description').value = project.description;
  disableAddP();
}

function deleteProject() {
  const indx = getElement('desc-project').lastChild.innerHTML;
  const { name } = projects[indx];
  if (projects.length > 1) {
    projects.splice(indx, 1);
  } else {
    projects[0] = new Project('My First Project', 'This is your first project, you can edit it! or add a to-do');
  }
  openNotification(`Project <strong>'${name}'</strong> was deleted succefully`, 'is-danger');
  renderProjects();
  projectSelected(0);
}
// PROJECT MANIPULATION SECTION
