class Project {
    constructor(name, description = null, todos = {}){
        this.name = name;
        this.description = description;
        this.todos = todos;
    }
}

export default Project;