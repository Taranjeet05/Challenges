
interface Item {
  id: string;       
  name: string;     
  quantity: number; 
  category: string; 
}

let inventory: Item[] = [];

function addItem(item: Item): void {
  const existingItem = inventory.find((i) => i.id === item.id);
  if (existingItem) {
    console.error(`Item with id ${item.id} already exists.`);
    return;
  }
  inventory.push(item);
}

function updateItemQuantity(id: string, quantity: number): void {
  const item = inventory.find((i) => i.id === id);
  if (!item) {
    console.error(`Item with id ${id} not found.`);
    return;
  }
  item.quantity = quantity;
}

function getItem(id: string): void {
  const item = inventory.find((i) => i.id === id);
  if (!item) {
    console.error(`Item with id ${id} not found.`);
    return;
  }
  console.log(item);
}

function filterItemsByCategory(category: string): Item[] {
  return inventory.filter((item) => item.category === category);
}


addItem({ id: "1", name: "Laptop", quantity: 10, category: "Electronics" });
addItem({ id: "2", name: "Keyboard", quantity: 15, category: "Electronics" });
addItem({ id: "3", name: "Coffee Mug", quantity: 50, category: "Kitchen" });

updateItemQuantity("2", 20);

getItem("2");

const electronics = filterItemsByCategory("Electronics");
console.log(electronics);
