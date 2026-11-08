
// Mobile navigation

const menuBtn = document.getElementById("menuBtn");
const navigation = document.getElementById("navigation");

menuBtn.addEventListener("click", function() {
    navigation.classList.toggle("active");
});

// Close menu after clicking a link

document.querySelectorAll("#navigation a").forEach(link => {

    link.addEventListener("click", function() {
        navigation.classList.remove("active");
    });

});

// Current year

document.getElementById("year").textContent =
    new Date().getFullYear();

// Scroll progress bar

window.addEventListener("scroll", function() {

    const scrollTop = window.scrollY;

    const pageHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const percentage =
        pageHeight > 0 ? (scrollTop / pageHeight) * 100 : 0;

    document.getElementById("progress").style.width =
        percentage + "%";

});
