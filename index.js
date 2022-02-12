document.addEventListener("DOMContentLoaded", main);

function main(){
    new WOW().init();
    document.querySelectorAll('.achievement').forEach(el => {
        el.addEventListener('mouseenter', () => {
            el.classList.add('active')
        })
    })
}
