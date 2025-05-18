function setDelFunc() {
  document.querySelectorAll(".delSvg").forEach((item) => {
    item.addEventListener("click", (e) => {
      let button = e.target.closest("button");
      if (button && button.id) {
        console.log(button.id);
        localStorage.removeItem(button.id);
        delete localStorage[button.id];
        button.remove();
        button.innerHTML = "";
      }
    });
  });
}

function addProject(name) {
  let button = document.createElement("button");
  button.style.display = "flex";
  button.style.gap = "10px";
  button.style.alignContent = "center";
  button.id = name;

  let svgString = `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
          <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
              <rect width="6" height="6" x="3" y="5" rx="1"></rect>
              <path d="m3 17l2 2l4-4m4-9h8m-8 6h8m-8 6h8"></path>
          </g>
      </svg>
  `;
  let delSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zm2-4h2V8H9zm4 0h2V8h-2z"></path></svg>`;

  let span = document.createElement("span");
  span.innerHTML = svgString;
  button.append(span);
  button.append(name);

  let span2 = document.createElement("span");
  span2.innerHTML = delSvg;
  span2.style.marginLeft = "auto";
  span2.classList.add("delSvg");
  button.append(span2);

  document.getElementById("project-container").appendChild(button);
}

function removeProject(name) {
  delete localStorage[name];
}

document.getElementById("Add Project").onclick = () => {
  let input = document.createElement("input");
  input.style.margin = "0px 0px";
  input.style.maxWidth = "235px";
  input.id = "inputid";
  document.getElementById("project-container").append(input);
  document.getElementById("Add Project").style.display = "none";
  document.getElementById("save").style.display = "block";
};

document.getElementById("save").onclick = () => {
  let projectName = document.getElementById("inputid").value;
  addProject(projectName);
  document.getElementById("save").style.display = "none";
  document.getElementById("Add Project").style.display = "block";
  let value = document.getElementById("inputid").value;
  document.getElementById("inputid").remove();
  console.log("value", value);
  document.getElementById("main-title").innerHTML = value;
  setDelFunc();
  document.getElementById("todo-container").innerHTML = "";
};

let array = ["Inbox", "Important", "Long Term", "save"];

let projects = Object.keys(localStorage).filter((item) => {
  return !array.includes(item);
});

projects.forEach((project) => {
  addProject(project);
});

setDelFunc();
