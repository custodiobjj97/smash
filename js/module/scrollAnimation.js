export default function initScrollAnimation() {
    
    function scrollAnime() {
        const elementSection = document.querySelectorAll('[data-scroll]')
        const halfHeight=window.innerHeight * 0.6
        elementSection.forEach((section) => {
            const elementTop = section.getBoundingClientRect().top
            const isSectionVisible = (elementTop - halfHeight) < 0
            if (isSectionVisible) {
                section.classList.add('visible')
            } else {
                section.classList.remove('visible')
            }
        })
    }

    window.addEventListener('scroll', scrollAnime)
}