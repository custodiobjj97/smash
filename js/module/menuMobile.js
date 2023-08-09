export default function initMenuMobile(){
    const toggleButton = document.querySelector('.menu-button')
    
    function activeToggle(event) {
        if (event.type === 'touchstart') {
            preventDefault()
        }
        const menu = document.querySelector('.list-menu')
        const icon = document.querySelector('.hamburger')
        menu.classList.toggle('open')
        icon.classList.toggle('open')
    }

    ['click', 'touchstart'].forEach(userEvent => toggleButton.addEventListener(userEvent, activeToggle))
}

