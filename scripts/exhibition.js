console.log(`Script loaded.`)

const box = document.getElementById('exhibition');
const imgs = document.getElementsByClassName('img-exhibition');


let playId;
let move = ()=> { 
    let i = 0;
    playId = setInterval(() => {
        imgs[i].classList.remove('active');
        i++;
        if (i == imgs.length){
            i = 0;
        }
        imgs[i].classList.add('active');

    },4000);
}
move();

box.addEventListener('mouseenter', (e) => clearInterval(playId));
box.addEventListener('mouseleave', (e) => move());