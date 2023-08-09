export default function initNumberAnimation() {
    const numeros = document.querySelectorAll('[data-numero]')
    function animeNumeros() {
        numeros.forEach((numero) => {
            const total = +numero.innerText
            const incremento = Math.floor(total / 100)
            let start = 0
            const timer = setInterval(() => {
                start = incremento + start
                numero.innerText = start
                if (start > total) {
                    numero.innerText = start
                    clearInterval(timer)
                }
            }, 50 * Math.random())
        })
    }
    
    function handleMutation(mutation) {
        if (mutation[0].target.classList.contains('visible')) {
            animeNumeros()
            observer.disconnect()
        }
    }

    const observerTarget = document.querySelector('.number-boxs')
    const observer = new MutationObserver(handleMutation)
    observer.observe(observerTarget,{attributes:true})
}