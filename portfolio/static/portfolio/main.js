const sections = document.querySelectorAll(".split-section")

function toggleSection(element) {
    element.classList.toggle("active")
}

function setUpEventListeners() {
    sections.forEach((section) => {
        section.addEventListener("click", () => toggleSection(section))
    })
}

setUpEventListeners();