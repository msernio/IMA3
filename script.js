let timer;

card.addEventListener("mouseenter", function() {
    timer = setTimeout(function() {
        // trigger fullscreen
    }, 1500);
});

card.addEventListener("mouseleave", function() {
    clearTimeout(timer);
});