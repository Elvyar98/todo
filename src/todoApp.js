import { Project } from "./models/projectModel";
import { Todo } from "./models/todoModel";

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
    }

    projects[0].todos.push(todo);
  }

  return { getProjects, addProject, addTodo };
})();

export { todoApp };
