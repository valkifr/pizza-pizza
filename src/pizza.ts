let cashInRegister = 100;
let nextOrderId = 1;
let nextPizzaId = 1;

export const orderQueue: Order[] = [];
export const menu: Pizza[] = [
  { id: nextPizzaId++, name: 'Margherita', price: 8 },
  { id: nextPizzaId++, name: 'Pepperoni', price: 10 },
  { id: nextPizzaId++, name: 'Hawaiian', price: 10 },
  { id: nextPizzaId++, name: 'Veggie', price: 9 },
];

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





const menuBoard = document.querySelector('.menu') as HTMLDivElement;

menu.forEach((pizza) => {
    
    const menuItem = document.createElement('div');
    const menuName = document.createElement('p');
    const menuPrice = document.createElement('p');
    const menuButton = document.createElement('button');
    
    menuName.textContent = pizza.name;
    menuPrice.textContent = `${pizza.price}`;
    menuButton.textContent = 'Order';
    
    
    menuItem.appendChild(menuName);
    menuItem.appendChild(menuPrice);
    menuItem.appendChild(menuButton);
    menuBoard.appendChild(menuItem);

    console.log('hawk tuh')
});



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
