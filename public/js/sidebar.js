import { menu } from './pizza.js';
const primaryHeader = document.querySelector('.menu-header');
const scrollWatcher = document.createElement('div');
scrollWatcher.setAttribute('data-scroll-watcher', '');
primaryHeader.before(scrollWatcher);
const navObserver = new IntersectionObserver((entries) => {
    primaryHeader.classList.toggle('sticking', !entries[0].isIntersecting);
});
navObserver.observe(scrollWatcher);
const iconNames = ['receipt_long', 'oven', 'new_releases', 'settings',];
const sectionNames = ['Menu', 'Orders', 'Completed', 'Settings'];
const links = ['menu', 'orders', 'completed', 'settings',];
const sidebarList = document.querySelector('.sidebar ul');
const menuBoard = document.querySelector('.menu');
function sidebar() {
    iconNames.forEach((iconName, index) => {
        const link = document.createElement('a');
        const icon = document.createElement('span');
        const name = document.createElement('p');
        const section = document.createElement('div');
        const padding = document.createElement('li');
        const sectionName = sectionNames[index];
        const linkName = links[index];
        link.href = linkName;
        console.log(linkName);
        padding.classList.add('sidebar-padding');
        link.classList.add('sidebar-section');
        icon.classList.add('material-symbols-outlined');
        icon.textContent = iconName;
        name.textContent = `${sectionName}`;
        link.appendChild(icon);
        link.appendChild(name);
        section.appendChild(link);
        padding.appendChild(section);
        sidebarList.appendChild(padding);
    });
}
globalThis.onload = sidebar;
function menuPage() {
    menu.forEach((pizza) => {
        const menuItem = document.createElement('div');
        const menuName = document.createElement('p');
        const menuPrice = document.createElement('p');
        const menuButton = document.createElement('button');
        menuName.textContent = pizza.name;
        menuPrice.textContent = `${pizza.price}`;
        menuButton.textContent = `Order (${pizza.price}$)`;
        menuItem.classList.add('menu-item');
        menuName.classList.add('menu-name');
        menuButton.classList.add('menu-button');
        menuItem.appendChild(menuName);
        menuItem.appendChild(menuButton);
        menuBoard.appendChild(menuItem);
        console.log('added menuitem');
    });
}
function ordersPage() {
}
function completedPage() {
}
function settingsPage() {
}
