export default function initSliderTouch() {
    const slider = document.querySelector('.slider-container')
    const slides = Array.from(document.querySelectorAll('.slide'))
    
    let isDragging=false
    let currentTranslate = 0
    let prevTranslate = 0
    let startPos = 0
    let animationID = 0
    let currentIndex = 0


    slides.forEach((slide,index) => {
        const slideImage = slide.querySelector('img')

        slideImage.addEventListener('dragstart', (e) => e.preventDefault())
        
        // event mouse
        slide.addEventListener('mousedown', touchStart(index))
        slide.addEventListener('mouseup', touchEnd)
        slide.addEventListener('mouseleave', touchEnd)
        slide.addEventListener('mousemove', touchMove)

        // event touch

        slide.addEventListener('touchstart', touchStart(index))
        slide.addEventListener('touchend', touchEnd)
        slide.addEventListener('touchmove', touchMove)
    })
    
    window.oncontextmenu = function (event) {
        event.preventDefault()
        event.stopPropagation()
        return false
    }

    function touchStart(index) {
        return function (event) {
            isDragging = true 
            startPos = getPositionX(event)
            currentIndex = index
            
            animationID = requestAnimationFrame(animation)
            slider.classList.add('grabbing')
        }
    }

    function touchEnd() {
        isDragging = false 
        cancelAnimationFrame(animationID)

        const movedBy = currentTranslate - prevTranslate

        if (movedBy < -100 && currentIndex < slides.length - 1) currentIndex += 1
        
        if (movedBy > 100 && currentIndex > 0) currentIndex -= 1
        
        setSliderPositionByIndex()

        slider.classList.remove('grabbing')
    }
    
    function touchMove(event) {
        if (isDragging) {
            const currentPosition = getPositionX(event)
            currentTranslate = prevTranslate + currentPosition - startPos
        }
    }

    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length
        setSliderPositionByIndex()
    },7000)

   

    function getPositionX(event) {
        return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
    }

    function setSliderPosition() {
        slider.style.transform=`translateX(${currentTranslate}px)`
    }

    function animation() {
        setSliderPosition()
        if(isDragging) requestAnimationFrame(animation)
    }
    
    function setSliderPositionByIndex() {
        currentTranslate = currentIndex * -window.innerWidth
        prevTranslate = currentTranslate
        setSliderPosition()
    }
}