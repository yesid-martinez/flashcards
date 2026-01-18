import data from '../data/data.json' assert { type: 'json' };

let isFlipped = false;

const renderFlip = (isFlipped: boolean) => {
    cardElement?.classList.toggle('flipped', isFlipped);
};

const cardElement = document.querySelector('.card');
cardElement?.addEventListener('click', () => {
    isFlipped = !isFlipped;
    renderFlip(isFlipped);
});
    
const frontElement = cardElement?.querySelector('.front p');
const backElement = cardElement?.querySelector('.back p');
    
let currentIndex = 0;

// Entry point

const updateCardContent = () =>{
    const currentContent = data[currentIndex];
    if (currentContent && frontElement && backElement){
        frontElement.textContent = currentContent.word;
        backElement.textContent = currentContent.translation;
    };
};

const nextCardBtn = document.getElementById('nextBtn');

nextCardBtn?.addEventListener('click', () => {
    const goToNextCard = () => {
        currentIndex = (currentIndex + 1) % data.length;
        updateCardContent();
    };

    if (!isFlipped) {
        goToNextCard();
        return;
    }

    const onTransitionEnd = (event: Event) => {
        if (!(event instanceof TransitionEvent)) return;
        if (event.propertyName !== 'transform') return;

        cardElement?.removeEventListener('transitionend', onTransitionEnd);
        goToNextCard();
    };

    isFlipped = false;
    renderFlip(isFlipped);
    cardElement?.addEventListener('transitionend', onTransitionEnd);
});