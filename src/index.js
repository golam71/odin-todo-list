import "./styles/global.css";
import "./scripts/dialog.js";

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
  }
});
