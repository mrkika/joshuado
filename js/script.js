// Animate timeline items on scroll
const timelineItems = document.querySelectorAll('.timeline-item');

function checkTimelineItems() {
    const triggerBottom = window.innerHeight * 0.85;

    timelineItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;

        if (itemTop < triggerBottom) {
            item.classList.add('active');
        }
    });
}

window.addEventListener('scroll', checkTimelineItems);
window.addEventListener('load', checkTimelineItems);
