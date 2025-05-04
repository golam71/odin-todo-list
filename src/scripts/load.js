import { addTodoToDOM } from "./todo.js";

let data = localStorage[document.getElementById("main-title").innerText];
if (data) {
  let jsonData = JSON.parse(data);
  jsonData.forEach((todo) => {
    addTodoToDOM(todo);
  });
}
