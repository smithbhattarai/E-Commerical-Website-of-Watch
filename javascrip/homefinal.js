//dinesh//
let currentIndex = 0;
  
function moveSlide(direction) {
    const reviews = document.querySelector('.review-wrapper');
    const totalReviews = document.querySelectorAll('.review').length;

    currentIndex += direction;

    // Wrap around if the index goes out of bounds
    if (currentIndex < 0) {
        currentIndex = totalReviews - 1;
    } else if (currentIndex >= totalReviews) {
        currentIndex = 0;
    }

    // Update the transform property to slide the reviews
    const offset = -currentIndex * 100; // Percentage offset
    reviews.style.transform = `translateX(${offset}%)`;

}

  // <!--contact us js code of home page-->//
  function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;
  
    if (name == "" || email == "" || phone == "" || message == "") {
      alert("All fields must be filled out");
      return false;
    }
    return true;
  }
  function myfunction2(){
    alert("Thankyou for Joining!!:)");
  }   
 
 

  
 
 //ujjwal//
 document.addEventListener('DOMContentLoaded', function () {
    // Get all add-to-cart buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Handle click on add to cart button
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            const productCard = this.closest('.product-card');
            const quantityInput = productCard.querySelector('.quantity');
            const quantity = parseInt(quantityInput.value) || 0;

            if (quantity > 0) {
                // Show popup for successful addition to cart
                showPopup(`Added ${quantity} of ${productCard.dataset.name} to cart.`);
            } else {
                // Show popup for invalid quantity
                showPopup('Please select at least 1 item to add to cart.');
            }
        });
    });

    // Show the popup
    function showPopup(message) {
        const popup = document.getElementById('popup');
        const popupMessage = document.getElementById('popup-message');
        popupMessage.textContent = message;
        popup.style.display = 'flex';

        const closeButton = document.getElementById('popup-close');
        closeButton.addEventListener('click', function () {
            popup.style.display = 'none';
        });
    }

    // Handle feedback form submission
    const feedbackForm = document.getElementById('feedback-form');
    feedbackForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const contact = document.getElementById('contact').value;
        const feedback = document.getElementById('feedback').value;

        if (name && contact && feedback) {
            // Show success message in popup
            showPopup(`Thank you , ${name}!`);
        } else {
            showPopup('Please fill out all fields in the feedback form.');
        }
    });
});
    

