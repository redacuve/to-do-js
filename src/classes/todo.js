class Todo {
  constructor(title, description = null, date, priority = 'low', completed = false) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
    this.completed = completed;
  }

  setCompleted() {
    this.completed = true;
  }
}

export default Todo;