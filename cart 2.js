// Selectors
const cartItems = document.querySelectorAll('.cart-item');
const subtotalElement = document.querySelector('.subtotal');
const totalElement = document.querySelector('.total');

// Update Subtotal and Total
function updateCart() {
    let subtotal = 0;
    const cartItems = document.querySelectorAll('.cart-item');

    cartItems.forEach((item) => {
        const price = parseFloat(item.querySelector('.price').textContent.replace('RM', '').trim());
        const quantity = parseInt(item.querySelector('.quantity span').textContent);
        const totalPriceElement = item.querySelector('.total-price');

        const totalPrice = (price * quantity).toFixed(2);
        totalPriceElement.textContent = `RM ${totalPrice}`;
        subtotal += parseFloat(totalPrice);
    });   

   subtotalElement.textContent = `RM ${subtotal.toFixed(2)}`;
    totalElement.textContent = `RM ${subtotal.toFixed(2)}`;
   if (cartItems.length === 0) {
        subtotalElement.textContent = `RM 0.00`;
        totalElement.textContent = `RM 0.00`;
    }
}

document.querySelectorAll('.cart-item').forEach((item) => {
    const incrementButton = item.querySelector('.increment');
    const decrementButton = item.querySelector('.decrement');
    const quantityElement = item.querySelector('.quantity span');

    incrementButton.addEventListener('click', () => {
        quantityElement.textContent = parseInt(quantityElement.textContent) + 1;
        updateCart();
    });

    decrementButton.addEventListener('click', () => {
        if (parseInt(quantityElement.textContent) > 1) {
            quantityElement.textContent = parseInt(quantityElement.textContent) - 1;
            updateCart();
        }
    });

    // Remove Item
    const removeButton = item.querySelector('.remove-item');
    removeButton.addEventListener('click', () => {
        item.remove();
        updateCart();
    });
});

// Initial Cart Update
updateCart();