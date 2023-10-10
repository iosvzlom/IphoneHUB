function navigation() {
    let btn = document.querySelector('.menu');
    let navigation = document.querySelector('.navigation');
    let navigationItems = document.querySelectorAll('.navigation a');



    btn.addEventListener('click', () => {
        btn.classList.toggle('active')
        navigation.classList.toggle('active')
    })

    navigationItems.forEach(navItem => {
        navItem.addEventListener('click', () => {
            btn.classList.remove('active');
            navigation.classList.remove('active');
        })
    })
}
navigation()
function animation() {
            let amount = 300;
            let body = document.querySelector('.footer');
            let i = 0;
            while(i<amount){
                let drop = document.createElement('span');

                let size = Math.random() * 5;
                let posX = Math.floor(Math.random() * (window.innerWidth - 50));
                let posY = Math.floor(Math.random() * (window.innerHeight-150));
                let delay = Math.random() * -20;



                drop.style.left = posX + 'px';
                drop.style.top = posY + 'px';
                drop.style.animationDelay = delay+'s';

                drop.style.width = size * 0.1 + 'px';
                drop.style.height = size * 0.1 + 'px';
                body.appendChild(drop);
                i++
            }
}
animation()