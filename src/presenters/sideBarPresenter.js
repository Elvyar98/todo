export function SideBarPresenter(todoApp, view, onSelect, onDelete) {
  function deleteHandler(id) {
    todoApp.deleteProject(id);
    view.render(todoApp.getProjects());
    onDelete(id);
  }
  const projects = todoApp.getProjects();
  view.render(projects);
  view.bindDelete(deleteHandler);
  view.bindSelect(onSelect);

  return { deleteHandler };
}
