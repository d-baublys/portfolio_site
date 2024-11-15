const sections = document.querySelectorAll(".split-section");

function switchSection(section) {
    if (!section.classList.contains("active")) {
        activateSection(section);
    }
}

function keySectionSwitch(event, section) {
    if (event.key === "Enter") {
        switchSection(section);
    }
}

function activateSection(section) {
    section.classList.add("active");
    sectionButtons = section.querySelectorAll(".button");
    sectionButtons.forEach((button) => enableButton(button));

    otherSection = sections[1 - Array.from(sections).indexOf(section)];
    otherSection.classList.remove("active");
    otherButtons = otherSection.querySelectorAll(".button");
    otherButtons.forEach((button) => disableButton(button));
}

function enableButton(button) {
    button.classList.add("active");
    button.tabIndex = 0;
}

function disableButton(button) {
    button.classList.remove("active");
    button.tabIndex = -1;
}

function setUpEventListeners() {
    sections.forEach((section) => {
        section.addEventListener("click", () => switchSection(section));
        section.addEventListener("keydown", (event) => keySectionSwitch(event, section));
    });
}

function init() {
    activateSection(sections[0]);
    setUpEventListeners();
}

init();
