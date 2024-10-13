let cashInRegister = 100;
let nextOrderId = 1;
let nextPizzaId = 1;

type Pizza = {
  id: number;
  name: string;
  price: number;
};

type Order = {
  id: number;
  pizza: Pizza;
  status: 'ordered' | 'completed';
};

export const orderQueue: Order[] = [];
export const menu: Pizza[] = [
  { id: nextPizzaId++, name: 'Margherita', price: 8 },
  { id: nextPizzaId++, name: 'Pepperoni', price: 10 },
  { id: nextPizzaId++, name: 'Hawaiian', price: 10 },
  { id: nextPizzaId++, name: 'Veggie', price: 9 },
  { id: nextPizzaId++, name: 'Meat Lovers', price: 12 },
  { id: nextPizzaId++, name: 'Fruity', price: 7 },
  { id: nextPizzaId++, name: 'Vegan', price: 9 },
  { id: nextPizzaId++, name: 'Tuna', price: 13 },
  { id: nextPizzaId++, name: 'Tuna', price: 13 },
  { id: nextPizzaId++, name: 'Tuna', price: 13 },
  { id: nextPizzaId++, name: 'Tuna', price: 13 },
  { id: nextPizzaId++, name: 'Tuna', price: 13 },
  { id: nextPizzaId++, name: 'Tuna', price: 13 },
  { id: nextPizzaId++, name: 'Tuna', price: 13 },
  { id: nextPizzaId++, name: 'Tuna', price: 13 },
  { id: nextPizzaId++, name: 'Tuna', price: 13 },
];

// export function getPizzaDetail(identifier: string | number): Pizza | undefined {
//   if (typeof identifier === 'string') {
//     return menu.find((pizza) =>
//       pizza.name.toLowerCase() === identifier.toLowerCase()
//     );
//   } else if (typeof identifier === 'number') {
//     return menu.find((pizza) => pizza.id === identifier);
//   } else {
//     throw new TypeError(
//       'Parameter `identifier` must be either a string or a number',
//     );
//   }
// }

export function addNewPizza(pizzaObj: Pizza): Pizza {
  menu.push(pizzaObj);
  return pizzaObj;
}

export function placeOrder(pizza: Pizza): Order | undefined {
  const newOrder: Order = {
    id: nextOrderId++,
    pizza: pizza,
    status: 'ordered',
  };
  orderQueue.push(newOrder);
  cashInRegister += pizza.price;
  return newOrder;
}

console.log(menu);
console.log(orderQueue);

export function completeOrder(orderId: number): Order | undefined {
  const order = orderQueue.find((order) => order.id === orderId);
  if (!order) {
    console.error(`${orderId} was not found in the orderQueue`);
    return;
  }
  order.status = 'completed';
  return order;
}

function buttonHandler() {
  console.log('clicked');
}
const menuBoard = document.querySelector('.menu') as HTMLDivElement;

menu.forEach((pizza) => {
  const menuItem = document.createElement('div');
  const menuName = document.createElement('p');
  const menuPrice = document.createElement('p');
  const menuButton = document.createElement('button');

  menuName.textContent = pizza.name;
  menuPrice.textContent = `${pizza.price}`;
  menuButton.textContent = `Order (${pizza.price}$)`;
  menuButton.onclick = buttonHandler;
  menuItem.classList.add('menu-item');
  menuName.classList.add('menu-name');
  menuButton.classList.add('menu-button');

  menuItem.appendChild(menuName);
  menuItem.appendChild(menuButton);
  menuBoard.appendChild(menuItem);

  console.log('added menuitem');
});

const primaryHeader = document.querySelector('.menu-header') as HTMLDivElement;
const scrollWatcher = document.createElement('div');

scrollWatcher.setAttribute('data-scroll-watcher', '');
primaryHeader.before(scrollWatcher);

const navObserver = new IntersectionObserver(
  (entries) => {
    primaryHeader.classList.toggle('sticking', !entries[0].isIntersecting);
  },
);

navObserver.observe(scrollWatcher);

const iconNames: string[] = [
  'receipt_long',
  'oven',
  'new_releases',
  'star',
];
const sectionNames: string[] = [
  'Menu',
  'Orders',
  'Completed',
  'Settings',
];

const sidebarList = document.querySelector('.sidebar ul') as HTMLElement;

iconNames.forEach((iconName, index) => {
  const link = document.createElement('a');
  const icon = document.createElement('span');
  const name = document.createElement('p');
  const section = document.createElement('div');
  const padding = document.createElement('li');

  const sectionName: string = sectionNames[index];
  console.log(sectionName);

  padding.classList.add('sidebar-padding');
  section.classList.add('sidebar-section');
  icon.classList.add('material-symbols-outlined');

  icon.textContent = iconName;
  name.textContent = `${sectionName}`;

  section.appendChild(icon);
  section.appendChild(name);
  padding.appendChild(section);
  sidebarList.appendChild(padding);
});
