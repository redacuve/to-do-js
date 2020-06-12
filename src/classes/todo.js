class Todo {
  constructor(title, description = null, date, priority = 'Medium') {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
  }
}

export default Todo;