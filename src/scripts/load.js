import { addTodoToDOM } from "./todo.js";

export function loadData() {
  let data = localStorage[document.getElementById("main-title").innerText];
  if (data) {
    let jsonData = JSON.parse(data);
    jsonData.forEach((todo) => {
  
      addTodoToDOM(todo);
    });
  }
}

loadData();

function editData() {
  document.getElementById("todo-edit");
}
