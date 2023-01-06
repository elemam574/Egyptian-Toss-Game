let coinImgs = document.querySelector('.coin-imgs');
let play = document.querySelector('#play');
let show = document.querySelector('#show');
let reset = document.querySelector('#reset');

let heads = 0;
let tails = 0;

show.disabled = true;
play.addEventListener('click', () => {
    show.disabled = true;
    document.querySelector('#myHand').style.display = "block";

    let i = Math.floor(Math.random() * 2);
    coinImgs.classList.add('coins');
    coinImgs.style.animation = "none";

    if (i) {
        setTimeout(() => {
            coinImgs.style.animation = "spin-heads 3s forwards";
        }, 100);
        heads++;
    } else {
        setTimeout(() => {
            coinImgs.style.animation = "spin-tails 3s forwards";
        }, 100);
        tails++;
    }
    setTimeout(() => {
        show.disabled = false;
    }, 3000);
    getHandOnCoin();
    disableButton();
});

function updateStatus() {
    document.querySelector('#heads-count').textContent = `ملك : ${heads}`;
    document.querySelector('#tails-count').textContent = `كتابة : ${tails}`;
};

function getHandOnCoin() {
    document.querySelector('#myHand').classList.remove('hand-move');
    document.querySelector('#myHand').classList.add('hand-on-it');
    // .animation = 'move-hand 1s forwards cubic-bezier(0.075, 0.82, 0.165, 1) 0.8s';
}

function disableButton() {
    play.disabled = true;
    // setTimeout(() => {
    //     play.disabled = false;
    // }, 3000);
};

show.addEventListener('click', () => {
    coinImgs.classList.remove('coins');
    document.querySelector('#myHand').classList.add('hand-move');
    setTimeout(() => {
        play.disabled = false;
    }, 3000);
    setTimeout(updateStatus, 1000);
})

reset.addEventListener('click', () => {
    document.querySelector('#myHand').classList.remove('hand-move');
    document.querySelector('#myHand').classList.remove('hand-on-it');
    show.disabled = true;
    play.disabled = false;
    coinImgs.style.animation = 'none';
    heads = 0;
    tails = 0;
    updateStatus();
})