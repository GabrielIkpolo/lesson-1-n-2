
function loadNav() {
    fetch('nav.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('body').insertAdjacentHTML('afterbegin', data);
        })
        .catch(error => console.error('Error loading navigation:', error));
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', loadNav);