export function MainView() {
  const todoContainer = document.getElementById("card-container");

  function render(todos) {
    todoContainer.replaceChildren();
    if (todos) {
      for (const todo of todos) {
        const todoCard = document.createElement("div");
        todoCard.classList.add("todo-card");
        todoCard.setAttribute("data-key", todo.id);
        todoCard.setAttribute("data-project", todo.projectId);

        const name = document.createElement("h3");

        name.textContent = todo.title;

        const deletebtn = document.createElement("button");
        deletebtn.classList.add("todo-delete");
        deletebtn.textContent = "Delete";

        const date = document.createElement("p");
        date.textContent = todo.date.toLocaleDateString();

        todoCard.appendChild(name);
        todoCard.appendChild(date);
        todoCard.appendChild(deletebtn);

        todoContainer.appendChild(todoCard);
      }
    }
  }

  return { render };
}
