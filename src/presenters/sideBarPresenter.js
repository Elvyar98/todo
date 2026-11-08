export function SideBarPresenter(todoApp, view, onSelect) {
  const projects = todoApp.getProjects();
  view.render(projects);
}
