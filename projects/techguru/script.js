const toggleButton = document.getElementsByClassName('toggle__button')[0]
const navbarlinks = document.getElementsByClassName('nav-links')[0]
const toggleCat = document.getElementsByClassName('toggle_category')[0]
const heroToggle = document.getElementsByClassName('')
const teamToggle = document.getElementsByClassName('toggle__team')[0]




toggleButton.addEventListener('click', () => {
    navbarlinks.classList.toggle('active');
})

// toggleCat.addEventListener('click', () => {
//     navbarlinks.classList.remove('active');
// })
heroToggle.addEventListener('click', () => {
    navbarlinks.classList.toggle('active');
})

teamToggle.addEventListener('click', () => {
    navbarlinks.classList.toggle('active');
})