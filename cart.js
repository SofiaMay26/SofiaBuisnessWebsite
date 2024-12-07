 let cart = [];
 
 document.addEventListener('DOMContentLoaded', function () {
        // Retrieve cart data from localStorage
        const cartItem = JSON.parse(localStorage.getItem('cart'));
        const product = document.getElementById('productDisplay');
        const price = document.getElementById('priceDisplay');
        const size = document.getElementById('sizeDisplay');

        // Check if cart data exists
        if (cartItem) {
          document.getElementById('productDisplay').textContent =
            'Product: ' + cartItem.product;
          document.getElementById('priceDisplay').textContent =
            'Price: ₱' + cartItem.price;
            document.getElementById('sizeDisplay').textContent =
            'Size:' + cartItem.size;
        }
         else {
          document.getElementById('productDisplay').textContent =
            'Your cart is empty.';
        }

        if (cartItem) {
        // Add the selected size to the cart
        cart.push(cartItem);

        // Update the cart display
        document.getElementById('cartOutput').innerText = `Your Cart: ${cart
        .map(cartItem => `Product: ${cartItem.product}, Price: ${cartItem.price}, Size: ${cartItem.size}`)
        .join('\n')}`;
        }
      
      });

  


