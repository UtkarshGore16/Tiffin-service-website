document.getElementById("orderBtn").onclick = function() {
    document.getElementById("orderModal").style.display = "block";
  };
  
 
  function closeModal() {
    document.getElementById("orderModal").style.display = "none";
  }
  
  
  document.querySelector(".close").addEventListener("click", closeModal);
  window.onclick = function(event) {
    if (event.target == document.getElementById("orderModal")) {
      closeModal();
    }
  };
  document.getElementById('meal-time').addEventListener('change', function () {
    const priceDisplay = document.getElementById('priceDisplay');
    let priceText = 'Meal Price: --';
    switch (this.value) {
      case 'Breakfast':
        priceText = 'Meal Price: ₹50';
        break;
      case 'Lunch':
        priceText = 'Meal Price: ₹100';
        break;
      case 'Dinner':
        priceText = 'Meal Price: ₹150';
        break;
    }
    priceDisplay.textContent = priceText;
  });