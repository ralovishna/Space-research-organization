const carouselImages = document.querySelector('.carousel-inside');
const images = document.querySelectorAll('.carousel-inside img');
let ci = 0, ct = 0;
const imageCount = images.length;
function change() {
    const offset = -ci * 400;
    carouselImages.style.transform = `translateX(${offset}px)`;
}
function nextImage() {
    ci = (ci + 1) % imageCount;
    change();
}
function prevImage() {
    ci = (ci - 1 + imageCount) % imageCount;
    change();
}
setInterval(nextImage, 2000);
const infoElements = document.querySelectorAll('.info');
const gradients = [
    "linear-gradient(to right,rgb(71, 7, 140),rgb(18, 68, 154))",
    "linear-gradient(to right,rgb(193, 44, 7),rgb(4, 135, 158))",
    "linear-gradient(to right,rgb(6, 136, 171),rgb(5, 77, 164))"
];
let currentGradientIndex = 0;
function changeGradientBackground() {
infoElements.forEach((element) => {
    element.style.background = gradients[currentGradientIndex];
    element.style.backgroundClip = "text";
    element.style.webkitBackgroundClip = "text";
    element.style.webkitTextFillColor = "transparent";
    element.style.borderRadius = "8px";
});
    currentGradientIndex = (currentGradientIndex + 1) % gradients.length;
}
setInterval(changeGradientBackground, 3000);
