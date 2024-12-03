// Initialize cart and total price
let cart = [];
let total = 0;

// Reference elements
const cartList = document.getElementById('cart');
const cartTotal = document.getElementById('cartTotal');
const addToCartButton = document.getElementById('addToCart');



// Function to update the cart display
function updateCart() {
    // Clear the cart list
    cartList.innerHTML = '';

    // Add each item to the cart display
    cart.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price}`;
        cartList.appendChild(listItem);

        // Add a remove button for each item
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeFromCart(index);
        listItem.appendChild(removeButton);
    });

    // Update the total price
    cartTotal.textContent = `Total: $${total.toFixed(2)}`;

    saveCartToLocalStorage();
}

// Function to add an item to the cart
function addToCart(product) {
    cart.push(product);
    total += product.price;
    updateCart();
}

// Function to remove an item from the cart
function removeFromCart(index) {
    total -= cart[index].price;
    cart.splice(index, 1);
    updateCart();
}

// Add event listener for the "Add to Cart" button
addToCartButton.addEventListener('click', () => {
    const product = { name: 'Product Name', price: 20 };
    addToCart(product);
});




