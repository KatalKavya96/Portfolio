document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".carousel-card");
    
    // Delayed activation for each card in the skills carousel
    setTimeout(() => {
      cards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add("active");
        }, index * 200); // Add delay between cards
      });
    }, 1000); // Delay before starting the animation sequence
  });
  