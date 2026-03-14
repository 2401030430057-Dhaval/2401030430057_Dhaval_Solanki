// Mobile navbar toggle
const navToggle = document.getElementById("navToggle");
const mobileMenu = document.getElementById("mobileMenu");

navToggle.addEventListener("click", () => {
    mobileMenu.style.display =
        mobileMenu.style.display === "flex" ? "none" : "flex";
});

// Smooth scroll buttons
document.querySelectorAll("[data-scroll]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const target = document.querySelector(btn.dataset.scroll);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Billing toggle
const billingButtons = document.querySelectorAll(".toggle-btn");
const priceAmounts = document.querySelectorAll(".price .amount");
const pricePeriods = document.querySelectorAll(".price .period");

billingButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        billingButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        const billingMode = btn.dataset.billing; // monthly or yearly
        priceAmounts.forEach((el) => {
            const value = el.getAttribute(`data-${billingMode}`);
            el.textContent = value;
        });

        pricePeriods.forEach((p) => {
            p.textContent = billingMode === "monthly" ? "/month" : "/month (billed yearly)";
        });
    });
});

// FAQ accordion
document.querySelectorAll(".faq-item").forEach((item) => {
    const question = item.querySelector(".faq-question");
    const icon = item.querySelector(".faq-icon");
    question.addEventListener("click", () => {
        const isActive = item.classList.contains("active");
        document.querySelectorAll(".faq-item").forEach((i) => {
            i.classList.remove("active");
            i.querySelector(".faq-icon").textContent = "+";
        });
        if (!isActive) {
            item.classList.add("active");
            icon.textContent = "−";
        }
    });
});

// Contact form fake submit
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    formStatus.textContent = "Thank you! We will get back to you shortly.";
    contactForm.reset();
});

// Modals (login / signup)
const openButtons = document.querySelectorAll("[data-open]");
const modals = document.querySelectorAll(".modal");

openButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const id = btn.dataset.open;
        document.getElementById(id).classList.add("open");
    });
});

document.querySelectorAll("[data-close]").forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.closest(".modal").classList.remove("open");
    });
});

// Close when clicking outside dialog
modals.forEach((modal) => {
    modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.classList.remove("open");
    });
});

// Switch between login and signup from links inside modals
document.querySelectorAll("[data-switch]").forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.dataset.switch;
        modals.forEach((m) => m.classList.remove("open"));
        document.getElementById(targetId).classList.add("open");
    });
});
