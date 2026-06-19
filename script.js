const cards = document.querySelectorAll(".card");
const expandedCard = document.querySelector("#expanded-card");
const expandedTitle = document.querySelector("#expanded-title");
const expandedDirector = document.querySelector("#expanded-director");
const expandedSynopsis = document.querySelector("#expanded-synopsis");
const closeBtn = document.querySelector("#close-btn");
let timer;

cards.forEach(function(card) {
    card.addEventListener("mouseenter", function() {
        timer = setTimeout(function() {
            card.classList.add("expanded");
        }, 1500);
    });

    card.addEventListener("mouseleave", function() {
        clearTimeout(timer);
        card.classList.remove("expanded");
        card.style.backgroundImage = "";

    });
});

document.addEventListener("click", function() {
    cards.forEach(function(card) {
        card.classList.remove("expanded");
    });
});
