import { saveData } from "./save.js";
import { openDialog } from "./dialog.js";
import { addTodoToDOM } from "./todo.js";

let editingTodo = null;

export function initializeDeleteButtons() {
  document.querySelectorAll("#todo-delete").forEach((deleteButton) => {
    deleteButton.onclick = (e) => {
      let todo = e.target.closest("#todo");
      todo.remove();
      saveData();
    };
  });
}

export function initializeEditButtons() {
  document.querySelectorAll("#todo-edit").forEach((editButton) => {
    editButton.onclick = (e) => {
      editingTodo = e.target.closest("#todo");

      let title = editingTodo.querySelector(".todo-title").innerText;
      let description =
        editingTodo.querySelector(".todo-description").innerText;
      let date = editingTodo.querySelector(".todo-date").innerText;
      let priority = editingTodo.querySelector(".todo-priority").innerText;

      document.getElementById("title").value = title;
      document.getElementById("description").value = description;
      document.getElementById("due-date").value = date;
      document.getElementById("priority").value = priority;

      openDialog();
    };
  });
}

initializeDeleteButtons();
initializeEditButtons();

function submitDialogData() {
  return {
    title: document.getElementById("title").value,
    description: document.getElementById("description").value,
    dueDate: document.getElementById("due-date").value,
    priority: document.getElementById("priority").value,
  };
}

document.getElementById("submit").onclick = () => {
  const data = submitDialogData();

  if (editingTodo) {
    editingTodo.querySelector(".todo-title").innerText = data.title;
    editingTodo.querySelector(".todo-description").innerText = data.description;
    editingTodo.querySelector(".todo-date").innerText = data.dueDate;
    editingTodo.querySelector(".todo-priority").innerText = data.priority;
    editingTodo = null;
  } else {
    addTodoToDOM(data);
  }

  saveData();
  resetDialog();
  closeDialog();
};

document.getElementById("close").onclick = () => {
  closeDialog();
  resetDialog();
};

document.getElementById("add-todo").onclick = () => {
  editingTodo = null;
  resetDialog();
  openDialog();
};

function closeDialog() {
  document.getElementsByClassName("todo-container")[0].style.display = "block";
  document.querySelector("dialog").close();
}

function resetDialog() {
  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
  document.getElementById("due-date").value = "";
  document.getElementById("priority").value = "Low";
}
