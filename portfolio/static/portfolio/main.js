const slides = document.querySelectorAll(".slider-item");
const dotButtons = document.querySelectorAll(".carousel-dot");
const switchAudio = document.getElementById("switch-audio");

let activeFeaturedIdx = 0;
let isScrolling = false;

function debounce(func, delay) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func(...args);
        }, delay);
    };
}

function acrollActiveIntoView() {
    const lastScroll = { top: window.scrollY, left: window.scrollX };

    const element = document.getElementById(`site-${activeFeaturedIdx + 1}`);

    if (element) {
        element.scrollIntoView({
            behavior: "smooth",
            inline: "center",
            block: "nearest",
        });

        setTimeout(() => {
            isScrolling = false;
        }, 200);
    }
    window.scrollTo(lastScroll);
}

const debouncedScrollIntoView = debounce(acrollActiveIntoView, 200);

function playAudio() {
    switchAudio.volume = 0.2;
    switchAudio.currentTime = 0;
    switchAudio.play();
}

function switchSite() {
    isScrolling = true;

    const activeSite = document.querySelector(".slider-item.active");
    const activeDot = document.querySelector(".carousel-dot.active");
    if (activeSite && activeDot) {
        activeSite.classList.remove("active");
        activeSite.querySelectorAll(".site-button").forEach((button) => {
            button.setAttribute("tabindex", "-1");
        });
        activeDot.classList.remove("active");
    }

    const newActiveSite = document.getElementById(`site-${activeFeaturedIdx + 1}`);
    newActiveSite.classList.add("active");
    newActiveSite.querySelectorAll(".site-button").forEach((button) => {
        button.setAttribute("tabindex", "0");
    });
    document.getElementById(`carousel-dot-${activeFeaturedIdx + 1}`).classList.add("active");
    debouncedScrollIntoView();
    playAudio();
}

function navBack() {
    if (isScrolling) return;
    activeFeaturedIdx = activeFeaturedIdx > 0 ? activeFeaturedIdx - 1 : siteItemsLength - 1;
    switchSite();
}

function navForward() {
    if (isScrolling) return;
    activeFeaturedIdx = activeFeaturedIdx < siteItemsLength - 1 ? activeFeaturedIdx + 1 : 0;
    switchSite();
}

function handleDotButtonClick(button) {
    const buttonIdx = parseInt(button.dataset.idx);
    activeFeaturedIdx = buttonIdx;
    switchSite();
}

function setUpEventListeners() {
    document.getElementById("carousel-nav-back").addEventListener("click", () => navBack());
    document.getElementById("carousel-nav-forward").addEventListener("click", () => navForward());

    window.addEventListener("resize", debouncedScrollIntoView);

    dotButtons.forEach((button) => {
        button.addEventListener("click", () => handleDotButtonClick(button));
    });
}

function init() {
    setUpEventListeners();
    switchSite();
}

init();
