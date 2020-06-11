import { projects } from './variables';
import Project from './classes/project';
import { renderProjects, notification } from './dom_handler';

function toggleSavePRoject() {
  document.getElementById('project-save').classList.toggle('hide');
  // document.getElementById('new-project-name').value = '';
  // document.getElementById('new-project-description').value = '';
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
}

function dismissNotification() {
  const notContainer = document.getElementById('notification');
  notContainer.classList.add('hide');
}

export function addListenerToProjects() {
  document.getElementById('add-project').addEventListener('click', toggleSavePRoject);
  document.getElementById('button-save-project').addEventListener('click', saveProject);
  // document.getElementById('delete-form').addEventListener('click', toggleSavePRoject);
}

export function addListenerToNotification() {
  document.querySelector('.notification .delete').addEventListener('click', dismissNotification);
}
