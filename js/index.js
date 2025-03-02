// // Seed data for the coffee items
// const coffeeData = [
//     { name: 'Cofee Brown', image: './img/c1.jpeg', price: 500 },
//     { name: 'Cofee Black', image: './img/c2.jpeg', price: 400 },
//     { name: 'Cofee Latte', image: './img/c3.jpeg', price: 600 },
//     { name: 'Cofee Mocha', image: './img/c4.jpeg', price: 700 },
//     { name: 'Cofee Americano', image: './img/c5.jpeg', price: 550 },
//     { name: 'Cofee Cappuccino', image: './img/c1.jpeg', price: 650 },
//     { name: 'Cofee Espresso', image: './img/c2.jpeg', price: 450 },
//     { name: 'Cofee Iced', image: './img/c3.jpeg', price: 500 }
// ];

// // Initialize cartItems from localStorage
// let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// // Function to populate the coffee menu
// const populateCoffeeMenu = () => {
//     const cofeeshopMenu = document.querySelector('.cofeeshopMenu');
//     cofeeshopMenu.innerHTML = ''; // Clear existing content

//     coffeeData.forEach(coffee => {
//         const card = document.createElement('div');
//         card.className = 'card';

//         card.innerHTML = `
//             <img class="cardImg" src="${coffee.image}" alt="${coffee.name}">
//             <div class="cardContent">
//                 <h4 class="cardTitle">${coffee.name}</h4>
//                 <p class="cardDescription">Beautiful coffee</p>
//                 <div class="price">₦${coffee.price}</div>
//                 <button class="add-to-cart" data-name="${coffee.name}" data-price="${coffee.price}">Add to Cart</button>
//             </div>
//         `;

//         cofeeshopMenu.appendChild(card);
//     });
// };

// // Function to add items to the cart
// const addToCart = (name, price) => {
//     const existingItem = cartItems.find(item => item.name === name);
//     if (existingItem) {
//         existingItem.quantity += 1;
//     } else {
//         cartItems.push({ name, price, quantity: 1 });
//     }

//     localStorage.setItem('cartItems', JSON.stringify(cartItems));
//     updateCart();
// };

// // Function to update the cart display
// const updateCart = () => {
//     const cartList = document.querySelector('.cart-modal ul');
//     cartList.innerHTML = ''; // Clear existing contents

//     let total = 0;

//     cartItems.forEach(item => {
//         const li = document.createElement('li');
//         li.innerHTML = `
//             <img src="${coffeeData.find(coffee => coffee.name === item.name).image}" alt="${item.name}" class="imageProducts">
//             <div>
//                 <p class="cart_item">${item.name}</p>
//                 <p class="cart_price">₦${item.price}</p>
//             </div>
//             <p class="cart_quantity">x${item.quantity}</p>
//             <span class="removeInternalItem" data-name="${item.name}">&times;</span>
//         `;

//         cartList.appendChild(li);
//         total += item.price * item.quantity;
//     });

//     const totalElement = document.querySelector('.cart-modal .total .price');
//     totalElement.textContent = `₦${total}`;

//     updateCartCount();
// };

// // Function to update the cart count
// const updateCartCount = () => {
//     const cartCount = document.querySelector('.cart_count');
//     cartCount.textContent = cartItems.reduce((total, item) => total + item.quantity, 0);
// };

// // Function to clear the cart
// const clearCart = () => {
//     cartItems = [];
//     localStorage.setItem('cartItems', JSON.stringify(cartItems));
//     updateCart();
//     updateCartCount();
// };

// // Event listener to add items from the home page to the cart
// document.addEventListener('click', (event) => {
//     if (event.target.classList.contains('add-to-cart')) {
//         const name = event.target.dataset.name;
//         const price = parseInt(event.target.dataset.price);
//         addToCart(name, price);
//     }

//     if (event.target.classList.contains('removeInternalItem')) {
//         const name = event.target.dataset.name;
//         cartItems = cartItems.filter(item => item.name !== name);
//         localStorage.setItem('cartItems', JSON.stringify(cartItems));
//         updateCart();
//         updateCartCount();
//     }

//     if (event.target.classList.contains('clear-cart')) {
//         clearCart();
//     }
// });

// // Initialize the cart count and cart display
// document.addEventListener('DOMContentLoaded', () => {
//     populateCoffeeMenu();
//     updateCartCount(); // Initialize the cart count
//     updateCart();
// });

// // JavaScript to control the login modal
// const modal = document.querySelector('.login-modal');
// const openModal = document.querySelector('.open-modal');
// const closeModal = document.querySelector('.close');

// openModal.addEventListener('click', (e) => {
//     e.preventDefault();
//     modal.style.display = 'block';
// });

// closeModal.addEventListener('click', () => {
//     modal.style.display = 'none';
// });

// // Close the modal when clicking outside of it
// window.onclick = (event) => {
//     if (event.target == modal) {
//         modal.style.display = 'none';
//     }
// };

// // JavaScript to control the cart modal
// const cartModal = document.querySelector('.cart-modal');
// const openCartModal = document.querySelector('.shopping_cart a');
// const closeCartModal = document.querySelector('.cart-modal .closeCart');

// openCartModal.addEventListener('click', (e) => {
//     e.preventDefault();
//     cartModal.style.display = 'block';
// });

// closeCartModal.addEventListener('click', () => {
//     cartModal.style.display = 'none';
// });

// // Close the cart modal when clicking outside of it
// window.onclick = (event) => {
//     if (event.target == cartModal) {
//         cartModal.style.display = 'none';
//     }
// };

