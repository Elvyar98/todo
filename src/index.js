import { todoApp } from "./todoApp.js";
import { SideBarView } from "./views/sideBarView.js";

window.todoApp = todoApp;
todoApp.addProject("fake");
todoApp.addProject("ass");
SideBarView().render(todoApp.getProjects());
