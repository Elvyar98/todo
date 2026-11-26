export function MainPresenter(todoApp, view) {
  let currentKey = "all";
  function showView(key) {
    let todos;
    currentKey = key;

    if (key === "all") todos = todoApp.getAll();
    else if (key === "today") todos = todoApp.getToday();
    else if (key === "important") todos = todoApp.getImportant();
    else if (key === "overdue") todos = todoApp.getOverdue();
    else todos = todoApp.getProject(key).todos;

    console.log(todos);
  }

  return { showView };
}
