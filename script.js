// mobile menu toggle
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// close menu clicking link

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
    });
});

// sticky navbar shadow

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 4px 15px rgba(11, 140, 195, 0.2)";
    } else {
        navbar.style.boxShadow = "0 2px 10px rgba(188, 46, 89, 0.63)";
    }

});

// smooth scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// in animation

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show-item");

        }

    });

});

document.querySelectorAll(".card, .project-card, .why-box").forEach(item => {

    item.classList.add("hidden-item");

    observer.observe(item);

});const counters = document.querySelectorAll(".stat-box h2");

counters.forEach(counter => {
    const target = parseInt(counter.innerText);

    let count = 0;

    const update = () => {
        if (count < target) {
            count++;
            counter.innerText = count + "+";
            requestAnimationFrame(update);
        } else {
            counter.innerText = target + "+";
        }
    };

    update();
    


});