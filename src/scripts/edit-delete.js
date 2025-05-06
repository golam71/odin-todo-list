import { saveData } from "./save.js";
import { openDialog } from "./dialog.js";

document.addEventListener("click", (e) => {
  const todoEdit = e.target.closest("#todo-edit");
  if (todoEdit) {
    let todo = todoEdit.closest("#todo");
    let title = todo.querySelector(".todo-title").innerText;
    let description = todo.querySelector(".todo-description").innerText;
    let date = todo.querySelector(".todo-date").innerText;
    let priority = todo.querySelector(".todo-priority").innerText;

    document.getElementById("title").value = title;
    document.getElementById("description").value = description;
    document.getElementById("due-date").value = date;
    document.getElementById("priority").value = priority;

    openDialog();
    todoEdit.closest("#todo").remove();
  }
});

document.addEventListener("click", (e) => {
  const todoEdit = e.target.closest("#todo-delete");
  if (todoEdit) {
    todoEdit.closest("#todo").remove();
  }
  saveData();
});
