import Project from './classes/project';
import addListenerToProjects from './events_handler';
import projects from './variables';
import renderProjects from './dom_handler';

const project1 = new Project('Work', 'Work description');
const project2 = new Project('Office', 'Office description');
projects.push(project1, project2);

renderProjects();
addListenerToProjects();
