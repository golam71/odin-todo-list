import "./styles/global.css";
import "./styles/nav.css";
import "./styles/dialog.css";
import "./styles/todo.css";

import "./scripts/dialog.js";
import "./scripts/todo.js";
import "./scripts/save.js";
import "./scripts/load.js";
import "./scripts/edit-delete.js";

import { loadData } from "./scripts/load.js";

function cleanSelection() {
  document.getElementsByClassName("active")[0].classList.toggle("active");
}

document.querySelector("nav").addEventListener("click", function (e) {
  if (e.target.closest("button") && e.target.closest("button").id) {
    let element = e.target.closest("button");
    // element.classList.add("active");
    cleanSelection();
    element.classList.toggle("active");
    document.getElementById("main-title").innerText = element.id;
    document.getElementById("todo-container").innerHTML = "";
    loadData();
  }
});
