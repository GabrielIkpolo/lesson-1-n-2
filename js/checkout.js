// Retrieve items from localStorage
let checkoutItems = JSON.parse(localStorage.getItem('checkoutItems')) || [];
const coffeeData = [
    { name: 'Cofee Brown', image: '../img/c1.jpeg', price: 500 },
    { name: 'Cofee Black', image: '../img/c2.jpeg', price: 400 },
    { name: 'Cofee Latte', image: '../img/c3.jpeg', price: 600 },
    { name: 'Cofee Mocha', image: '../img/c4.jpeg', price: 700 },
    { name: 'Cofee Americano', image: '../img/c5.jpeg', price: 550 },
    { name: 'Cofee Cappuccino', image: '../img/c1.jpeg', price: 650 },
    { name: 'Cofee Espresso', image: '../img/c2.jpeg', price: 450 },
    { name: 'Cofee Iced', image: '../img/c3.jpeg', price: 500 }
];

const populateCheckout = () => {
    const checkoutList = document.querySelector('#checkout-list');
    checkoutList.innerHTML = ''; // Clear existing contents

    let total = 0;

    checkoutItems.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
            <img src="${coffeeData.find(coffee => coffee.name === item.name).image}" alt="${item.name}" class="imageProducts">
            <div>
                <p class="cart_item">${item.name}</p>
                <p class="cart_price">₦${item.price}</p>
            </div>
            <p class="cart_quantity">x${item.quantity}</p>
        `;

        checkoutList.appendChild(li);

        total += item.price * item.quantity;
    });

    const totalElement = document.querySelector('#checkout-total');
    totalElement.textContent = `₦${total}`;
};

const clearCart = () => {
    checkoutItems = [];
    localStorage.removeItem('checkoutItems');
    populateCheckout();
};

const proceedToPayment = () => {
    if (checkoutItems.length > 0) {
        // Here you can add the logic to proceed to the payment platform
        alert('Proceeding to payment...');
        // Example: Redirect to a payment gateway
        // window.location.href = 'https://example-payment-gateway.com';
    } else {
        alert('Your cart is empty. Please add items to proceed to checkout.');
    }
};

document.addEventListener('DOMContentLoaded', () => {
    populateCheckout();
});
