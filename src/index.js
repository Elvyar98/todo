import { todoApp } from "./todoApp.js";
import { SideBarView } from "./views/sideBarView.js";
import { SideBarPresenter } from "./presenters/sideBarPresenter.js";

todoApp.addProject("Home");
todoApp.addProject("Work");

SideBarPresenter(todoApp, SideBarView(), (key) => console.log("selected", key));
