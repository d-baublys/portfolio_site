const sections = document.querySelectorAll(".split-section");
const switchAudio = document.getElementById("switch-audio");

function switchSection(section) {
    if (!section.classList.contains("active")) {
        activateSection(section);
        playAudio();
    }
}

function keySectionSwitch(event, section) {
    if (event.key === "Enter") {
        switchSection(section);
    }
}

function activateSection(section) {
    deactivateOtherActive();
    section.classList.add("active");
    toggleButtons(section.querySelectorAll(".button"), true);
}

function deactivateOtherActive() {
    const activeSection = document.querySelector(".active");
    if (activeSection) {
        activeSection.classList.remove("active");
        toggleButtons(activeSection.querySelectorAll(".button"), false);
    }
}

function toggleButtons(buttons, isEnabled) {
    buttons.forEach((button) => {
        button.classList.toggle("active", isEnabled);
        button.tabIndex = isEnabled ? 0 : -1;
    });
}

function playAudio() {
    switchAudio.volume = 0.2;
    switchAudio.currentTime = 0;
    switchAudio.play();
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
