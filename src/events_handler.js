import { projects, editTodo } from './variables';
import Project from './classes/project';
import {
  createElement,
  getElement,
  setInner,
  setClickListener,
  addToClass,
  setToClass,
  removeToClass,
  addToInner,
  setValue,
  appendChild,
} from './elementsHander';
import Todo from './classes/todo';

function isHighlited(i) {
  projects.forEach((elem, index) => {
    removeToClass(getElement(`project-n-${index}`), 'has-background-grey-light');
  });
  addToClass(getElement(`project-n-${i}`), 'has-background-grey-light');
}

function disableAddP() {
  const addButton = getElement('add-project');
  if (getElement('form-hide').classList.contains('hide')) {
    addButton.disabled = false;
  } else {
    addButton.disabled = true;
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

function openNotification(text, nClass = 'is-success') {
  const notification = getElement('notification');
  setToClass(notification, `notification ${nClass}`);
  setInner(getElement('text-notification'), text);
  window.scrollTo(0, 0);
}

function describeProject(e) {
  const index = String(e.target.id).match(/(\d+)/)[0];
  projectSelected(index);
  renderTodos();
}

function setListenerProject() {
  projects.forEach((elem, index) => {
    setClickListener(getElement(`project-n-${index}`), describeProject);
  });
}

export function renderProjects() {
  const listNode = getElement('projects-list');
  setInner(listNode, '');
  projects.forEach((elem, index) => {
    addToInner(listNode, `<li id="project-n-${index}">${elem.name}</li>`);
  });
  setListenerProject();
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
  localStorage.setItem('projects', JSON.stringify(projects));
}


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

// PROJECT MANIPULATION HELPERS
function todoCompleted(e) {
  const indx = getElement('desc-project').lastChild.innerHTML;
  const tdx = String(e.target.id).match(/(\d+)/)[0];
  const todo = projects[indx].todos[tdx];
  const completed = !todo.completed;
  todo.completed = completed;
  setInner(getElement('single-todo-complete'), todo.completed ? 'Completed' : 'Not Completed');
}

function setListenerTodos(todos) {
  todos.forEach((elem, indx) => {
    setClickListener(getElement(`todo-completed-${indx}`), todoCompleted);
    setClickListener(getElement(`todo-${indx}`), openTodo);
    setClickListener(getElement(`todo-delete-${indx}`), todoDelete);
    setClickListener(getElement(`todo-edit-${indx}`), todoEdit);
  });
}

function renderTodos() {
  const todoNode = getElement('list-of-todos');
  setInner(todoNode, '');
  const indx = getElement('desc-project').lastChild.innerHTML;
  const { todos } = projects[indx];
  addToClass(getElement('single-todo-container'), 'hide');
  todos.forEach((todo, indx) => {
    addToInner(todoNode, `
      <li class="todo-item">
        <a class="todo-name" id="todo-${indx}">${todo.title}</a>
        <span class="todo-desc">${todo.description}</span>
        <input type="checkbox" class="check-complete" id="todo-completed-${indx}" ${todo.completed ? 'checked' : ''}>
        <i class="fa-trash-alt" id="todo-delete-${indx}">&nbsp;</i>
        <i class="fa-edit" id="todo-edit-${indx}">&nbsp;</i>
      </li>
      `);
  });
  setListenerTodos(todos);
  editTodo[0] = false;
}

function todoDelete(e) {
  const indx = getElement('desc-project').lastChild.innerHTML;
  const tdx = String(e.target.id).match(/(\d+)/)[0];
  const { title } = projects[indx].todos[tdx];
  projects[indx].todos.splice(tdx, 1);
  openNotification(`Project <strong>'${title}'</strong> was deleted succefully`, 'is-danger');
  renderTodos();
  localStorage.setItem('projects', JSON.stringify(projects));
}

function todoEdit(e) {
  const indx = getElement('desc-project').lastChild.innerHTML;
  const tdx = String(e.target.id).match(/(\d+)/)[0];
  const todo = projects[indx].todos[tdx];
  toggleFormToDo();
  const title = getElement('new-todo-title');
  const description = getElement('new-todo-description');
  const date = getElement('new-todo-date');
  title.value = todo.title;
  description.value = todo.description;
  date.value = todo.date;
  getElement(`priority-${todo.priority}`).checked = true;
  editTodo[0] = true;
  editTodo[1] = tdx;
}

function openTodo(e) {
  const indx = getElement('desc-project').lastChild.innerHTML;
  const tdx = String(e.target.id).match(/(\d+)/)[0];
  const todo = projects[indx].todos[tdx];
  removeToClass(getElement('single-todo-container'), 'hide');
  setInner(getElement('single-todo-title'), todo.title);
  setInner(getElement('single-todo-description'), todo.description);
  setInner(getElement('single-todo-date'), todo.date);
  setInner(getElement('single-todo-priority'), todo.priority);
  setInner(getElement('single-todo-complete'), todo.completed ? 'Completed' : 'Not Completed');
}

function cleanTodosForm() {
  setValue(getElement('new-todo-title'), '');
  setValue(getElement('new-todo-description'), '');
  setValue(getElement('new-todo-date'), '');
  getElement('priority-low').checked = true;
}

function disableAddT() {
  const addButton = getElement('add-todo');
  if (getElement('todo-form').classList.contains('hide')) {
    addButton.disabled = false;
  } else {
    addButton.disabled = true;
  }
}

function toggleFormToDo() {
  document.getElementById('todo-form').classList.toggle('hide');
  cleanTodosForm();
  editTodo[0] = false;
  disableAddT();
}


export function firstProjectSelected() {
  projectSelected(0);
  renderTodos();
}
// PROJECT MANIPULATION HELPERS

// DOM MANIPULATION

function cleanProjectForm() {
  setValue(getElement('new-project-name'), '');
  setValue(getElement('new-project-description'), '');
}

function toggleFormProject() {
  document.getElementById('form-hide').classList.toggle('hide');
  cleanProjectForm();
  disableAddP();
}

function dismissNotification() {
  addToClass(getElement('notification'), 'hide');
}

function saveProject() {
  const name = getElement('new-project-name');
  const description = getElement('new-project-description');
  const titleNode = getElement('title-project');
  let indexProject = projects.length - 1;
  if (name.value !== '') {
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
  localStorage.setItem('projects', JSON.stringify(projects));
}

export function addListenerToProjects() {
  setClickListener(getElement('add-project'), toggleFormProject);
  setClickListener(getElement('button-save-project'), saveProject);
  setClickListener(getElement('delete-form'), toggleFormProject);
  document.querySelector('.notification .delete').addEventListener('click', dismissNotification);
}
// DOM MANIPULATION

// PROJECT MANIPULATION SECTION
// PROJECT MANIPULATION SECTION


// TODO MANIPULATION

function saveTodo() {
  const title = getElement('new-todo-title');
  const description = getElement('new-todo-description');
  const date = getElement('new-todo-date');
  const priority = document.querySelector('input[name="todo-priority"]:checked').id.replace(/priority-/g, '');
  if (title.value !== '') {
    if (editTodo[0]) {
      const indx = getElement('desc-project').lastChild.innerHTML;
      const tdx = editTodo[1];
      const todo = projects[indx].todos[tdx];
      todo.title = title.value;
      todo.description = description.value;
      todo.date = date.value;
      todo.priority = priority;
      openNotification(`To do  <strong>'${title.value}'</strong> was edited succefully `, 'is-warning');
    } else {
      const todo = new Todo(title.value, description.value, date.value, priority);
      const indx = getElement('desc-project').lastChild.innerHTML;
      projects[indx].todos.push(todo);
      openNotification(`To do  <strong>'${title.value}'</strong> was saved succefully`);
    }
    toggleFormToDo();
    renderTodos();
  } else {
    openNotification('To do <strong>title</strong> can\'t be blank', 'is-warning');
  }
  localStorage.setItem('projects', JSON.stringify(projects));
}

export function addListenerToToDos() {
  setClickListener(getElement('button-save-todo'), saveTodo);
  setClickListener(getElement('close-todo-form'), toggleFormToDo);
  setClickListener(getElement('add-todo'), toggleFormToDo);
}
// TODO MANIPULATION