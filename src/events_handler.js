import projects from './variables';
import Project from './classes/project';
import renderProjects from './dom_handler';

function toggleSavePRoject() {
  document.getElementById('project-save').classList.toggle('hide');
}

function saveProject() {
  const name = document.getElementById('new-project-name').value;
  const description = document.getElementById('new-project-description').value;

  const project = new Project(name, description);
  projects.push(project);
  renderProjects();
}

function addListenerToProjects() {
  document.getElementById('add-project').addEventListener('click', toggleSavePRoject);
  document.getElementById('button-save-project').addEventListener('click', saveProject);
}

export default { addListenerToProjects };