import Project from './classes/project';
import { addListenerToProjects, addListenerToNotification } from './events_handler';
import { projects } from './variables';
import { renderProjects, firstProjectSelected } from './dom_handler';

const project1 = new Project('My First Project', 'This is your first project, you can edit it! or add a to-do');
const project2 = new Project('Office', 'Office description');
projects.push(project1, project2);

renderProjects();
addListenerToProjects();
addListenerToNotification();
firstProjectSelected();