document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");
    const card = document.querySelector(".card");
    const body = document.querySelector("body");
    const text = document.querySelector(".text");

    container.addEventListener("mouseenter", () => {
        card.style.transition = "top 0.5s";
        card.style.top = "-90px";
        text.style.transition = "opacity 0.5s";
        text.style.opacity = 1
    });

    container.addEventListener("mouseleave", () => {
        card.style.transition = "top 0.5s";
        card.style.top = "0";
        text.style.transition = "opacity 0.5s";
        text.style.opacity = 0
    });

    container.addEventListener("click", () => {
        card.style.transition = "top 0.5s";
        card.style.top = "-90px";
        text.style.transition = "opacity 0.5s";
        text.style.opacity = 1
    }, );

    body.addEventListener("click", () => {
        card.style.transition = "top 0.5s";
        card.style.top = "0";
        text.style.transition = "opacity 0.5s";
        text.style.opacity = 0
    }, true);
});
