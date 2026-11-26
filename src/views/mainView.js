export function MainView() {
  const todoContainer = document.getElementById("card-container");

  function bindDelete(handler) {
    todoContainer.addEventListener("click", (e) => {
      const button = e.target.closest(".todo-delete");
      if (button) {
        handler(button.dataset.key, button.dataset.project);
      }
    });
  }

  function render(todos) {
    todoContainer.replaceChildren();
    if (todos) {
      for (const todo of todos) {
        const todoCard = document.createElement("div");
        todoCard.classList.add("todo-card");

        const name = document.createElement("h3");

        name.textContent = todo.title;

        const deletebtn = document.createElement("button");
        deletebtn.classList.add("todo-delete");
        deletebtn.textContent = "Delete";
        deletebtn.setAttribute("data-key", todo.id);
        deletebtn.setAttribute("data-project", todo.projectId);

        const date = document.createElement("p");
        date.textContent = todo.date.toLocaleDateString();

        todoCard.appendChild(name);
        todoCard.appendChild(date);
        todoCard.appendChild(deletebtn);

        todoContainer.appendChild(todoCard);
      }
    }
  }

  return { render, bindDelete };
}
