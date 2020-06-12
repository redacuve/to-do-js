// import { setListener } from './events_handler';
import { projects } from './variables';

function isSelected(i) {
  projects.forEach((elem, index) => {
    document
      .getElementById(`project-n-${index}`)
      .classList.remove('has-background-grey-light');
  });

  const row = document.getElementById(`project-n-${i}`);
  row.classList.add('has-background-grey-light');
}

function describeProject(e) {
  const index = e.target.id.substring(
    e.target.id.length - 1,
    e.target.id.length,
  );
  const project = projects[index];
  document.getElementById('title-project').innerHTML = project.name;
  document.getElementById('desc-project').innerHTML = project.description;
  isSelected(index);
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
