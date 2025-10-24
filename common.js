document.addEventListener('DOMContentLoaded', () => {
    setMenuToggleEvListener();
    setAboutUsEvListener();
});

function setMenuToggleEvListener() {
    const menuToggle = document.getElementById('nav_menu_toggle');
    const mainHeaderContainer = document.getElementById('main_header_container');

    menuToggle.addEventListener('click', () => {
        mainHeaderContainer.classList.toggle('nav-collapsed');
        mainHeaderContainer.classList.toggle('nav-expanded');
    });
}

function setAboutUsEvListener() {
    const aboutUsItem = document.getElementById('about_us_item');
    const aboutUsDiv = document.getElementById('about_us_div');

    aboutUsDiv.addEventListener('click', () => {
        aboutUsItem.classList.toggle('collapsed');
        aboutUsItem.classList.toggle('expanded');
    });
}