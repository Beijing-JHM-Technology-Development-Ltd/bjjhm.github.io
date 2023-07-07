console.log(`Script loaded.`)

const box = document.getElementById('exhibition');
const imgs = document.getElementById('imgs');


let left = imgs.clientWidth/3+1;
// let left2 = 0;
// const img2 = document.getElementById('imgs2');
// imgs2.innerHTML = imgs.innerHTML;


let playId;
let move = ()=> { 
    playId = setInterval(() => {
        left -= imgs.clientWidth/3+1;

        imgs.style.left = left+'px';

        if (left *-1 > 2*imgs.clientWidth/3-1){
            left = imgs.clientWidth/3+1;
        }
    },3500);
}
move();

// box.addEventListener('mouseenter', (e) => clearInterval(playId));
// box.addEventListener('mouseleave', (e) => move());