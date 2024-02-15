
interface Address {
    city: string;
    country: string;
}

interface Customer {
    id: number;
    name: string;
    email: string;
    location: Address;
}

interface Order {
    orderId: number;
    customerId: number;
    product: string;
    quantity: number;
    price: number;
}

const customers: Customer[] = [
    { id: 1, name: "Bob", email: "bob@example.com", location:{ city: "London", country: "UK" } }
];

const orders: Order[] = [
    { orderId: 101, customerId: 1, product: 'Laptop', quantity: 1, price: 1200 },
    { orderId: 102, customerId: 2, product: 'Smartphone', quantity: 2, price: 800 },
    { orderId: 103, customerId: 3, product: 'Tablet', quantity: 1, price: 500 },
    { orderId: 104, customerId: 4, product: 'Headphones', quantity: 1, price: 100 },
    { orderId: 105, customerId: 5, product: 'Keyboard', quantity: 1, price: 50 },
    { orderId: 106, customerId: 6, product: 'Monitor', quantity: 1, price: 300 },
    { orderId: 107, customerId: 7, product: 'Mouse', quantity: 1, price: 20 },
    { orderId: 108, customerId: 8, product: 'Printer', quantity: 1, price: 150 },
    { orderId: 109, customerId: 9, product: 'External Hard Drive', quantity: 1, price: 200 },
    { orderId: 110, customerId: 10, product: 'Speakers', quantity: 1, price: 80 },
];

let mails: string[] = customers.map((customer: Customer) => customer.email);
console.log(mails);

let highOrder: Order[] = orders.filter((order: Order) => order.quantity * order.price > 1000);
console.log(highOrder);

let userAlice: Customer | undefined = customers.find((customer: Customer) => customer.name == 'Alice');
console.log(userAlice);

let specOrder: number = orders.findIndex((order: Order) => order.orderId == 102);
console.log(specOrder);

let americanOrder: boolean = customers.some((customer: Customer) => customer.location.country == 'USA');
console.log(americanOrder);

orders.forEach((order: Order) => {
    const customer: Customer | undefined = customers.find((c: Customer) => c.id === order.customerId);
    const orderSummary: string = `Order ${order.orderId} by ${customer?.name}: ${order.quantity} x ${order.product} for $${order.price} each.`;
    console.log(orderSummary);
});

let sortedCustomers: Customer[] = customers.sort((a: Customer, b: Customer) => {
    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
});

console.log(sortedCustomers);