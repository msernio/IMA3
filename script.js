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
        expandedTitle.textContent = card.dataset.title;
        expandedDirector.textContent = card.dataset.director;
        expandedSynopsis.textContent = card.dataset.synopsis;
        expandedCard.style.display = "block";
        }, 1500);
    });

    card.addEventListener("mouseleave", function() {
        clearTimeout(timer);
    });
});
