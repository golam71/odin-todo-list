document.getElementById("submit").onclick = () => {
  console.log(4);
};

document.getElementById("close").onclick = () => {
  closeDialog();
  resetDialog();
};

function closeDialog() {
  document.getElementsByTagName("dialog")[0].open = false;
}

function resetDialog() {
  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
  document.getElementById("due-date").value = "";
  document.getElementById("priority").value = "low";
}
