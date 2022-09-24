const menuButton = document.getElementById('menuButton');
const menu = document.getElementById('menu');
const collapse = new Collapse(menu);

menuButton.addEventListener("click", () => collapse.toggle());