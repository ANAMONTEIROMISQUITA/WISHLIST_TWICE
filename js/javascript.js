// =======================
// TILT 3D DOS CARDS
// =======================

document.querySelectorAll(".card").forEach(card => {
    const inner = card.querySelector(".card-inner");

    card.addEventListener("mousemove", e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; 
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * 8; 
        const rotateY = ((x - centerX) / centerX) * 8;

        inner.style.transform = `
            rotateX(${-rotateX}deg) 
            rotateY(${rotateY}deg)
            scale(1.05)
        `;
    });

    card.addEventListener("mouseleave", () => {
        inner.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    });
});


// TENHO / FALTA

document.querySelectorAll(".card").forEach(card => {
    const id = card.getAttribute("data-id");
    const btn = card.querySelector(".toggle-btn");

    const saved = localStorage.getItem(id);

    if (saved === "have") {
        btn.classList.add("have");
        btn.textContent = "Tenho";
    }

    btn.addEventListener("click", () => {
        if (btn.classList.contains("have")) {
            btn.classList.remove("have");
            btn.textContent = "Falta";
            localStorage.setItem(id, "lack");
        } else {
            btn.classList.add("have");
            btn.textContent = "Tenho";
            localStorage.setItem(id, "have");
        }
    });
});