import { loadData } from "./load.js";
export function saveData() {
  let list = [];
  let pageTitle = document.getElementById("main-title").innerText;
  document.querySelectorAll(".todo").forEach((todo) => {
    let title = todo.querySelector(".todo-title").innerText;
    let description = todo.querySelector(".todo-description").innerText;
    let date = todo.querySelector(".todo-date").innerText;
    let priority = todo.querySelector(".todo-priority").innerText;
    list.push({ title, description, date, priority });
  });

  // Sort the list by date (or any other property)
  list.sort((a, b) => new Date(a.date) - new Date(b.date));

  localStorage.setItem(`${pageTitle}`, JSON.stringify(list));
  document.getElementById("todo-container").innerHTML = "";
  loadData();
}
