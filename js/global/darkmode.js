(function(){
    let nav = document.getElementById('nav');
    let sidebar = document.createElement('DIV');
    sidebar.className = 'sidebar-icon';
    sidebar.innerHTML = '<div><i class="fas fa-adjust"></i></div>';
    sidebar.onclick = function(){
        let html = document.getElementsByTagName('html')[0];
        let dataTheme = html.getAttribute('data-theme');
        let sidebarFlag = dataTheme === 'dark'?'light':'dark';
        sidebar.setAttribute('data-theme',sidebarFlag)
        html.setAttribute('data-theme',sidebarFlag)
        saveToLocal.set('theme', sidebarFlag, 2)
    };
    nav.appendChild(sidebar)

})()