import './style.css';
import Project from './classes/project';
import {
  addListenerToProjects, addListenerToToDos, firstProjectSelected, renderProjects,
} from './events_handler';
import { projects } from './variables';

const project1 = new Project('My First Project', 'This is your first project, you can edit it! or add a to-do');
const project2 = new Project('Office', 'Office description');

if (!localStorage.getItem('projects')) {
  const arr = [];
  arr.push(project1, project2);
  localStorage.setItem('projects', JSON.stringify(arr));
}
(JSON.parse(localStorage.getItem('projects'))).forEach(elem => {
  projects.push(elem);
});


renderProjects();
addListenerToProjects();
addListenerToToDos();
firstProjectSelected();