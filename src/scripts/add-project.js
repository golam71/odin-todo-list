function addProject(name) {
  let button = document.createElement("button");
  button.id = name;

  let svgString = `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
          <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
              <rect width="6" height="6" x="3" y="5" rx="1"></rect>
              <path d="m3 17l2 2l4-4m4-9h8m-8 6h8m-8 6h8"></path>
          </g>
      </svg>
  `;
  let span = document.createElement("span");
  span.innerHTML = svgString;
  button.append(span);
  button.append(name);

  document.getElementById("project-container").appendChild(button);
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
  document.getElementById("inputid").remove();
};

let array = ["Inbox", "Important", "Long Term", "save"];

let projects = Object.keys(localStorage).filter((item) => {
  return !array.includes(item);
});

projects.forEach((project) => {
  addProject(project);
});
