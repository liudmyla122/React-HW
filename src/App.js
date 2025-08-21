import React from "react";
import Greeting from "./components/Greeting";
import ShoppingList from "./components/ShoppingList";
import OrderStatus from "./components/OrderStatus";

function App() {
  // Пример данных для компонентов
  const items = ["Молоко", "Хлеб", "Яблоки"]; // Массив товаров
  const emptyItems = []; // Для проверки пустого массива

  // Массив заказов
  const orders = [
    { orderId: 101, status: "в пути" },
    { orderId: 102, status: "доставлен" },
  ];

  return (
    <div>
      <Greeting name="Людмила!" />

      <ShoppingList items={items} />
      <ShoppingList items={emptyItems} />
      {orders.map((order) => (
        <OrderStatus
          key={order.orderId}
          orderId={order.orderId}
          status={order.status}
        />
      ))}
    </div>
  );
}

export default App;
