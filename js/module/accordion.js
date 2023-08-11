export default function initAccordion() {
    const accordionItem = document.querySelectorAll('.accordion_item')
    accordionItem.forEach((item) => {
        const accordionHeader = item.querySelector('.accordion_header')
        const accordionIcon = item.querySelector('.accordion_header span')
        function activeAccordion() {
            const accordionContent = item.querySelector('.accordion_content')
            if (accordionContent.classList.contains('active')) {
                accordionContent.classList.remove('active')
                accordionIcon.innerHTML = "+"
            } else {
                accordionContent.classList.toggle('active')
                accordionIcon.innerHTML = "-"
            }
        }

        accordionHeader.addEventListener('click', activeAccordion)
    })
}