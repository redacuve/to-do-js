import Project from './classes/project';

let project1 = new Project("First project", "This is the first project")
let project2 = new Project("decond project", "This is the seconproject")
let projects = []
projects.push(project1, project2)
renderProjects();
function expandi(e){
    console.log(e)
}

function renderProjects(){
    const listNode = document.getElementById("projects-list")
    listNode.innerHTML = ""
    projects.forEach((elem, index)=> {
        listNode.innerHTML += `<li id="project-n-${index}">${elem.name}</li>`
        document.getElementById(`project-n-${index}`).addEventListener("click", expandi)
    })
}

function addProject(){
    const project = document.createElement("li")
    project.innerHTML = "Next PRoject"
    document.getElementById("projects-list").appendChild(project)
}

function toggleSavePRoject(){
    document.getElementById("project-save").classList.toggle("hide");
}

function saveProject(){
    const name = document.getElementById("new-project-name").value
    const description = document.getElementById("new-project-description").value
    // Create a Object Project and returning
    const project = new Project(name,description)
    projects.push(project)
    renderProjects()
}

document.getElementById('add-project').addEventListener("click", toggleSavePRoject)
document.getElementById('button-save-project').addEventListener("click",saveProject)