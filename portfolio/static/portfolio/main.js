const sections = document.querySelectorAll(".split-section");

function switchSection(section) {
    if (!section.classList.contains("active")) {
        activateSection(section);
    }
}

function activateSection(section) {
    section.classList.add("active");
    sectionButtons = section.querySelectorAll(".button");
    sectionButtons.forEach((button) => button.classList.add("active"));

    otherSection = sections[1 - Array.from(sections).indexOf(section)];
    otherSection.classList.remove("active");
    otherButtons = otherSection.querySelectorAll(".button");
    otherButtons.forEach((button) => button.classList.remove("active"));
}

function setUpEventListeners() {
    sections.forEach((section) => {
        section.addEventListener("click", () => switchSection(section));
    });
}

function init() {
    activateSection(sections[0]);
    setUpEventListeners();
}

init();
