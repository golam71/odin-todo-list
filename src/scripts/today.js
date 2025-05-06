import { addTodoToDOM } from "./todo.js";

function today() {
  let array = [];

  Object.keys(localStorage).forEach((key) => {
    let keys = JSON.parse(localStorage.getItem(key));
    array = array.concat(keys);
  });

  const todayDate = new Date().toISOString().split("T")[0];

  const filtered = array.filter((item) => item.date === todayDate);
  document.getElementById("todo-container").innerHTML = "";
  filtered.forEach((item) => {
    addTodoToDOM(item);
  });
}

export { today };
