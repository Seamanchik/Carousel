const slides = document.querySelectorAll(".slide");

for (const slide of slides) { // первый способ цикла
    slide.addEventListener('click', () => {
        clearActiveClasses();
        slide.classList.add('active');
    });
}

function clearActiveClasses() { // второй способ цикла
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
}