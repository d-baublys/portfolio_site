const sections = document.querySelectorAll(".split-section");

function activateSection(section) {
    if (!section.classList.contains("active")) {
        section.classList.add("active");
        section === sections[0]
            ? sections[1].classList.remove("active")
            : sections[0].classList.remove("active");
    }
}

function setUpEventListeners() {
    sections.forEach((section) => {
        section.addEventListener("click", () => activateSection(section));
    });
}

function init() {
    sections[0].classList.add("active");
    setUpEventListeners();
}

init();
