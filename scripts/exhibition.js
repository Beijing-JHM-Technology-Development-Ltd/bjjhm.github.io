console.log(`Script loaded.`)

const box = document.getElementById('slide');
const imgs = document.getElementById('imgs');
const img2 = document.getElementById('imgs2');


let left = 0;
let left2 = 0;

imgs2.innerHTML = imgs.innerHTML;


let playId;
let move = ()=> { 
    playId = setInterval(() => {
        left -= imgs.clientWidth/3+1;

        imgs.style.left = left+'px';

        if (left *-1 > imgs.clientWidth){
            left = imgs.clientWidth;
        }

        left2 -= imgs.clientWidth/3+1;
        imgs2.style.left = left2+'px';
        if (left2 *-1 > 2*imgs.clientWidth){
            left2 = 0;
        }
    },2000);
}
move();

box.addEventListener('mouseenter', (e) => clearInterval(playId));
box.addEventListener('mouseleave', (e) => move());