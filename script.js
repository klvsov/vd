document.addEventListener("DOMContentLoaded", () => {
    const card = document.querySelector(".card");
    const letter = document.querySelector(".valentines");
    const text = document.querySelector(".text");

    letter.addEventListener("click", (e) => {
        e.stopPropagation()
        console.log({card:card.classList})
        console.log({text:text.classList})
        card.classList.toggle('visible');
        text.classList.toggle('hidden');
    }, );
});
