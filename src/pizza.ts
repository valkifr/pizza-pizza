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

