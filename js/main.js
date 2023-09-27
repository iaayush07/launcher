const countToDate = new Date().setHours(new Date().getHours() + 240);
let previous;

setInterval(() => {
    const currentDate = new Date();
    const timeBetweenDates = Math.floor((countToDate - currentDate) / 1000);
    if (timeBetweenDates !== previous) {
        flipAllCards(timeBetweenDates);
    }
    previous = timeBetweenDates;
}, 250);

function flipAllCards(time) {
    const days = Math.floor(time / (24 * 3600));
    const hours = Math.floor((time / 3600) % 24);
    const minutes = Math.floor((time / 60) % 60);
    const seconds = Math.floor(time % 60);

    const daysCard = document.querySelector('.days > .flip-card');
    const hoursCard = document.querySelector('.hours > .flip-card');
    const minutesCard = document.querySelector('.minutes > .flip-card');
    const secondsCard = document.querySelector('.seconds > .flip-card');

    flipOneCard(daysCard, days);
    flipOneCard(hoursCard, hours);
    flipOneCard(minutesCard, minutes);
    flipOneCard(secondsCard, seconds);

}

function flipOneCard(flipOneCard, time) {
    time = String(time).padStart(2, '0');
    const currentValue = flipOneCard.querySelector('.top').innerText;

    if (time == currentValue) return;

    const topFlip = document.createElement('div');
    topFlip.classList.add('top-flip');
    topFlip.innerText = currentValue;

    const bottomFlip = document.createElement('div');
    bottomFlip.classList.add('bottom-flip');
    bottomFlip.innerText = time;

    const topHalf = flipOneCard.querySelector('.top');
    const bottomHalf = flipOneCard.querySelector('.bottom');

    topFlip.addEventListener('animationstart', () => {
        topHalf.innerText = time;
    })

    topFlip.addEventListener('animationend', () => {
        topFlip.remove()
    });

    bottomFlip.addEventListener('animationend', () => {
        bottomHalf.innerText = time;
        bottomFlip.remove()
    });

    flipOneCard.appendChild(topFlip);
    flipOneCard.appendChild(bottomFlip);
}


