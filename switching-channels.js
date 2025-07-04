// === Configurable flicker settings ===
const FLICKER_COUNT = 5;           // how many flickers per sequence
const FLICKER_INTERVAL = 75;       // ms between flickers
const FLICKER_FADE_DELAY = 75;     // ms delay before hiding after last flicker

// === Flicker function ===
let isFlickering = false;  // guard flag

function flickerChannel() {
    if (isFlickering) return; // prevent overlapping flickers
    isFlickering = true;

    const channelImg = document.querySelector('.channel');
    let count = 0;

    channelImg.style.transition = "none";
    channelImg.style.opacity = "1";

    const interval = setInterval(() => {
        const randomNum = Math.floor(Math.random() * 11) + 1;
        channelImg.src = `tv-shows/${randomNum}.gif`;
        count++;

        if (count >= FLICKER_COUNT) {
            clearInterval(interval);
            setTimeout(() => {
                channelImg.style.opacity = "0";
                isFlickering = false;
            }, FLICKER_FADE_DELAY);
        }
    }, FLICKER_INTERVAL);
}

// === Setup click listener on the image ===
const switchImg = document.querySelector('.static-switches');
if (switchImg) {
    switchImg.addEventListener('click', () => {
        flickerChannel();
    });
}
