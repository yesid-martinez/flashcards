const cardElement = document.getElementById('card');
if (!cardElement) {
    console.warn('Card element not found');
} else {
        cardElement.addEventListener('click', () => {
        cardElement.classList.toggle('flipped');
        });
    };