document.addEventListener("DOMContentLoaded", main);
const form = document.querySelector('.form')
const modal = document.querySelector('.modal')

function main() {
    new WOW().init();

    document.querySelectorAll('.achievement').forEach(el => {
        el.addEventListener('mouseenter', () => {
            el.classList.add('active')
        })
    })

    form.addEventListener('submit', ev => {
        ev.preventDefault()
        const btn = modal.querySelector('.btn')
        const oldText = btn.innerHTML

        btn.innerHTML = 'Идет соединение'

        setTimeout(() => {
            btn.innerHTML = oldText
            modal.querySelector('.first-step').classList.add('animate__animated', 'animate__fadeOut')
            setTimeout(() => {
                modal.querySelector('.first-step').classList.add('hidden')
                modal.querySelector('.second-step').classList.remove('hidden')
                modal.querySelector('.second-step').classList.add('animate__animated animate__fadeIn')
            }, 300)
        }, 500)
    })
}

function openModal() {
    modal.classList.add('active')
    document.body.classList.add('no-scroll')
    modal.querySelector('.modal-content').classList.add('animate__zoomIn')

}

function closeModal() {
    modal.classList.remove('active')
    document.body.classList.remove('no-scroll')
    modal.querySelector('.modal-content').classList.remove('animate__zoomIn')
    const firstStep = modal.querySelector('.first-step')
    const secondStep = modal.querySelector('.second-step')
    setTimeout(() => {
        firstStep.classList.remove('hidden', 'animate__animated', 'animate__fadeOut')
        secondStep.classList.add('hidden')
        secondStep.classList.remove('animate__fadeOut', 'animate__animated')
    }, 400)
}