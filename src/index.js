import { todoApp } from "./todoApp.js";
import { SideBarView } from "./views/sideBarView.js";
import { SideBarPresenter } from "./presenters/sideBarPresenter.js";
import { MainPresenter } from "./presenters/mainPresenter.js";
import { Todo } from "./models/todoModel.js";
import { MainView } from "./views/mainView.js";

todoApp.addProject("Home");
todoApp.addProject("Work");
const mainPresenter = MainPresenter(todoApp, MainView());
const p = todoApp.addProject("First");
const t = new Todo("First todo", "b");
t.date = new Date();
t.isImportant = true;
todoApp.addTodo(t, p.id);

SideBarPresenter(
  todoApp,
  SideBarView(),
  (key) => mainPresenter.showView(key),
  () => mainPresenter.showView("all"),
);
mainPresenter.showView("all");
