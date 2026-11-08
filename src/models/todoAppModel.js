import { Project } from "./projectModel.js";

const todoApp = (() => {
  const projects = [];
  const inbox = new Project("Inbox", true);
  projects.push(inbox);

  function addProject(name) {
    const pro = new Project(name);
    projects.push(pro);
    return pro;
  }

  function getProjects() {
    const copy = projects.filter((element, i) => {
      if (i > 0) {
        return element;
      }
    });

    return copy;
  }

  function addTodo(todo, projectId) {
    if (projectId) {
      todo.projectId = projectId;
      for (const project of projects) {
        if (projectId == project.id) {
          project.todos.push(todo);
        }
      }
    } else {
      todo.projectId = inbox.id;
      inbox.todos.push(todo);
    }
  }

  function getProject(id) {
    return projects.find((project) => project.id === id);
  }

  function getAll() {
    let allTodos = [];
    for (const project of projects) {
      allTodos = allTodos.concat(project.todos);
    }

    return allTodos;
  }

  function getImportant() {
    return getAll().filter((todo) => todo.isImportant);
  }

  function getToday() {
    return getAll().filter(
      (todo) => todo.date.toDateString() === new Date().toDateString(),
    );
  }

  function getOverdue() {
    const start0fToday = new Date();
    start0fToday.setHours(0, 0, 0, 0);
    return getAll().filter(
      (todo) => todo.date.getTime() < start0fToday.getTime(),
    );
  }

  function deleteTodo(todoId, projectId) {
    const project = getProject(projectId);
    if (!project) return;
    project.todos = project.todos.filter((todo) => todo.id != todoId);
  }

  function deleteProject(id) {
    const index = projects.findIndex(
      (project) => !project.isInbox && project.id == id,
    );
    if (index != -1) projects.splice(index, 1);
  }

  return {
    getProjects,
    addProject,
    addTodo,
    getProject,
    getImportant,
    getToday,
    deleteTodo,
    deleteProject,
    getAll,
    getOverdue,
  };
})();

export { todoApp };
