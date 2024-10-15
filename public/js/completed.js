"use strict";
const iconNames = [
    'receipt_long',
    'oven',
    'new_releases',
    'settings',
];
const sectionNames = ['Menu', 'Orders', 'Completed', 'Settings'];
const links = [
    '/index.html',
    '/orders',
    './completed',
    '/settings',
];
const sidebarList = document.querySelector('.sidebar ul');
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
    section.id = `${sectionName.toLocaleLowerCase()}-${index}`;
    icon.textContent = iconName;
    name.textContent = `${sectionName}`;
    link.appendChild(icon);
    link.appendChild(name);
    section.appendChild(link);
    padding.appendChild(section);
    sidebarList.appendChild(padding);
});