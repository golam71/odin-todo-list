import { addTodoToDOM } from "./todo.js";
import { saveData } from "./save.js";

function submitDialogData() {
  return {
    title: document.getElementById("title").value,
    description: document.getElementById("description").value,
    dueDate: document.getElementById("due-date").value,
    priority: document.getElementById("priority").value,
  };
}

document.getElementById("submit").onclick = () => {
  addTodoToDOM(submitDialogData());
  saveData();
  resetDialog();
  closeDialog();
};

document.getElementById("close").onclick = () => {
  closeDialog();
  resetDialog();
};

function closeDialog() {
  document.getElementsByClassName("todo-container")[0].style.display = "block";
  document.querySelector("dialog").close();
}
function openDialog() {
  document.getElementsByClassName("todo-container")[0].style.display = "none";
  document.querySelector("dialog").showModal();
}

function resetDialog() {
  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
  document.getElementById("due-date").value = "";
  document.getElementById("priority").value = "Low";
}

document.getElementById("add-todo").onclick = () => {
  resetDialog();
  openDialog();
};
