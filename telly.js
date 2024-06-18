const fmPointer = document.querySelector('.fm-pointer');
const imageContainer = document.querySelector('.image-container');

let minY, maxY;

function updateBounds() {
    const imageContainerRect = imageContainer.getBoundingClientRect();
    minY = 158;
    maxY = imageContainerRect.height - fmPointer.clientHeight - 320; // Adjusted by 20 pixels
}

document.addEventListener('mousemove', (e) => {
    const imageContainerRect = imageContainer.getBoundingClientRect();
    const pointerY = Math.max(minY, Math.min(e.clientY - imageContainerRect.top, maxY));
    fmPointer.style.top = `${pointerY}px`;
});

window.addEventListener('resize', updateBounds);
updateBounds(); // Initial update

const btmPointer = document.querySelector('.btm-pointer');

let minX, maxX;

document.addEventListener('mousemove', (e) => {
    const imageContainerRect = imageContainer.getBoundingClientRect();

    minX = imageContainerRect.width * 0.40; // 25% of the imageContainer's width
    maxX = imageContainerRect.width * 0.6 - btmPointer.clientWidth; // 75% of the imageContainer's width

    const pointerX = Math.max(minX, Math.min(e.clientX - imageContainerRect.left, maxX));
    btmPointer.style.left = `${pointerX}px`;
});

window.addEventListener('resize', () => {
    const imageContainerRect = imageContainer.getBoundingClientRect();
    maxX = imageContainerRect.width * 0.75 - btmPointer.clientWidth;
    btmPointer.style.left = `${Math.min(parseInt(btmPointer.style.left), maxX)}px`;
});
