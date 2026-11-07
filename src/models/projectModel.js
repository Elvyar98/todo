class Project {
  constructor(name, isInbox = false) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.isInbox = isInbox;
    this.todos = [];
  }
}

export { Project };
