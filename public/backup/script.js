/* ===================================
   SPOTLIGHT & INTERACTIONS
   =================================== */

// Track mouse position for spotlight effect
const spotlight = document.querySelector('.spotlight');
document.addEventListener('mousemove', (e) => {
    spotlight.style.setProperty('--x', `${e.clientX}px`);
    spotlight.style.setProperty('--y', `${e.clientY}px`);
});

// ===================================
// TIME UPDATE (New Delhi / Tokyo)
// ===================================
function updateTime() {
    const timeElement = document.getElementById('local-time');
    const now = new Date();

    // Formatting for India Standard Time (IST)
    const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    };

    const timeString = now.toLocaleTimeString('en-US', options);
    timeElement.textContent = timeString + " IST";
}

setInterval(updateTime, 1000);
updateTime(); // Initial call

// ===================================
// TILT EFFECT (Vanilla JS Implementation)
// ===================================
const cards = document.querySelectorAll('[data-tilt]');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Calculate percentage position
        const xPct = x / rect.width;
        const yPct = y / rect.height;

        // Calculate rotation (max 5 degrees)
        const xRot = (0.5 - yPct) * 10;
        const yRot = (xPct - 0.5) * 10;

        card.style.transform = `perspective(1000px) rotateX(${xRot}deg) rotateY(${yRot}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });
});

// ===================================
// FLUID HOVER EFFECTS FOR LINKS
// ===================================
// Add subtle sound interaction or visual feedback
const links = document.querySelectorAll('a');
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        // Optional: Cursor change or subtle scale
    });
});
