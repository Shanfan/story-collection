const contentWrapper = document.querySelector("#content-wrapper");
const titleSection = document.querySelector("#title-section");

const viewportHeight = window.innerHeight;
const contentHeight = contentWrapper.offsetHeight; // the length of the entire comic


titleSection.addEventListener('scroll', () => {
    const scrollPosition = titleSection.scrollTop / (titleSection.querySelector('div').offsetHeight - titleSection.offsetHeight);

    titleSection.style.setProperty('--scroll-local', scrollPosition);

}, false)