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


// closes the modal when an empty space within the web page is clicked 
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}


//== JavaScript to control the cart dropdown ==
const shoppingCart = document.querySelector('.shopping_cart');
const cartDropdown = document.querySelector('.cart_dropdown');

shoppingCart.addEventListener('click', (e) => {
    // Prevent the page from navigating to cart.html
    e.preventDefault();
    
    // Toggle the visibility of the cart dropdown
    cartDropdown.classList.toggle('show');
});

// Close the dropdown when clicking outside of it
document.addEventListener('click', (e) => {
    if (!shoppingCart.contains(e.target)) {
        cartDropdown.classList.remove('show');
    }
});