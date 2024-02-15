//Customer Data Management for an Online Store

const customers = [
    { id: 1,name: "Bob", email: "bob@example.com",location: {city: "London",country: "UK"}},
    { id: 3,name: "Charlie",email: "charlie@example.com",location: {city: "Paris",country: "France"}},
    { id: 4,name: "David",email: "david@example.com",location: {city: "Sydney",country: "Australia"}},
    { id: 5,name: "Emma",email: "emma@example.com",location: {city: "Berlin",country: "Germany"}},
    { id: 6,name: "Frank",email: "frank@example.com",location: {city: "Tokyo",country: "Japan"}},
    { id: 7,name: "Grace",email: "grace@example.com",location: {city: "Toronto",country: "Canada"}},
    { id: 8,name: "Henry",email: "henry@example.com",location: {city: "Madrid",country: "Spain"}},
    { id: 9,name: "Ivy",email: "ivy@example.com",location: {city: "Rome",country: "Italy"}},
    { id: 10,name: "Jack",email: "jack@example.com",location: {city: "Moscow",country: "Russia"}},
    { id: 2,name: "Alice",email: "alice@example.com",location: {city: "New York",country: "USA"}}
];



const orders = [
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
  

let mails = customers.map( ( customer => customer.email)  );
console.log(mails);


let highOrder = orders.filter( order => order.quantity * order.price > 1000 );
console.log(highOrder);


let userAlice = customers.find( (customer => customer.name =='Alice'  )  )
console.log(userAlice);


let specOrder = orders.findIndex( (order) => order.orderId ==102  );
console.log(specOrder);


let americanOrder = customers.some(  (customer) => customer.location.country == 'USA');
console.log(americanOrder);


orders.forEach(order => {
    const customer = customers.find(c => c.id === order.customerId);
    const orderSummary = `Order ${order.orderId} by ${customer.name}: ${order.quantity} x ${order.product} for $${order.price} each.`;
    console.log(orderSummary);
});


let sortedCustomers = customers.sort((a, b) => {
    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
});

console.log(sortedCustomers);
