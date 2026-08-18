//mobile nav
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
    navToggle.addEventListener("click", () => {
        const isOpen = siteNav.classList.toggle("is-open");
        navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    siteNav.addEventListener("click", (event) => {
        if (event.target.matches("a") && window.innerWidth <= 900) {
            siteNav.classList.remove("is-open");
            navToggle.setAttribute("aria-expanded", "false");
        }
    });
}

//scroll animations
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15,
    }
);

revealElements.forEach((element) => {
    revealObserver.observe(element);
});