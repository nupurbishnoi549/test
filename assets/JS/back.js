const mybutton = document.querySelector(".top-btn");
const heroSection = document.getElementById("hero");
window.addEventListener("scroll", () => {
    mybutton.classList.toggle("hidden", window.scrollY <= heroSection.offsetHeight);
});
mybutton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});