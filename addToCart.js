let form = document.getElementById('form'); // Reference the form element
let cart = [];

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    // Retrieve form values
    let product = document.getElementById('product').textContent;
    let price = document.getElementById('price').textContent;


     const sizes = document.getElementsByName('size');
    let selectedSize = '';
    for (let size of sizes) {
        if (size.checked) {
            selectedSize = size.value;
            break;
        }
    }

    
    if(!selectedSize){
        alert('Please select a size before adding to cart.');
        return;
    }


    // Create a cart object with the form data
    let cartItem = {
        product: product,
        price: price,
        size: selectedSize
    };

    // Save the cart data to localStorage (convert to JSON string)
    localStorage.setItem('cart', JSON.stringify(cartItem));

    // Redirect to the cart page
    window.location.href = "cart.html"; // Replace with the actual page URL
});

      
      




