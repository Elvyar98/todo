class Todo {
  constructor(title, description, date) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.description = description;
    this.date = new Date(date);
    this.project = null;
    this.isImportant = false;
    this.isDone = false;
  }
}

export { Todo };
