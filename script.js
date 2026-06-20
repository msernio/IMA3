const cards = document.querySelectorAll(".card");
let timer;

cards.forEach(function(card) {
    const loader = card.querySelector(".card-loader");

    card.addEventListener("mouseenter", function() {
        loader.classList.add("spinning");
        timer = setTimeout(function() {
            loader.classList.remove("spinning");
            card.classList.add("expanded");
        }, 3000);
    });

    card.addEventListener("mouseleave", function() {
        loader.classList.remove("spinning");
        clearTimeout(timer);
        card.classList.remove("expanded");
        card.style.backgroundImage = "";
    });
});