// // Function to handle checkout
// const checkout = () => {
//     if (cartItems.length > 0) {
//         localStorage.setItem('checkoutItems', JSON.stringify(cartItems));
//         window.location.href = './pages/checkout.html';
//     } else {
//         alert("Your cart is empty. Please add items to proceed to checkout");
//     }
// };

// // Event listener for the clear button in the cart modal
// document.querySelector('.clear-cart').addEventListener('click', clearCart);

// // Checkout functionality
// document.querySelector('.checkout-cart').addEventListener('click', checkout);


//========================================================================

// // Seed data for the coffee items
const coffeeData = [
    { name: 'Cofee Brown', image: './img/c1.jpeg', price: 500 },
    { name: 'Cofee Black', image: './img/c2.jpeg', price: 400 },
    { name: 'Cofee Latte', image: './img/c3.jpeg', price: 600 },
    { name: 'Cofee Mocha', image: './img/c4.jpeg', price: 700 },
    { name: 'Cofee Americano', image: './img/c5.jpeg', price: 550 },
    { name: 'Cofee Cappuccino', image: './img/c1.jpeg', price: 650 },
    { name: 'Cofee Espresso', image: './img/c2.jpeg', price: 450 },
    { name: 'Cofee Iced', image: './img/c3.jpeg', price: 500 }
];

// Initialize cartItems from localStorage
let cartItems = JSON.parse(localStorage.getItem('checkoutItems')) || JSON.parse(localStorage.getItem('cartItems')) || [];

// Function to populate the coffee menu
const populateCoffeeMenu = () => {
    const cofeeshopMenu = document.querySelector('.cofeeshopMenu');
    cofeeshopMenu.innerHTML = ''; // Clear existing content

    coffeeData.forEach(coffee => {
        const card = document.createElement('div');
        card.className = 'card';

        card.innerHTML = `
            <img class="cardImg" src="${coffee.image}" alt="${coffee.name}">
            <div class="cardContent">
                <h4 class="cardTitle">${coffee.name}</h4>
                <p class="cardDescription">Beautiful coffee</p>
                <div class="price">₦${coffee.price}</div>
                <button class="add-to-cart" data-name="${coffee.name}" data-price="${coffee.price}">Add to Cart</button>
            </div>
        `;

        cofeeshopMenu.appendChild(card);
    });
};

// Function to add items to the cart
const addToCart = (name, price) => {
    const existingItem = cartItems.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cartItems.push({ name, price, quantity: 1 });
    }

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    updateCart();
};

// Function to update the cart display
const updateCart = () => {
    const cartList = document.querySelector('.cart-modal ul');
    cartList.innerHTML = ''; // Clear existing contents

    let total = 0;

    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
            <img src="${coffeeData.find(coffee => coffee.name === item.name).image}" alt="${item.name}" class="imageProducts">
            <div>
                <p class="cart_item">${item.name}</p>
                <p class="cart_price">₦${item.price}</p>
            </div>
            <p class="cart_quantity">x${item.quantity}</p>
            <span class="removeInternalItem" data-name="${item.name}">&times;</span>
        `;

        cartList.appendChild(li);

        total += item.price * item.quantity;
    });

    const totalElement = document.querySelector('.cart-modal .total .price');
    totalElement.textContent = `₦${total}`;

    updateCartCount();
};

// Function to update the cart count
const updateCartCount = () => {
    const cartCount = document.querySelector('.cart_count');
    cartCount.textContent = cartItems.reduce((total, item) => total + item.quantity, 0);
};

// Function to clear the cart
const clearCart = () => {
    cartItems = [];
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    updateCart();
    updateCartCount();
};

// Event listener to add items from the home page to the cart
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('add-to-cart')) {
        const name = event.target.dataset.name;
        const price = parseInt(event.target.dataset.price);
        addToCart(name, price);
    }

    if (event.target.classList.contains('removeInternalItem')) {
        const name = event.target.dataset.name;
        cartItems = cartItems.filter(item => item.name !== name);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        updateCart();
        updateCartCount();
    }

    if (event.target.classList.contains('clear-cart')) {
        clearCart();
    }
});

// Initialize the cart count and cart display
document.addEventListener('DOMContentLoaded', () => {
    cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    populateCoffeeMenu();
    updateCartCount(); // Initialize the cart count
    updateCart();
});

// JavaScript to control the login modal
const modal = document.querySelector('.login-modal');
const openModal = document.querySelector('.open-modal');
const closeModal = document.querySelector('.close');

openModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close the modal when clicking outside of it
window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};

// JavaScript to control the cart modal
const cartModal = document.querySelector('.cart-modal');
const openCartModal = document.querySelector('.shopping_cart a');
const closeCartModal = document.querySelector('.cart-modal .closeCart');

openCartModal.addEventListener('click', (e) => {
    e.preventDefault();
    cartModal.style.display = 'block';
});

closeCartModal.addEventListener('click', () => {
    cartModal.style.display = 'none';
});

// Close the cart modal when clicking outside of it
window.onclick = (event) => {
    if (event.target == cartModal) {
        cartModal.style.display = 'none';
    }
};

// Function to handle checkout
const checkout = () => {
    if (cartItems.length > 0) {
        localStorage.setItem('checkoutItems', JSON.stringify(cartItems));
        window.location.href = './pages/checkout.html';
    } else {
        alert("Your cart is empty. Please add items to proceed to checkout");
    }
};

// Event listener for the clear button in the cart modal
document.querySelector('.clear-cart').addEventListener('click', clearCart);

// Checkout functionality
document.querySelector('.checkout-cart').addEventListener('click', checkout);

