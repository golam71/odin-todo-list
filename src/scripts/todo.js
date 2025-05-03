export class Todo {
  constructor(title, description, dueDate, priority) {
    if (!new.target) {
      throw new Error("Classes must be called with new");
    }
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

export function addTodoToDOM({ title, description, dueDate, priority }) {
  let todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  let todoTitle = document.createElement("p");
  todoTitle.classList.add("todo-title");
  todoTitle.textContent = title;

  let todoDescription = document.createElement("p");
  todoDescription.classList.add("todo-description");
  todoDescription.textContent = description;

  let todoDate = document.createElement("p");
  todoDate.classList.add("todo-date");
  todoDate.textContent = dueDate;

  let todoPriority = document.createElement("p");
  todoPriority.classList.add("todo-priority");
  todoPriority.textContent = priority;

  let todoBtnContainer = document.createElement("div");
  todoBtnContainer.classList.add("todo-btn-container");

  let todoEditButton = document.createElement("button");
  todoEditButton.id = "todo-edit";
  const editIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h6.525q.5 0 .75.313t.25.687t-.262.688T11.5 5H5v14h14v-6.525q0-.5.313-.75t.687-.25t.688.25t.312.75V19q0 .825-.587 1.413T19 21zm4-7v-2.425q0-.4.15-.763t.425-.637l8.6-8.6q.3-.3.675-.45t.75-.15q.4 0 .763.15t.662.45L22.425 3q.275.3.425.663T23 4.4t-.137.738t-.438.662l-8.6 8.6q-.275.275-.637.438t-.763.162H10q-.425 0-.712-.288T9 14m12.025-9.6l-1.4-1.4zM11 13h1.4l5.8-5.8l-.7-.7l-.725-.7L11 11.575zm6.5-6.5l-.725-.7zl.7.7z"/></svg>`;
  todoEditButton.innerHTML = editIcon;

  let todoDeleteButton = document.createElement("button");
  todoDeleteButton.id = "todo-delete";
  const deleteIcon = `<span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zm2-4h2V8H9zm4 0h2V8h-2z"/></svg></span>`;
  todoDeleteButton.innerHTML = deleteIcon;

  todoBtnContainer.append(todoEditButton, todoDeleteButton);

  todoDiv.append(
    todoTitle,
    todoDescription,
    todoDate,
    todoPriority,
    todoBtnContainer
  );

  let todoContainer = document.getElementById("todo-container");
  todoContainer.appendChild(todoDiv);
}

// Example usage:
addTodoToDOM({
  title: "Learn JavaScript",
  description: "Complete the JavaScript course on Odin Project",
  dueDate: "2023-10-01",
  priority: "High",
});
