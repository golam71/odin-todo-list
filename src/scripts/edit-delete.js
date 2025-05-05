import { saveData } from "./save.js";
import { openDialog } from "./dialog.js";

document.querySelectorAll("#todo-delete").forEach((deleteButton) => {
  deleteButton.onclick = (e) => {
    let todo = e.target.closest("#todo");
    todo.remove();
    saveData();
  };
});

document.querySelectorAll("#todo-edit").forEach((editButton) => {
  editButton.onclick = (e) => {
    let todo = e.target.closest("#todo");
    let title = todo.querySelector(".todo-title").innerText;
    let description = todo.querySelector(".todo-description").innerText;
    let date = todo.querySelector(".todo-date").innerText;
    let priority = todo.querySelector(".todo-priority").innerText;

    document.getElementById("title").value = title;
    document.getElementById("description").value = description;
    document.getElementById("due-date").value = date;
    document.getElementById("priority").value = priority;

    document.getElementById("submit").
    openDialog();
    // saveData();
  };
});
