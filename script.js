// This script controls the two-state hover interactions across all five cards.


// querySelectorAll grabs all cards at once, forEach applies the same interaction to each.
const cards = document.querySelectorAll(".card");
let timer;

cards.forEach(function(card) {
    const loader = card.querySelector(".card-loader");


    // mouseenter fires when cursor enters a card. Loader spins and a 3 second 
    // timer starts — if the user stays hovered, state 2 activates.
    card.addEventListener("mouseenter", function() {
        loader.classList.add("spinning");
        timer = setTimeout(function() {
            loader.classList.remove("spinning");
            card.classList.add("expanded");
        }, 3000); // 3000ms delay was a deliberate choice to avoid jarring transitions between states, going fo the slow cinematic feel.

    });

    // mouseleave cancels the timer and resets everything if the user leaves early.s
    card.addEventListener("mouseleave", function() {
        loader.classList.remove("spinning");
        clearTimeout(timer);
        card.classList.remove("expanded");
        card.style.backgroundImage = "";
    });
});