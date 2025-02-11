
  document.addEventListener("DOMContentLoaded", function () {
    const text = "Turning Ideas into Stunning Visuals, One Pixel at a Time 🔥";
    const heading = document.querySelector(".gradient-text");
    let index = 0;

    function type() {
      if (index < text.length) {
        heading.innerHTML = text.slice(0, index + 1); // Reveals one character at a time
        index++;
        setTimeout(type, 50); // Adjust typing speed here
      }
    }

    type();
  });

