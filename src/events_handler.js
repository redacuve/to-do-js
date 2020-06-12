import { projects } from './variables';
import Project from './classes/project';
import { renderProjects, notification, projectSelected } from './dom_handler';

function toggleSavePRoject() {
  const disable = document.getElementById('add-project').disabled;
  document.getElementById('form-hide').classList.toggle('hide');
  document.getElementById('add-project').disabled = !disable;
  document.getElementById('new-project-name').value = '';
  document.getElementById('new-project-description').value = '';
}

function saveProject() {
  const name = document.getElementById('new-project-name');
  const description = document.getElementById('new-project-description');

  const project = new Project(name.value, description.value);
  projects.push(project);
  name.value = '';
  description.value = '';
  document.body.innerHtml += notification(`the project ${name.value} was saved succefully`);
  renderProjects();
  toggleSavePRoject();
  projectSelected(projects.length - 1);
}

function dismissNotification() {
  const notContainer = document.getElementById('notification');
  notContainer.classList.add('hide');
}

export function addListenerToProjects() {
  document.getElementById('add-project').addEventListener('click', toggleSavePRoject);
  document.getElementById('button-save-project').addEventListener('click', saveProject);
  document.getElementById('delete-form').addEventListener('click', toggleSavePRoject);
}

export function addListenerToNotification() {
  document.querySelector('.notification .delete').addEventListener('click', dismissNotification);
}
