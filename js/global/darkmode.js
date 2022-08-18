(function () {
//   let nav = document.getElementById("nav");
//   let sidebar = document.createElement("DIV");
//   sidebar.className = "sidebar-icon";
//   sidebar.innerHTML = '<div><i class="fas fa-adjust"></i></div>';
   let html = document.getElementsByTagName("html")[0];
let darkmodeCopy = document.getElementById('darkmodeCopy')
  darkmodeCopy.onclick = function () {
    let dataTheme = html.getAttribute("data-theme");
    let sidebarFlag = dataTheme === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", sidebarFlag);
    saveToLocal.set("theme", sidebarFlag, 2);
  };
//   nav.appendChild(sidebar);


})();
