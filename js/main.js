const header = document.querySelector('header')

window.addEventListener('scroll', function() {
    header.classList.toggle('sticky', window.scrollY > 0)
})

const toggleMenu = () => {
    header.classList.toggle('active')
}