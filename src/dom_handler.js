import { setListener } from './events_handler';
import { projects } from './variables';

export function renderProjects() {
  const listNode = document.getElementById('projects-list');
  listNode.innerHTML = '';
  projects.forEach((elem, index) => {
    listNode.innerHTML += `<li id="project-n-${index}">${elem.name}</li>`;
  });
  setListener();
}