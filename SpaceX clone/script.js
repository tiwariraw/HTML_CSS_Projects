const hamburgerBtn = document.querySelector('.hamburger');
const overlay = document.getElementById('overlay');
const sideNavBar = document.querySelector('.sideNavBar');
const counters = document.querySelectorAll('.counter'); //collection of 3 counter span elements
let scrollStarted = false; 

hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('open');
    overlay.classList.toggle('overlay-show');
    sideNavBar.classList.toggle('active');
    document.body.classList.toggle('stop-scroll');
});

window.addEventListener('scroll', (e) => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 100 && !scrollStarted) {
        countUp();
        scrollStarted = true;
    } else if (scrollPosition < 100 && scrollStarted) {
        // reset the counter values
        reset();
        scrollStarted = false;
    }
});

function reset() {
    counters.forEach((counter) => (counter.innerHTML = '0'));
}

function countUp() {
    counters.forEach((counter) => {
        counter.innerHTML = '0';

        const updateCounter = () => {
            // get target value
            const target = +counter.getAttribute('data-target');

            // get current counter value
            const c = +counter.innerHTML;

            // create an increment
            const increment = target / 100;

            // If counter is less than target, add increment
            if (c < target) {
                // Round up and set counter value
                counter.innerHTML = `${Math.ceil(c + increment)}`;
                setTimeout(updateCounter, 10);
            } else {
                counter.innerHTML = target;
            }
        }

        updateCounter();
    });
}

