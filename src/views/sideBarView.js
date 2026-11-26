export function SideBarView() {
  const permNavBar = document.getElementById("permanent");
  const tempNavBar = document.getElementById("temporary");

  function bindDelete(handler) {
    tempNavBar.addEventListener("click", (e) => {
      const button = e.target.closest(".project-delete");
      if (button) {
        e.stopImmediatePropagation();
        handler(button.dataset.key);
      }
    });
  }

  function bindSelect(handler) {
    permNavBar.addEventListener("click", (e) => {
      const button = e.target.closest(".project-button");
      if (button) {
        handler(button.dataset.key);
      }
    });

    tempNavBar.addEventListener("click", (e) => {
      const button = e.target.closest(".project-button");
      if (button) {
        handler(button.dataset.key);
      }
    });
  }

  function render(projects) {
    tempNavBar.replaceChildren();
    permNavBar.replaceChildren();

    const all = document.createElement("button");
    all.classList.add("project-button");
    all.setAttribute("data-key", "all");
    all.textContent = "All";

    const today = document.createElement("button");
    today.classList.add("project-button");
    today.setAttribute("data-key", "today");
    today.textContent = "Today";

    const important = document.createElement("button");
    important.classList.add("project-button");
    important.setAttribute("data-key", "important");
    important.textContent = "Important";

    const overdue = document.createElement("button");
    overdue.classList.add("project-button");
    overdue.setAttribute("data-key", "overdue");
    overdue.textContent = "Overdue";

    permNavBar.appendChild(all);
    permNavBar.appendChild(today);
    permNavBar.appendChild(important);
    permNavBar.appendChild(overdue);

    if (projects) {
      for (const project of projects) {
        const btn = document.createElement("button");
        btn.classList.add("project-button");

        const name = document.createElement("div");

        name.textContent = project.name;

        const xMark = document.createElement("div");
        xMark.classList.add("project-delete");
        xMark.setAttribute("data-key", project.id);

        xMark.textContent = "X";

        btn.appendChild(name);
        btn.appendChild(xMark);
        tempNavBar.appendChild(btn);
      }
    }
  }

  return { render, bindSelect, bindDelete };
}
