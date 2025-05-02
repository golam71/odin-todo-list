document.getElementById("submit").onclick = () => {
  console.log(4);
};

document.getElementById("close").onclick = () => {
  closeDialog();
  resetDialog();
};

function closeDialog() {
  document.getElementsByClassName("todo-container")[0].style.display = "block";
  document.getElementsByTagName("dialog")[0].open = false;
}
function openDialog() {
  document.getElementsByClassName("todo-container")[0].style.display = "none";
  document.getElementsByTagName("dialog")[0].open = true;
}

function resetDialog() {
  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
  document.getElementById("due-date").value = "";
  document.getElementById("priority").value = "low";
}

document.getElementById("add-todo").onclick = () => {
  resetDialog();
  openDialog();
};
