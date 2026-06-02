const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    menuBtn.textContent =
    navMenu.classList.contains("active")
    ? "✖"
    : "☰";
});
document
.querySelectorAll(".nav-links a")
.forEach(link => {
    link.addEventListener("click", () => {
        if(window.innerWidth < 1024){
            navMenu.classList.remove("active");
            menuBtn.textContent = "☰";
        }
    });
});
function revealSections(){
    const reveals =
    document.querySelectorAll(".reveal");
    reveals.forEach(section => {
        const top =
        section.getBoundingClientRect().top;

        const visible =
        window.innerHeight - 100;

        if(top < visible){

            section.classList.add("active");
        }

    });
}
window.addEventListener(
"scroll",
revealSections
);
revealSections();
window.addEventListener("scroll", () => {

    const header =
    document.querySelector("header");

    if(window.scrollY > 50){

        header.style.boxShadow =
        "0 4px 15px rgba(0,0,0,.2)";
    }else{
        header.style.boxShadow =
        "none";

    }

});
