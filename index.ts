import data from './data/data.json' assert { type: 'json' };

let isFlipped = false;

const renderFlip = (isFlipped: boolean) => {
    cardElement?.classList.toggle('flipped', isFlipped);
};

const cardElement = document.getElementById('card');
cardElement?.addEventListener('click', () => {
    isFlipped = !isFlipped;
    renderFlip(isFlipped);
});
    
const frontElement = cardElement?.querySelector('.front p');
const backElement = cardElement?.querySelector('.back p');
    
let currentIndex = 0;

const updateCardContent = () =>{
    const currentContent = data[currentIndex];
    if (currentContent && frontElement && backElement){
        frontElement.textContent = currentContent.word;
        backElement.textContent = currentContent.translation;
    };
};

const nextCardBtn = document.getElementById('nextBtn');
nextCardBtn?.addEventListener('click', () => {
    isFlipped = false;
    renderFlip(isFlipped);

    currentIndex = (currentIndex - 1 + data.length) % data.length;

    updateCardContent();
});

updateCardContent();